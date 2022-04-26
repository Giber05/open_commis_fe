import { ReviewList } from "./review_list";

export class ReviewListModel {
  success: boolean;
  message: string;
  data: ReviewList[];

  constructor(params: { success: boolean; message: string; data: ReviewList[] }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }
  public static fromJson(json: any): ReviewListModel {
    return new ReviewListModel({
      success: json.success,
      message: json.message,
      data: json.data.map((review: ReviewList) => ReviewList.fromJson(review)),
    });
  }
}
