import Resource from "../../../../../../core/utils/resource";
import OrderListModel from "../../data/models/order_list_model";

export interface OrderRepo {
  getOrders(params: { page: number; limit: number;token:string }): Promise<Resource<OrderListModel>>;

}
