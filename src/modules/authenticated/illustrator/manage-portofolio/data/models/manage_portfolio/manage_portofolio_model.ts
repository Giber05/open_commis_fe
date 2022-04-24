import { ManagePortofolio } from "./portofolio";

export class ManagePortofolioModel {
  success: boolean;
  message: string;
  data: ManagePortofolio;

  constructor(params:{success: boolean, message: string, data: ManagePortofolio}) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json:any):ManagePortofolioModel{
    return new ManagePortofolioModel ({
     success:json.success,
     message:json.message,
     data:ManagePortofolio.fromJson(json.data)
    })
  }
}
