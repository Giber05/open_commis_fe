import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { IllustratorOrderDetailModel } from "../../models/illustrator_order_detail_model";
import OrderListModel from "../../models/order_list_model";

export interface OrderRemoteDS {
  getOrders(params: { page: number; limit: number; token: string;compostId?:number }): Promise<OrderListModel>;
  getOrderDetail(params: { orderId: number; token: string }): Promise<IllustratorOrderDetailModel>;
}

export class OrderRemoteDSImpl implements OrderRemoteDS {
  private baseClient = new BaseClient();
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
      url: params.compostId == undefined? getOrdersURL:getOrdersByCommissionURL,
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
