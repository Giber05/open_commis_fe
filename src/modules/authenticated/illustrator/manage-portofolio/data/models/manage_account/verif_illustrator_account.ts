import { VerificationSubmissionEntity } from "../../../domain/entities/verification_submission_entity";

export class VerifyIllustratorAccount extends VerificationSubmissionEntity {
  illustratorId: number;

  constructor(params: {
    illustratorId: number;
    nik: string;
    address: string;
    province: string;
    city: string;
    background: string;
    accepted: boolean;
    idCardPhoto: string;
    cardSelfiePhoto: string;
    submissionDate: Date;
    verificationDate: Date;
  }) {
    super({
      nik: params.nik,
      address: params.address,
      province: params.province,
      city: params.city,
      background: params.background,
      accepted: params.accepted,
      idCardPhoto: params.idCardPhoto,
      cardSelfiePhoto: params.cardSelfiePhoto,
      submissionDate: params.submissionDate,
      verificationDate: params.verificationDate,
    });
    this.illustratorId = params.illustratorId;
  }

  public static fromJson(json:any):VerifyIllustratorAccount{
    return new VerifyIllustratorAccount ({
      nik: json.NIK,
      address: json.address,
      province: json.province,
      city: json.city,
      background: json.background,
      accepted: json.accepted,
      idCardPhoto: json.idCardPhoto,
      cardSelfiePhoto: json.cardSelfiePhoto,
      submissionDate: json.submissionDate,
      verificationDate: json.verificationDate,
      illustratorId:json.illustratorId
    })
  }
}
