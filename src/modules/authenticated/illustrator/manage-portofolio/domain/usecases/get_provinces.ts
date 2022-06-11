import Resource from "../../../../../../core/utils/resource";
import { ProvinceModel } from "../../data/models/manage_account/province_model";
import { ManageAccountRepoImpl } from "../../data/repositories_impl/manage_account_repo_impl";
import { ManageAccountRepo } from "../repositories/manage_account_repository";

export class GetProvinces {
  private manageAccountRepo: ManageAccountRepo = new ManageAccountRepoImpl();
  async execute(): Promise<Resource<ProvinceModel>> {
    return await this.manageAccountRepo.getProvinces();
  }
}
