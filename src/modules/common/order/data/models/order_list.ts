import ConsumerModel from "../../../authentication/data/model/consumer_model";
import { CommissionPost } from "../../../commission/data/models/commission_post";
import { OrderEntity } from "../../domain/entities/order_entity";

export class OrderList extends OrderEntity {
  consumer: ConsumerModel;
  commission?: CommissionPost | null;

  constructor(params: { consumer: ConsumerModel; commission?: CommissionPost | null; id: number; status: string; grandTotal: number; orderDate: Date;reviewed:boolean }) {
    super({
      id: params.id,
      status: params.status,
      grandTotal: params.grandTotal,
      orderDate: params.orderDate,
      reviewed: params.reviewed,
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
      reviewed: json.reviewed,
      consumer: ConsumerModel.fromJson(json.consumer),
      commission: json.commission == undefined || null ? null : CommissionPost.fromJson(json.commission),
    });
  }
}
