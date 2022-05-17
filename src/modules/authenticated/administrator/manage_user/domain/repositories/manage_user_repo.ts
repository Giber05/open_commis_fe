import Resource from "../../../../../../core/utils/resource";
import { DeleteModel } from "../../../../../common/delete/models/delete_model";
import { UserListModel } from "../../data/models/user_list/user_list_model";

export interface ManageUserRepo {
  getAllUser(params: { token: string; role?: string; limit?: number; page?: number; keyword?: string }): Promise<Resource<UserListModel>>;
  deleteUser(params:{token:string,role:string,id:number}):Promise<Resource<DeleteModel>>

}
