import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { TagModel } from "../../../../../common/commission/data/models/tag_model";
import { ComPostDetailModel } from "../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import ManageComPostRepo from "../../domain/repositories/manage_compost_repository";
import ManageComPostRemoteDSImpl, { ManageComPostRemoteDS } from "../datasources/remote/manage_compost_remote_ds";
import IllustratorComposts from "../models/illustrators_composts";

class ManageComPostRepoImpl extends BaseRepository implements ManageComPostRepo {
  private manageCompostRemoteDS: ManageComPostRemoteDS = new ManageComPostRemoteDSImpl();

  createComPost(params: { token: string; formData:any }): Promise<Resource<ComPostDetailModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageCompostRemoteDS.createComPost({
          token: params.token,
          formData:params.formData
        });
        if (resource instanceof ComPostDetailModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  createTag(params: { token: string; tagName: string }): Promise<Resource<TagModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageCompostRemoteDS.createTag({ tagName: params.tagName, token: params.tagName });
        if (resource instanceof TagModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }

  getTags(): Promise<Resource<TagModel[]>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageCompostRemoteDS.getTags();
        if (Array.isArray(resource)) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }

  getIllustratorComPostDetail(compostId: number): Promise<Resource<ComPostDetailModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageCompostRemoteDS.getIllustratorComPostDetail(compostId);
        if (resource instanceof ComPostDetailModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  getComPostList(token: string): Promise<Resource<IllustratorComposts[]>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageCompostRemoteDS.getComPostList(token);
        if (Array.isArray(resource)) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
}
export default ManageComPostRepoImpl;
