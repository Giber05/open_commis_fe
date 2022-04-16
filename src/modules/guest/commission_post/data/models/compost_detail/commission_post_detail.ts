import { CommissionPostEntity, Illustrator } from "../../../domain/entity/commission_post_entity";

export class CommissionPostDetail extends CommissionPostEntity {
  public static fromJson(json: any): CommissionPostDetail {
    return new CommissionPostDetail({
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
      category: json.category,
      tags:json.tags.map((tag:string)=>tag),
      illustrator:Illustrator.fromJson(json.illustrator)
    });
  }
}