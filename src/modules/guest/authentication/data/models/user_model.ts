import ConsumerModel from "../../../../common/authentication/data/model/consumer_model";
import IlustratorModel from "../../../../common/authentication/data/model/ilustrator_model";

class UserModel {
  data: Data;

  constructor(params: { data: Data }) {
    this.data = params.data;
  }
  public static fromJson(json: string): UserModel {
    const object = JSON.parse(json);
    return new UserModel({
      data: Data.fromJson(object.data),
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
class Data {
  user: any;
  token: string;
  role: string;
  constructor(params: { user: any; token: string; role:string }) {
    this.user = params.user;
    this.token = params.token;
    this.role = params.role
  }

  public static fromJson(json: any): Data {
    return new Data({
      user: json.role === "illustrator"? IlustratorModel.fromJson(json.user):ConsumerModel,
      token: json.token,
      role:json.role,
    });
  }
}

export default UserModel;
