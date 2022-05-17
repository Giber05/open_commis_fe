import Resource from "../../../../../../core/utils/resource";
import { DeleteModel } from "../../../../../common/delete/models/delete_model";
import { ManageReviewRepoImpl } from "../../data/repositories_impl/manage_review_repo_impl";
import { ManageReviewRepo } from "../repositories/manage_review_repo";

export class DeleteReview {
  private manageReviewRepo: ManageReviewRepo = new ManageReviewRepoImpl();
  async execute(params: { token: string; id: number }): Promise<Resource<DeleteModel>> {
    return await this.manageReviewRepo.deleteReview({
      token: params.token,
      id:params.id,
    });
  }
}
