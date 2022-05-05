import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import CommissionPosts from "./commission_posts";

class ComPostModel {
  success: boolean;
  message: string;
  data: Data;

  constructor(params: { success: boolean; message: string; data: Data }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }
  public static fromJson(json: any): ComPostModel {
    return new ComPostModel({
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
      commissionPosts: json.commissionPosts.map((commission: any) => {
        return CommissionPosts.fromJson(commission);
      }),
    });
  }
}
export default ComPostModel;
