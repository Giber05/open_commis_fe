import Resource from "../../../../../../core/utils/resource";
import { ConsumerProfileModel } from "../../data/models/consumer_profile_model";

export interface ProfileRepo {
  getConsumerProfile(token: string): Promise<Resource<ConsumerProfileModel>>;
}
