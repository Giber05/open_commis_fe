import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { CityModel } from "../models/manage_account/city_model";
import { ProvinceModel } from "../models/manage_account/province_model";
import { VerifyIllustratorAccountModel } from "../models/manage_account/verif_illustrator_account_model";

export interface ManageAccountRemoteDS {
  getProvinces(): Promise<ProvinceModel>;
  getCities(provinceId?: number): Promise<CityModel>;
  sendIllustratorAccountVerification(params: { token: string; nik: string; address: string; province: string; city: string; background: string; idCardPhoto: string; cardSelfiePhoto: string }): Promise<VerifyIllustratorAccountModel>;
}

export class ManageAccountRemoteDSImpl implements ManageAccountRemoteDS {
  private baseClient = new BaseClient();

  async sendIllustratorAccountVerification(params: { token: string; nik: string; address: string; province: string; city: string; background: string; idCardPhoto: string; cardSelfiePhoto: string }): Promise<VerifyIllustratorAccountModel> {
    let sendOrderURL = NetworkConstant.baseUrl + "illustrator/verify-account";
    const response = await this.baseClient.postWithCookie({
      url: sendOrderURL,
      body: {
        nik: params.nik,
        address: params.address,
        province: params.province,
        city: params.city,
        background: params.background,
        idCard: params.idCardPhoto,
        cardSelfie: params.cardSelfiePhoto,
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return VerifyIllustratorAccountModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

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
  async getCities(provinceId?: number): Promise<CityModel> {
    let getCitiesURL = "https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=" + provinceId;
    const response = await this.baseClient.getWithoutCookie({
      url: getCitiesURL,
    });
    if (response.status >= 200 && response.status <= 210) {
      return CityModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data });
  }
}
