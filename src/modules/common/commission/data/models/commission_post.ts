import { CommissionPostEntity } from "../../domain/entities/commission_post_entity";

export class CommissionPost extends CommissionPostEntity {
  public static fromJson(json: any): CommissionPost {
    return new CommissionPost({
      id: json.id,
      title: json.title,
      price: json.price,
      description: json.description,
      durationTime: json.durationTime,
      status: json.status,
      image_1: json.image_1,
      image_2: json.image_2,
      image_3: json.image_3,
      image_4: json.image_4,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
    });
  }
}
