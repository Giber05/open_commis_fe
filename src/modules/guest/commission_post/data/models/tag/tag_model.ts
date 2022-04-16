import { TagEntity } from "../../../domain/entity/tag_entity";

export class TagModel extends TagEntity {
  public static fromJson(json: any): TagModel {
    return new TagModel({
      id: json.id,
      tagName: json.tagName,
    });
  }
}
