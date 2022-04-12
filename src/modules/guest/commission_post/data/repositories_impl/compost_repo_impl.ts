import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import ComPostRepo from "../../domain/repositories/compost_repo";
import ComPostRemoteDSImpl, { ComPostRemoteDS } from "../datasources/remote/compost_remote_ds";
import ComPostModel from "../models/compost_model";

class ComPostRepoImpl extends BaseRepository implements ComPostRepo {
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
export default  ComPostRepoImpl;

