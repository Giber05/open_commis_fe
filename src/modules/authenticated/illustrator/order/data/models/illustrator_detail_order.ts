import ConsumerModel from "../../../../../common/authentication/data/model/consumer_model";
import { CommissionPost } from "../../../../../common/commission/data/models/commission_post";
import { OrderDetailModel } from "../../../../../common/order/data/models/order_detail_model";
import { OrderEntity } from "../../../../../common/order/domain/entities/order_entity";
import { PaymentModel } from "../../../../../common/payment/data/models/payment_model";

export class IllustratorOrderDetail extends OrderEntity {
  consumer: ConsumerModel;
  commission: CommissionPost;
  detail: OrderDetailModel;
  payment?: PaymentModel | null;

  constructor(params: { consumer: ConsumerModel; commission: CommissionPost; detail: OrderDetailModel; payment?: PaymentModel | null; id: number; status: string; grandTotal: number; orderDate: Date; reviewed: boolean }) {
    super({
      id: params.id,
      status: params.status,
      grandTotal: params.grandTotal,
      orderDate: params.orderDate,
      reviewed: params.reviewed,
    });
    this.consumer = params.consumer;
    this.commission = params.commission;
    this.detail = params.detail;
    this.payment = params.payment;
  }

  public static fromJson(json: any): IllustratorOrderDetail {
    return new IllustratorOrderDetail({
      id: json.id,
      status: json.status,
      grandTotal: json.grandTotal,
      orderDate: json.orderDate,
      reviewed: json.reviewed,
      consumer: ConsumerModel.fromJson(json.consumer),
      commission: CommissionPost.fromJson(json.commission),
      detail: OrderDetailModel.fromJson(json.detail),
      payment: json.payment == null ? null : PaymentModel.fromJson(json.payment),
    });
  }
}
