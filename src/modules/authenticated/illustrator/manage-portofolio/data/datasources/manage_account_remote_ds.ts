import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { CityModel } from "../models/manage_account/city_model";
import { ProvinceModel } from "../models/manage_account/province_model";

export interface ManageAccountRemoteDS {
  getProvinces(): Promise<ProvinceModel>;
  getCities(provinceId?:number): Promise<CityModel>;
}

export class ManageAccountRemoteDSImpl implements ManageAccountRemoteDS {
  private baseClient = new BaseClient();

  async getProvinces(): Promise<ProvinceModel> {
    let getProvincesURL = "https://dev.farizdotid.com/api/daerahindonesia/provinsi";
    const response = await this.baseClient.getWithoutCookie({
      url: getProvincesURL,
    });
    if (response.status >= 200 && response.status <= 210) {
      return ProvinceModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data });
  }
  async getCities(provinceId?:number): Promise<CityModel> {
    let getCitiesURL = "https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi="+provinceId;
    const response = await this.baseClient.getWithoutCookie({
      url: getCitiesURL,
    });
    if (response.status >= 200 && response.status <= 210) {
      return CityModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data });
  }
}
