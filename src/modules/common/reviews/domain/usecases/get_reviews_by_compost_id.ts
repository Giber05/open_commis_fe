import Resource from "../../../../../core/utils/resource";
import { ReviewListModel } from "../../data/models/review_list_model";
import { ReviewRepoImpl } from "../../data/repositories_impl/review_repo_impl";
import { ReviewRepo } from "../repositories/review_repo";

export class getReviewsByComPostId {
  private reviewRepo: ReviewRepo = new ReviewRepoImpl();
  async execute(compostId:number): Promise<Resource<ReviewListModel>> {
    return this.reviewRepo.getReviewsByComPostId(compostId);
  }
}