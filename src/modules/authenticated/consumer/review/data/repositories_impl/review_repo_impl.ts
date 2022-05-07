import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { ReviewRepo } from "../../domain/repositories/review_repo";
import { ReviewRemoteDS, ReviewRemoteDSImpl } from "../datasources/remote/review_remote_ds";
import { AddReviewModel } from "../models/add_review_model";

export class ReviewRepoImpl extends BaseRepository implements ReviewRepo {
  private reviewRemoteDS: ReviewRemoteDS = new ReviewRemoteDSImpl();

  addReview(params: { token: string; orderId: number; rate: number; comment: string }): Promise<Resource<AddReviewModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.reviewRemoteDS.addReview({ token: params.token, comment: params.comment, orderId: params.orderId, rate: params.rate });
        if (resource instanceof AddReviewModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
}
