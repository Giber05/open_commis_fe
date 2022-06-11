import { VerificationSubmissionDetail } from "./verification_submission_detail";

export class VerificationSubmissionDetailModel {
  success: boolean;
  message: string;
  data: VerificationSubmissionDetail;

  constructor(params: { success: boolean; message: string; data: VerificationSubmissionDetail }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }
  public static fromJson(json: any): VerificationSubmissionDetailModel {
    return new VerificationSubmissionDetailModel({
      success: json.success,
      message: json.message,
      data: VerificationSubmissionDetail.fromJson(json.data),
    });
  }
}
