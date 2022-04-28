import Resource from "../../../../../../core/utils/resource";
import { ConsumerProfileModel } from "../../data/models/consumer_profile_model";
import { ProfileRepoImpl } from "../../data/repositories_impl/profile_repo_impl";
import { ProfileRepo } from "../repositories/profile_repo";

export class GetConsumerProfile {
  private profileRepo: ProfileRepo = new ProfileRepoImpl();
  async execute(token: string): Promise<Resource<ConsumerProfileModel>> {
    return await this.profileRepo.getConsumerProfile(token);
  }
}
