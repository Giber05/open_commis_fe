import Resource from "../../../../../../core/utils/resource";
import { SubmittedIllustratorsModel } from "../../data/models/submitted_illustrators_model";
import { VerificationSubmissionDetailModel } from "../../data/models/verification_submission_detail_model";

export interface AccountVerificationRepo {
  getVerificationSubmissions(token: string): Promise<Resource<SubmittedIllustratorsModel>>;
  getVerificationSubmissionDetail(params: { token: string; illustratorId: number }): Promise<Resource<VerificationSubmissionDetailModel>>;
  approveVerificationSubmission(params: { token: string; illustratorId: number;accepted:boolean }): Promise<Resource<boolean>>;

}
