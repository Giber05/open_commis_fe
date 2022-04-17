import { ArtworkEntity } from "../../domain/entities/artwork_entity";

export class ArtworkModel extends ArtworkEntity {
  public static fromJson(json:any):ArtworkModel{
    return new ArtworkModel ({
      id:json.id,
      image:json.image,
      description:json.description,
      createdAt:json.createdAt,
      updatedAt:json.updatedAt,
    })
  }
}