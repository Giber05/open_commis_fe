import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { DeleteModel } from "../../../../../../common/delete/models/delete_model";

export interface ManageReviewRemoteDS {
  deleteReview(params:{token:string,id:number}):Promise<DeleteModel>;
}

export class ManageReviewRemoteDSImpl implements ManageReviewRemoteDS {
  private baseClient = new BaseClient();

  async deleteReview(params: { token: string; id: number; }): Promise<DeleteModel> {
    let deleteReviewURL = NetworkConstant.baseUrl + "reviews/"+params.id;

    const response = await this.baseClient.deleteWithCookie({
      url: deleteReviewURL,
      configs: {
        headers:{
          Authorization: "Bearer "+params.token
        }
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return DeleteModel.fromJson(body);
    }
    throw new BaseException({ message: response.data });
    
  }
  
}
