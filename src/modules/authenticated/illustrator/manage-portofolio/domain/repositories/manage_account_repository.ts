import Resource from "../../../../../../core/utils/resource";
import { CityModel } from "../../data/models/manage_account/city_model";
import { ProvinceModel } from "../../data/models/manage_account/province_model";
import { VerifyIllustratorAccountModel } from "../../data/models/manage_account/verif_illustrator_account_model";

export interface ManageAccountRepo {
  getProvinces(): Promise<Resource<ProvinceModel>>;
  getCities(provinceId?: number): Promise<Resource<CityModel>>;
  sendIllustratorAccountVerification(params: { token: string; nik: string; address: string; province: string; city: string; background: string; idCardPhoto: string; cardSelfiePhoto: string }): Promise<Resource<VerifyIllustratorAccountModel>>;
}
