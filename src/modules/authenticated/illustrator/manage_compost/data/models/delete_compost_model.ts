export class DeleteComPostModel {
  data:null;
  message:string;
  success:boolean;

  constructor(params:{data: null, message: string, success: boolean}) {
    this.data = params.data
    this.message = params.message
    this.success = params.success
  }

  public static fromJson(json:any):DeleteComPostModel{
    return new DeleteComPostModel ({
      data:json.data,
      message:json.message,
      success:json.success
    })
  } 

}