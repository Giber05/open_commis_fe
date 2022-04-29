import IlustratorModel from "../../../../../../../common/authentication/data/model/ilustrator_model";
import { CommissionPost } from "../../../../../../../common/commission/data/models/commission_post";
import { OrderDetailModel } from "../../../../../../../common/order/data/models/order_detail_model";
import { OrderEntity } from "../../../../../../../common/order/domain/entities/order_entity";
import { PaymentModel } from "../../payment/payment_model";

export class ConsumerOrderDetail extends OrderEntity {
  illustrator: IlustratorModel;
  commission: CommissionPost;
  detail: OrderDetailModel;
  payment?: PaymentModel | null;

  constructor(params: { payment?: PaymentModel | null; illustrator: IlustratorModel;reviewed:boolean; commission: CommissionPost; detail: OrderDetailModel; id: number; status: string; grandTotal: number; orderDate: Date }) {
    super({
      id: params.id,
      status: params.status,
      grandTotal: params.grandTotal,
      orderDate: params.orderDate,
      reviewed: params.reviewed,
    });
    this.illustrator = params.illustrator;
    this.commission = params.commission;
    this.detail = params.detail;
    this.payment = params.payment;
  }

  public static fromJson(json: any): ConsumerOrderDetail {
    return new ConsumerOrderDetail({
      id: json.id,
      status: json.status,
      grandTotal: json.grandTotal,
      orderDate: json.orderDate,
      reviewed: json.reviewed,
      illustrator: IlustratorModel.fromJson(json.illustrator),
      commission: CommissionPost.fromJson(json.commission),
      detail: OrderDetailModel.fromJson(json.detail),
      payment: json.payment == undefined ? null : PaymentModel.fromJson(json.payment),
    });
  }
}
