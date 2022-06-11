import { message } from "antd";
import BaseException from "../../../../../../core/error/base_exception";
import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { AccountVerificationRepo } from "../../domain/repositories/account_verification_repo";
import { AccountVerificationRemoteDS, AccountVerificationRemoteDSImpl } from "../datasources/remote/account_verification_remote_ds";
import { SubmittedIllustratorsModel } from "../models/submitted_illustrators_model";
import { VerificationSubmissionDetailModel } from "../models/verification_submission_detail_model";

export class AccountVerificationRepoImpl extends BaseRepository implements AccountVerificationRepo {
  approveVerificationSubmission(params: { token: string; illustratorId: number; accepted: boolean; }): Promise<Resource<boolean>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.accountVerifRemoteDS.approveVerificationSubmission({token:params.token, illustratorId:params.illustratorId, accepted:params.accepted});
        if (resource ) return Resource.success({ data: resource });
        return Resource.error({ exception: new BaseException({message:"Failed TO Approve"}) });
      },
    });
  }
  private accountVerifRemoteDS:AccountVerificationRemoteDS = new AccountVerificationRemoteDSImpl()

  getVerificationSubmissionDetail(params: { token: string; illustratorId: number; }): Promise<Resource<VerificationSubmissionDetailModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.accountVerifRemoteDS.getVerificationSubmissionDetail({token:params.token, illustratorId:params.illustratorId});
        if (resource instanceof VerificationSubmissionDetailModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  getVerificationSubmissions(token: string): Promise<Resource<SubmittedIllustratorsModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.accountVerifRemoteDS.getVerificationSubmissions(token);
        if (resource instanceof SubmittedIllustratorsModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  
}