import Resource from "../../../../../../core/utils/resource";
import { AddReviewModel } from "../../data/models/add_review_model";
import { ReviewRepoImpl } from "../../data/repositories_impl/review_repo_impl";
import { ReviewRepo } from "../repositories/review_repo";

export class AddReview {
  private reviewRepo: ReviewRepo = new ReviewRepoImpl();

  async execute(params: { token: string; compostId: number; rate: number; comment: string }): Promise<Resource<AddReviewModel>> {
    return this.reviewRepo.addReview({ token: params.token, compostId: params.compostId, comment: params.comment, rate: params.rate });
  }
}
