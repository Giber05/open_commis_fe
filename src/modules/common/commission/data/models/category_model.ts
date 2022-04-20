import { CategoryEntity } from "../../domain/entities/category_entity";

export class CategoryModel extends CategoryEntity {
  public static fromJson(json: any): CategoryModel {
    return new CategoryModel({
      id: json.id,
      categoryName: json.categoryName,
    });
  }
}
