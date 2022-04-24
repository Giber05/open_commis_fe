export class DeleteArtworkModel {
  data:null;
  message:string;
  success:boolean;

  constructor(params:{data: null, message: string, success: boolean}) {
    this.data = params.data
    this.message = params.message
    this.success = params.success
  }

  public static fromJson(json:any):DeleteArtworkModel{
    return new DeleteArtworkModel ({
      data:json.data,
      message:json.message,
      success:json.success
    })
  } 

}