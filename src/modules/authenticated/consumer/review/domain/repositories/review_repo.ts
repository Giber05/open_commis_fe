import Resource from "../../../../../../core/utils/resource";
import { AddReviewModel } from "../../data/models/add_review_model";

export interface ReviewRepo {
  addReview(params: { token: string; compostId: number; rate: number; comment: string }): Promise<Resource<AddReviewModel>>;
}
