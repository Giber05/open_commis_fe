import Resource from "../../../../../../core/utils/resource";
import { VerifyIllustratorAccountModel } from "../../data/models/manage_account/verif_illustrator_account_model";
import { ManageAccountRepoImpl } from "../../data/repositories_impl/manage_account_repo_impl";
import { ManageAccountRepo } from "../repositories/manage_account_repository";

export class SendIllustratorAccountVerification {
  private manageAccountRepo: ManageAccountRepo = new ManageAccountRepoImpl();
  async execute(params: { token: string; nik: string; address: string; province: string; city: string; background: string; idCardPhoto: string; cardSelfiePhoto: string }): Promise<Resource<VerifyIllustratorAccountModel>> {
    return await this.manageAccountRepo.sendIllustratorAccountVerification({
      token: params.token,
      nik: params.nik,
      address: params.address,
      province: params.province,
      city: params.city,
      background: params.background,
      idCardPhoto: params.idCardPhoto,
      cardSelfiePhoto: params.cardSelfiePhoto,
    });
  }
}
