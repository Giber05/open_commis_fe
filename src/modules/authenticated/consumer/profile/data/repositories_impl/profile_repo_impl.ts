import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { ProfileRepo } from "../../domain/repositories/profile_repo";
import { ProfileRemoteDS, ProfileRemoteDSImpl } from "../datasources/remote/profile_remote_ds";
import { ConsumerProfileModel } from "../models/consumer_profile_model";

export class ProfileRepoImpl extends BaseRepository implements ProfileRepo {
  private profileRemoteDS: ProfileRemoteDS = new ProfileRemoteDSImpl()
  getConsumerProfile(token: string): Promise<Resource<ConsumerProfileModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.profileRemoteDS.getConsumerProfile(token);
        if (resource instanceof ConsumerProfileModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  
}