import { AdministratorModel } from "../../../../common/authentication/data/model/administrator_model";
import ConsumerModel from "../../../../common/authentication/data/model/consumer_model";
import IlustratorModel from "../../../../common/authentication/data/model/ilustrator_model";

class UserModel {
  data: UserData;

  constructor(params: { data: UserData }) {
    this.data = params.data;
  }
  public static fromJson(json: string): UserModel {
    const object = JSON.parse(json);
    return new UserModel({
      data: UserData.fromJson(object.data),
    });
  }

  public toJson(): string {
    return JSON.stringify({
      data: this.data,
    });
  }

  // public toMap(): { id: string; name: string; cookie: string } {
  //   return {
  //     id: this.id,
  //     name: this.name,
  //     cookie: this.cookie ?? "",
  //   };
  // }
}
export class UserData {
  user: any;
  token?: string | null;
  role: string;
  constructor(params: { user: any; token: string; role: string }) {
    this.user = params.user;
    this.token = params.token;
    this.role = params.role;
  }

  public static fromJson(json: any): UserData {
    return new UserData({
      user: json.role === "illustrator" ? IlustratorModel.fromJson(json.user) : json.role === "consumer" ? ConsumerModel.fromJson(json.user) : AdministratorModel.fromJson(json.user),
      token: json.token == undefined ? null : json.token,
      role: json.role,
    });
  }

  public toJson(): string {
    return JSON.stringify({
      user: this.user,
      role: this.role,
      token: this.token,
    });
  }
}

export default UserModel;
