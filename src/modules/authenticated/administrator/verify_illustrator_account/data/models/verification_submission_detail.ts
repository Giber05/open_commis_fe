import IlustratorModel from "../../../../../common/authentication/data/model/ilustrator_model";
import { VerificationSubmissionEntity } from "../../../../illustrator/manage-portofolio/domain/entities/verification_submission_entity";

export class VerificationSubmissionDetail extends VerificationSubmissionEntity  {
  illustrator:IlustratorModel;

  constructor(params: {
    illustrator: IlustratorModel;
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
    this.illustrator = params.illustrator;
  }

  public static fromJson(json:any):VerificationSubmissionDetail{
    return new VerificationSubmissionDetail ({
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
      illustrator:json.illustrator
    })
  }

}