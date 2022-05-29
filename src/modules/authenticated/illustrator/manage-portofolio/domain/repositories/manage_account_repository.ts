import Resource from "../../../../../../core/utils/resource";
import { CityModel } from "../../data/models/manage_account/city_model";
import { ProvinceModel } from "../../data/models/manage_account/province_model";

export interface ManageAccountRepo {
  getProvinces(): Promise<Resource<ProvinceModel>>;
  getCities(provinceId?: number): Promise<Resource<CityModel>>;
}
