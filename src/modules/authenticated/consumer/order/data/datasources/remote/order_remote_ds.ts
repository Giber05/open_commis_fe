import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import OrderListModel from "../../../../../../common/order/data/models/order_list_model";
import { ConsumerMakeOrderModel } from "../../models/order/make_order/consumer_make_order_model";
import { ConsumerOrderDetail } from "../../models/order/order_detail/consumer_detail_order";
import { ConsumerOrderDetailModel } from "../../models/order/order_detail/consumer_order_detail_model";
import { PaymentModel } from "../../models/payment/payment_model";

export interface OrderRemoteDS {
  getOrders(params: { page: number; limit: number; token: string; }): Promise<OrderListModel>;
  getOrderDetail(params: { orderId: number; token: string }): Promise<ConsumerOrderDetailModel>;
  createOrder(params: { orderForm: any; token: string }): Promise<ConsumerMakeOrderModel>;
  makePayment(params:{token:string; orderId:number; method:string}):Promise<PaymentModel>;
}

export class OrderRemoteDSImpl implements OrderRemoteDS {
  private baseClient = new BaseClient();
  
  makePayment(params: { token: string; orderId: number; method: string; }): Promise<PaymentModel> {
    throw new Error("Method not implemented.");
  }

  async createOrder(params: { orderForm: any; token: string; }): Promise<ConsumerMakeOrderModel> {
    let createOrderURL = NetworkConstant.baseUrl + "orders/checkout";
    const response = await this.baseClient.postWithCookie({
      url: createOrderURL,
      body:params.orderForm,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
          "Content-Type":"multipart/form-data",
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ConsumerMakeOrderModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async getOrderDetail(params: { orderId: number; token: string }): Promise<ConsumerOrderDetailModel> {
    let getOrderDetailURL = NetworkConstant.baseUrl + "orders/" + params.orderId;
    const response = await this.baseClient.getWithCookie({
      url: getOrderDetailURL,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    console.log({response});
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      
      return ConsumerOrderDetailModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async getOrders(params: { page: number; limit: number; token: string; }): Promise<OrderListModel> {
    let getOrdersURL = NetworkConstant.baseUrl + "orders";
    const response = await this.baseClient.getWithCookie({
      url: getOrdersURL,
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
