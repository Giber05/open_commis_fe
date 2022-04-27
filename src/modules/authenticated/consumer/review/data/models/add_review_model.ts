import { AddReview } from "./add_review";

export class AddReviewModel {
  success: boolean;
  message: string;
  data: AddReview;

  constructor(params: { success: boolean; message: string; data: AddReview }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json: any): AddReviewModel {
    return new AddReviewModel({
      success: json.success,
      message: json.message,
      data: AddReview.fromJson(json.data),
    });
  }
}
