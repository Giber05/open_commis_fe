import { City } from "./city";

export class CityModel {
  cities: City[];

  constructor(cities: City[]) {
    this.cities = cities;
  }
  public static fromJson(json: any): CityModel {
    return new CityModel(json.kota_kabupaten.map((city: City) => City.fromJson(city)));
  }
}
