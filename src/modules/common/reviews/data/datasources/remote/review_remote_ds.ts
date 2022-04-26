import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { ReviewListModel } from "../../models/review_list_model";

export interface ReviewRemoteDS {
  getReviewsByComPostId(compostId: number): Promise<ReviewListModel>;
}

export class ReviewRemoteDSImpl implements ReviewRemoteDS {
  private baseClient = new BaseClient();
  async getReviewsByComPostId(compostId: number): Promise<ReviewListModel> {
    let getReviewsURL = NetworkConstant.baseUrl + "commissions/" + compostId + "/reviews";
    const response = await this.baseClient.getWithoutCookie({
      url: getReviewsURL,
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ReviewListModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
