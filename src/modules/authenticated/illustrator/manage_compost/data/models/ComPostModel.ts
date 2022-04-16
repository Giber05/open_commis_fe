import ComPostEntity from "../../domain/entities/compost_entity";

class ComPostModel extends ComPostEntity {
  public static fromJson(json: any): ComPostModel {
    return new ComPostModel({
      id: json.id,
      name: json.name,
      description: json.description,
      imageSrc: json.imageSrc,
      price: json.price,
      category: json.category,
      duration: json.duration,
      tags: json.tags,
    });
  }
}
export default ComPostModel;
