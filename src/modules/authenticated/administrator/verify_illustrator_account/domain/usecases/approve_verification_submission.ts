import Resource from "../../../../../../core/utils/resource";
import { SubmittedIllustratorsModel } from "../../data/models/submitted_illustrators_model";
import { VerificationSubmissionDetailModel } from "../../data/models/verification_submission_detail_model";
import { AccountVerificationRepoImpl } from "../../data/repositories_impl/account_verification_repo_impl";
import { AccountVerificationRepo } from "../repositories/account_verification_repo";

export class ApproveVerificationSubmission {
  private acountVerificationRepo: AccountVerificationRepo = new AccountVerificationRepoImpl();

  async execute(params: { token: string; illustratorId: number; accepted: boolean }): Promise<Resource<boolean>> {
    return await this.acountVerificationRepo.approveVerificationSubmission({ token: params.token, illustratorId: params.illustratorId, accepted: params.accepted });
  }
}
