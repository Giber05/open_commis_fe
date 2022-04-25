import { OrderDetailEntity } from "../../domain/entities/order_detail_entity";

export class OrderDetailModel extends OrderDetailEntity {
  public static fromJson(json: any): OrderDetailModel {
    return new OrderDetailModel({
      requestDetail: json.requestDetail,
      referenceImage: json.referenceImage ?? null,
    });
  }
}
