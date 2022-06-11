import Resource from "../../../../../../core/utils/resource";
import { SubmittedIllustratorsModel } from "../../data/models/submitted_illustrators_model";
import { VerificationSubmissionDetailModel } from "../../data/models/verification_submission_detail_model";
import { AccountVerificationRepoImpl } from "../../data/repositories_impl/account_verification_repo_impl";
import { AccountVerificationRepo } from "../repositories/account_verification_repo";

export class GetVerificationSubmissionDetail {
  private acountVerificationRepo: AccountVerificationRepo = new AccountVerificationRepoImpl();

  async execute(params: { token: string; illustratorId: number }): Promise<Resource<VerificationSubmissionDetailModel>> {
    return await this.acountVerificationRepo.getVerificationSubmissionDetail({ token: params.token, illustratorId: params.illustratorId });
  }
}
