export class OrderDetailEntity {
  requestDetail: string;
  referenceImage: string | null;

  constructor(params: { requestDetail: string; referenceImage: string }) {
    this.requestDetail = params.requestDetail;
    this.referenceImage = params.referenceImage;
  }
}
