import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { AddReviewModel } from "../../models/add_review_model";

export interface ReviewRemoteDS {
  addReview(params: { token: string; compostId: number; rate: number; comment: string }): Promise<AddReviewModel>;
}

export class ReviewRemoteDSImpl implements ReviewRemoteDS {
  private baseClient = new BaseClient();
  async addReview(params: { token: string; compostId: number; rate: number; comment: string }): Promise<AddReviewModel> {
    let addReviewURL = NetworkConstant.baseUrl + "commissions/" + params.compostId + "/reviews";
    const response = await this.baseClient.postWithCookie({
      url: addReviewURL,
      body: {
        rating: params.rate,
        comment: params.comment,
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return AddReviewModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
