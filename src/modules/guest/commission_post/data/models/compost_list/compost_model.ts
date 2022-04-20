import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import CommissionPost from "./commission_post";

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
  commissionPosts: CommissionPost[];
  constructor(params: { pagination: PaginationModel; commissionPosts: CommissionPost[] }) {
    this.pagination = params.pagination;
    this.commissionPosts = params.commissionPosts;
  }

  public static fromJson(json: any): Data {
    return new Data({
      pagination: PaginationModel.fromJson(json.pagination),
      commissionPosts: json.commissionPosts.map((commission: any) => {
        return CommissionPost.fromJson(commission);
      }),
    });
  }
}
export default ComPostModel;
