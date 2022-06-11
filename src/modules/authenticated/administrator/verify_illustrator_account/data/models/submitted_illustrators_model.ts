import IlustratorModel from "../../../../../common/authentication/data/model/ilustrator_model";

export class SubmittedIllustratorsModel {
  success: boolean;
  message: string;
  data: IlustratorModel[];

  constructor(params: { success: boolean; message: string; data: IlustratorModel[] }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }
  public static fromJson(json: any): SubmittedIllustratorsModel {
    return new SubmittedIllustratorsModel({
      success: json.success,
      message: json.message,
      data: json.data.map((illustrator: IlustratorModel) => IlustratorModel.fromJson(illustrator)),
    });
  }
}
