import Resource from "../../../../../../core/utils/resource";
import ComPostModel from "../../../../../guest/commission_post/data/models/compost_list/compost_model";
import AdminComPostModel from "../../data/models/admin_composts_model";

export interface AdminManageComPostRepo {
  getAdminComPosts(params: { token: string; page: number; limit: number; status?: string; keyword?: string; sortBy?: string; orderBy?: string }): Promise<Resource<AdminComPostModel>>;
}
