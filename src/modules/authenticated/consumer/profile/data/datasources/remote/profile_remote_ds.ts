import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { ConsumerProfileModel } from "../../models/consumer_profile_model";

export interface ProfileRemoteDS {
  getConsumerProfile(token: string): Promise<ConsumerProfileModel>;
}

export class ProfileRemoteDSImpl implements ProfileRemoteDS {
  private baseClient = new BaseClient();

  async getConsumerProfile(token: string): Promise<ConsumerProfileModel> {
    let getConsumerProfileURL = NetworkConstant.baseUrl + "users/profile";
    const response = await this.baseClient.getWithCookie({
      url: getConsumerProfileURL,
      configs: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ConsumerProfileModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
