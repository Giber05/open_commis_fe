import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import ComPostRepo from "../../domain/repositories/compost_repo";
import ComPostRemoteDSImpl, { ComPostRemoteDS } from "../datasources/remote/compost_remote_ds";
import { CategoryModel } from "../models/category/category_model";
import { ComPostDetailModel } from "../models/compost_detail/compost_detail_model";
import ComPostModel from "../models/compost_list/compost_model";

class ComPostRepoImpl extends BaseRepository implements ComPostRepo {
  getCategories(): Promise<Resource<CategoryModel[]>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.comPostRemoteDS.getCategories();
        return Resource.success({ data: resource });
      },
    });
  }
  getComPostDetail(compostId: number): Promise<Resource<ComPostDetailModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.comPostRemoteDS.getComPostDetail(compostId);
        if (resource instanceof ComPostDetailModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  private comPostRemoteDS: ComPostRemoteDS = new ComPostRemoteDSImpl();
  getComPostList(): Promise<Resource<ComPostModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.comPostRemoteDS.getComPostList();

        return Resource.success({ data: resource });
      },
    });
  }
}
export default ComPostRepoImpl;
