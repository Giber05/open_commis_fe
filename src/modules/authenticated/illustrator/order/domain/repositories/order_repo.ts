import Resource from "../../../../../../core/utils/resource";
import { IllustratorOrderDetailModel } from "../../data/models/illustrator_order_detail_model";
import OrderListModel from "../../data/models/order_list_model";

export interface OrderRepo {
  getOrders(params: { page: number; limit: number;token:string,compostId?: number }): Promise<Resource<OrderListModel>>;
  getOrderDetail(params: { orderId: number;token:string, }): Promise<Resource<IllustratorOrderDetailModel>>;

}
