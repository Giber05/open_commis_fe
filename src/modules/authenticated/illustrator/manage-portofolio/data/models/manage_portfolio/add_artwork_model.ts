import { ArtworkModel } from "../../../../../../guest/illustrators_portofolio/data/models/artwork_model";

export class AddArtworkModel  {
  success: boolean;
  message: string;
  data: ArtworkModel;

  constructor(params:{success: boolean, message: string, data: ArtworkModel}) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json:any):AddArtworkModel {
    return new AddArtworkModel  ({
     success:json.success,
     message:json.message,
     data:ArtworkModel.fromJson(json.data)
    })
  }
}
