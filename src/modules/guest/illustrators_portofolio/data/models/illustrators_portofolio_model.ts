import { IllustratorsPortofolio } from "./illustrators_portofolio";

export class IllustratorsPortofolioModel {
  success: boolean;
  message: string;
  data: IllustratorsPortofolio;

  constructor(params:{success: boolean, message: string, data: IllustratorsPortofolio}) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json:any):IllustratorsPortofolioModel{
    return new IllustratorsPortofolioModel ({
     success:json.success,
     message:json.message,
     data:IllustratorsPortofolio.fromJson(json.data)
    })
  }
}
