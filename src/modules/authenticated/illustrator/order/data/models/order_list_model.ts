import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import { OrderList } from "./order_list";

class OrderListModel {
  success: boolean;
  message: string;
  data: DataOrder;

  constructor(params: { success: boolean; message: string; data: DataOrder }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }
  public static fromJson(json: any): OrderListModel {
    return new OrderListModel({
      success: json.success,
      message: json.message,
      data: DataOrder.fromJson(json.data),
    });
  }
}
export default OrderListModel;

class DataOrder {
  pagination: PaginationModel;
  orders: OrderList[];
  constructor(params: { pagination: PaginationModel; orders: OrderList[] }) {
    this.pagination = params.pagination;
    this.orders = params.orders;
  }

  public static fromJson(json: any): DataOrder {
    return new DataOrder({
      pagination: PaginationModel.fromJson(json.pagination),
      orders: json.orders.map((order: any) => {
        return OrderList.fromJson(order);
      }),
    });
  }
}
