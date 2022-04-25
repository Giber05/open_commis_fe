import { UploadedFileModel } from "../../../../../common/upload_file/data/models/uploaded_file_model";

export class SubmissionFileModel {
  message:string;
  success:boolean;
  data:UploadedFileModel

  constructor(params:{message: string, success: boolean, data: UploadedFileModel}) {
    this.message = params.message
    this.success = params.success
    this.data = params.data
  }
  public static fromJson(json:any):SubmissionFileModel{
    return new SubmissionFileModel ({
      message:json.message,
      success:json.success,
      data:UploadedFileModel.fromJson(json.data)
    })
  } 

}