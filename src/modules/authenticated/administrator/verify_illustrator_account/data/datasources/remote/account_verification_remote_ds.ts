import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { SubmittedIllustratorsModel } from "../../models/submitted_illustrators_model";
import { VerificationSubmissionDetailModel } from "../../models/verification_submission_detail_model";

export interface AccountVerificationRemoteDS {
  getVerificationSubmissions(token: string): Promise<SubmittedIllustratorsModel>;
  getVerificationSubmissionDetail(params: { token: string; illustratorId: number }): Promise<VerificationSubmissionDetailModel>;
  approveVerificationSubmission(params: { token: string; illustratorId: number; accepted: boolean }): Promise<boolean>;
}

export class AccountVerificationRemoteDSImpl implements AccountVerificationRemoteDS {
  private baseClient = new BaseClient();

  async approveVerificationSubmission(params: { token: string; illustratorId: number; accepted: boolean }): Promise<boolean> {
    let approveVerificationSubmissionURL = NetworkConstant.baseUrl + "verifications/approve";
    const response = await this.baseClient.postWithCookie({
      url: approveVerificationSubmissionURL,
      body: {
        accepted: params.accepted,
        illustrator_id: params.illustratorId,
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });
    console.log(response.data);

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return body.success;
    }
    throw new BaseException({ message: response.data.error });
  }

  async getVerificationSubmissionDetail(params: { token: string; illustratorId: number }): Promise<VerificationSubmissionDetailModel> {
    let getAccVerifReqDetailURL = NetworkConstant.baseUrl + "illustrator/" + params.illustratorId + "/verification-submission";
    const response = await this.baseClient.getWithCookie({
      url: getAccVerifReqDetailURL,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return VerificationSubmissionDetailModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async getVerificationSubmissions(token: string): Promise<SubmittedIllustratorsModel> {
    let getAccVerifReqURL = NetworkConstant.baseUrl + "verifications";
    const response = await this.baseClient.getWithCookie({
      url: getAccVerifReqURL,
      configs: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return SubmittedIllustratorsModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
