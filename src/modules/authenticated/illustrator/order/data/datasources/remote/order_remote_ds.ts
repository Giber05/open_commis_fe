import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import OrderListModel from "../../models/order_list_model";

export interface OrderRemoteDS {
  getOrders(params: { page: number; limit: number;token:string }): Promise<OrderListModel>;
}

export class OrderRemoteDSImpl implements OrderRemoteDS {
  private baseClient = new BaseClient();

  async getOrders(params: { page: number; limit: number;token:string }): Promise<OrderListModel> {
    let getOrdersURL = NetworkConstant.baseUrl + "orders";
    const response = await this.baseClient.getWithoutCookie({
      url: getOrdersURL,
      configs: {
        params: {
          limit: params.limit,
          page: params.page,
        },
        headers:{
          Authorization:"Bearer "+params.token
        }
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return OrderListModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
