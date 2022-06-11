import Resource from "../../../../../../core/utils/resource";
import { CityModel } from "../../data/models/manage_account/city_model";
import { ManageAccountRepoImpl } from "../../data/repositories_impl/manage_account_repo_impl";
import { ManageAccountRepo } from "../repositories/manage_account_repository";

export class GetCities {
  private manageAccountRepo: ManageAccountRepo = new ManageAccountRepoImpl();
  async execute(provinceId?: number): Promise<Resource<CityModel>> {
    return await this.manageAccountRepo.getCities(provinceId);
  }
}
