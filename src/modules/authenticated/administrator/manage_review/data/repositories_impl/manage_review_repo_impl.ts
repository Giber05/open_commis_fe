import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { DeleteModel } from "../../../../../common/delete/models/delete_model";
import { ManageReviewRepo } from "../../domain/repositories/manage_review_repo";
import { ManageReviewRemoteDS, ManageReviewRemoteDSImpl } from "../datasources/remote/manage_review_remote_ds";

export class ManageReviewRepoImpl extends BaseRepository implements ManageReviewRepo {
  private manageReviewRemoteDS:ManageReviewRemoteDS = new  ManageReviewRemoteDSImpl()
 
  deleteReview(params: { token: string; id: number; }): Promise<Resource<DeleteModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageReviewRemoteDS.deleteReview({
          token:params.token,
          id:params.id,

        });
        if (resource instanceof DeleteModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource});
      },
    });
  }

}
