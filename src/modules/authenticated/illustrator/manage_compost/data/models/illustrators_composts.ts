import { CommissionPostEntity } from "../../../../../common/commission/domain/entities/commission_post_entity";

class IllustratorComposts extends CommissionPostEntity {
  public static fromJson(json: any): IllustratorComposts {
    return new IllustratorComposts({
      id: json.id,
      title: json.title,
      durationTime: json.durationTime,
      price: json.price,
      description: json.description,
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
export default IllustratorComposts;
