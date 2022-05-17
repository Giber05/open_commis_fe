export class DeleteModel {
  data:null;
  message:string;
  success:boolean;

  constructor(params:{data: null, message: string, success: boolean}) {
    this.data = params.data
    this.message = params.message
    this.success = params.success
  }

  public static fromJson(json:any):DeleteModel{
    return new DeleteModel ({
      data:json.data,
      message:json.message,
      success:json.success
    })
  } 

}