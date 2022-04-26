import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import { ReviewRepo } from "../../domain/repositories/review_repo";
import { ReviewRemoteDS, ReviewRemoteDSImpl } from "../datasources/remote/review_remote_ds";
import { ReviewListModel } from "../models/review_list_model";

export class ReviewRepoImpl extends BaseRepository implements ReviewRepo {
  private reviewRemoteDS: ReviewRemoteDS = new ReviewRemoteDSImpl();

  getReviewsByComPostId(compostId: number): Promise<Resource<ReviewListModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.reviewRemoteDS.getReviewsByComPostId(compostId);
        if (resource instanceof ReviewListModel) return Resource.success({ data: resource });

        return Resource.error({ exception: resource });
      },
    });
  }
  
}