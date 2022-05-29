import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { ManageAccountRepo } from "../../domain/repositories/manage_account_repository";
import { ManageAccountRemoteDS, ManageAccountRemoteDSImpl } from "../datasources/manage_account_remote_ds";
import { CityModel } from "../models/manage_account/city_model";
import { ProvinceModel } from "../models/manage_account/province_model";

export class ManageAccountRepoImpl extends BaseRepository implements ManageAccountRepo {
  private manageAccountRemoteDS:ManageAccountRemoteDS = new ManageAccountRemoteDSImpl()
  getProvinces(): Promise<Resource<ProvinceModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageAccountRemoteDS.getProvinces();
        if (resource instanceof ProvinceModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  getCities(provinceId?: number): Promise<Resource<CityModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageAccountRemoteDS.getCities(provinceId);
        if (resource instanceof CityModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  
}