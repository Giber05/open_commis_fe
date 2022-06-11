import { CityEntity } from "../../../domain/entities/city_entity";

export class City extends CityEntity {
  public static fromJson(json: any): City {
    return new City({
      id: json.id,
      provinceId: json.id_provinsi,
      name: json.nama,
    });
  }
}
