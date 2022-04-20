import { TagEntity } from "../../domain/entities/tag_entity";

export class TagModel extends TagEntity {
  public static fromJson(json: any): TagModel {
    return new TagModel({
      id: json.id,
      tagName: json.tagName,
    });
  }
}
