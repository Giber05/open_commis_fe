import Resource from "../../../../../../core/utils/resource";
import OrderListModel from "../../../../../common/order/data/models/order_list_model";
import { ConsumerMakeOrderModel } from "../../data/models/order/make_order/consumer_make_order_model";
import { ConsumerOrderDetailModel } from "../../data/models/order/order_detail/consumer_order_detail_model";

export interface OrderRepo {
  getOrders(params: { page: number; limit: number; token: string }): Promise<Resource<OrderListModel>>;
  getOrderDetail(params: { orderId: number; token: string }): Promise<Resource<ConsumerOrderDetailModel>>;
  createOrder(params: { orderForm:any; token: string }): Promise<Resource<ConsumerMakeOrderModel>>;
}
