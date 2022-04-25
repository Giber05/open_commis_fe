import { IllustratorsBalance } from "./illustrators_balance";

export class IllustratorsBalanceModel {
  success: boolean;
  message:string;
  data: IllustratorsBalance;

  constructor(params:{success: boolean, message: string, data: IllustratorsBalance}) {
    this.success = params.success
    this.message = params.message
    this.data = params.data
  }

  public static fromJson(json:any):IllustratorsBalanceModel{
    return new IllustratorsBalanceModel ({
      success:json.success,
      message:json.message,
      data:IllustratorsBalance.fromJson(json.data)
    })
  } 

}