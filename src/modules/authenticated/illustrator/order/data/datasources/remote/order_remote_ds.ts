import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { IllustratorOrderDetailModel } from "../../models/illustrator_order_detail_model";
import OrderListModel from "../../../../../../common/order/data/models/order_list_model";
import { SubmissionFileModel } from "../../models/submission_file_model";

export interface OrderRemoteDS {
  getOrders(params: { page: number; limit: number; token: string; compostId?: number }): Promise<OrderListModel>;
  getOrderDetail(params: { orderId: number; token: string }): Promise<IllustratorOrderDetailModel>;
  confirmOrder(params: { orderId: number; token: string; accept: boolean; rejectReason?: string }): Promise<IllustratorOrderDetailModel>;
  uploadSubmissionFile(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void }): Promise<SubmissionFileModel>;
  sendOrder(params: { orderId: number; token: string; submissionFile:string, cloudLink?:string,description?:string }): Promise<IllustratorOrderDetailModel>;
}

export class OrderRemoteDSImpl implements OrderRemoteDS {
  private baseClient = new BaseClient();

  async sendOrder(params: { orderId: number; token: string; submissionFile: string; cloudLink?: string; description?: string; }): Promise<IllustratorOrderDetailModel> {
    let sendOrderURL = NetworkConstant.baseUrl + "orders/"+params.orderId+"/send";
    const response = await this.baseClient.postWithCookie({
      url: sendOrderURL,
      body: {
        submissionFile:params.submissionFile,
        link:params.cloudLink,
        description:params.description
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return IllustratorOrderDetailModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async uploadSubmissionFile(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void }): Promise<SubmissionFileModel> {
    let uploadSubmissionFileURL = NetworkConstant.baseUrl + "orders/submission/upload";
    const response = await this.baseClient.postWithCookie({
      url: uploadSubmissionFileURL,
      body: params.formData,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
        onUploadProgress: params.progressConfig,
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return SubmissionFileModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
  
  async confirmOrder(params: { orderId: number; token: string; accept: boolean; rejectReason?: string | undefined }): Promise<IllustratorOrderDetailModel> {
    let confirmOrderURL = NetworkConstant.baseUrl + "orders/" + params.orderId + "/confirm";
    const response = await this.baseClient.postWithCookie({
      url: confirmOrderURL,
      body: {
        accept: params.accept,
        rejectionReason: params.rejectReason,
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return IllustratorOrderDetailModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
  async getOrderDetail(params: { orderId: number; token: string }): Promise<IllustratorOrderDetailModel> {
    let getOrderDetailURL = NetworkConstant.baseUrl + "orders/" + params.orderId;
    const response = await this.baseClient.getWithCookie({
      url: getOrderDetailURL,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return IllustratorOrderDetailModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async getOrders(params: { page: number; limit: number; token: string; compostId?: number }): Promise<OrderListModel> {
    let getOrdersURL = NetworkConstant.baseUrl + "orders";
    let getOrdersByCommissionURL = NetworkConstant.baseUrl + "commissions/" + params.compostId + "/orders";
    const response = await this.baseClient.getWithCookie({
      url: params.compostId == undefined ? getOrdersURL : getOrdersByCommissionURL,
      configs: {
        params: {
          limit: params.limit,
          page: params.page,
        },
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return OrderListModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
