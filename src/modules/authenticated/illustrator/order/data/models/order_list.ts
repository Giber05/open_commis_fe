import ConsumerModel from "../../../../../common/authentication/data/model/consumer_model";
import { CommissionPost } from "../../../../../common/commission/data/models/commission_post";
import { OrderEntity } from "../../../../../common/order/domain/entities/order_entity";

export class OrderList extends OrderEntity {
  consumer: ConsumerModel;
  commission?: CommissionPost | null;

  constructor(params: { consumer: ConsumerModel; commission?: CommissionPost | null; id: number; status: string; grandTotal: number; orderDate: Date }) {
    super({
      id: params.id,
      status: params.status,
      grandTotal: params.grandTotal,
      orderDate: params.orderDate,
    });
    this.consumer = params.consumer;
    this.commission = params.commission;
  }

  public static fromJson(json: any): OrderList {
    return new OrderList({
      id: json.id,
      status: json.status,
      grandTotal: json.grandTotal,
      orderDate: json.orderDate,
      consumer: ConsumerModel.fromJson(json.consumer),
      commission: json.commission == undefined || null ? null : CommissionPost.fromJson(json.commission),
    });
  }
}
