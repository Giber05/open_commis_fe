import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { UserList } from "./user_list";

export class UserListModel {
  message: string;
  success: boolean;
  data: Users;

  constructor(params: { message: string; success: boolean; data: Users }) {
    this.message = params.message;
    this.success = params.success;
    this.data = params.data;
  }

  public static fromJson(json: any): UserListModel {
    return new UserListModel({
      message: json.message,
      success: json.success,
      data: Users.fromJson(json.data),
    });
  }
}

class Users {
  pagination: PaginationModel;
  users: UserList[];

  constructor(params: { pagination: PaginationModel; users: UserList[] }) {
    this.pagination = params.pagination;
    this.users = params.users;
  }

  public static fromJson(json: any): Users {
    return new Users({
      pagination: PaginationModel.fromJson(json.pagination),
      users: json.users.map((user: UserList) => UserList.fromJson(user)),
    });
  }
}
