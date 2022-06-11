export class VerificationSubmissionEntity {
  nik: string;
  address: string;
  province: string;
  city: string;
  background: string;
  accepted: boolean | null;
  idCardPhoto: string;
  cardSelfiePhoto: string;
  submissionDate: Date;
  verificationDate: Date | null;

  constructor(params: { nik: string; address: string; province: string; city: string; background: string; accepted: boolean | null; idCardPhoto: string; cardSelfiePhoto: string; submissionDate: Date; verificationDate: Date | null}) {
    this.nik = params.nik;
    this.address = params.address;
    this.province = params.province;
    this.city = params.city;
    this.background = params.background;
    this.accepted = params.accepted;
    this.idCardPhoto = params.idCardPhoto;
    this.cardSelfiePhoto = params.cardSelfiePhoto;
    this.submissionDate = params.submissionDate;
    this.verificationDate = params.verificationDate;
  }
}
