import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import CommissionPosts from "../../../../../guest/commission_post/data/models/compost_list/commission_posts";

class AdminComPostModel {
  success: boolean;
  message: string;
  data: Data;

  constructor(params: { success: boolean; message: string; data: Data }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }
  public static fromJson(json: any): AdminComPostModel {
    return new AdminComPostModel({
      success: json.success,
      message: json.message,
      data: Data.fromJson(json.data),
    });
  }
}

class Data {
  pagination: PaginationModel;
  commissionPosts: CommissionPosts[];
  constructor(params: { pagination: PaginationModel; commissionPosts: CommissionPosts[] }) {
    this.pagination = params.pagination;
    this.commissionPosts = params.commissionPosts;
  }

  public static fromJson(json: any): Data {
    return new Data({
      pagination: PaginationModel.fromJson(json.pagination),
      commissionPosts: json.commissions.map((commission: any) => {
        return CommissionPosts.fromJson(commission);
      }),
    });
  }
}
export default AdminComPostModel;
