import { UploadedFileModel } from "./uploaded_file_model";

export class CommonUploadedFileModel {
  message:string;
  success:boolean;
  data:UploadedFileModel;


  constructor(params:{message: string, success: boolean, data: UploadedFileModel}) {
    this.message = params.message
    this.success = params.success
    this.data = params.data
  }

  public static fromJson(json:any):CommonUploadedFileModel{
    return new CommonUploadedFileModel ({
      message:json.message,
      success:json.success,
      data:UploadedFileModel.fromJson(json.data),
    })
  }

}