import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import ManageComPostRepo from "../../domain/repositories/manage_compost_repository";
import ManageComPostRemoteDSImpl, { ManageComPostRemoteDS } from "../datasources/remote/manage_compost_remote_ds";
import ComPostModel from "../models/ComPostModel";

class ManageComPostRepoImpl extends BaseRepository implements ManageComPostRepo {
  private manageCompostRemoteDS: ManageComPostRemoteDS = new ManageComPostRemoteDSImpl();

  getComPostList(ilustratorId: string): Promise<Resource<ComPostModel[]>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageCompostRemoteDS.getComPostList(ilustratorId, "token");
        return Resource.success({ data: resource });
      },
    });
  }
}
export default ManageComPostRepoImpl;

