import { ProvinceEntity } from "../../../domain/entities/province_entity";

export class Province extends ProvinceEntity {
  public static fromJson(json:any):Province{
    return new Province ({
      id:json.id,
      name:json.nama,
    })
  }
}