import { Province } from "./province";

export class ProvinceModel {
  provinces: Province[];

  constructor(provinces: Province[]) {
    this.provinces = provinces;
  }

  public static fromJson(json: any): ProvinceModel {
    return new ProvinceModel(json.provinsi.map((province: Province) => Province.fromJson(province)));
  }
}
