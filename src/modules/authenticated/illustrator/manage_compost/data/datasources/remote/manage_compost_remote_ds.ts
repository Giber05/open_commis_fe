import axios from "axios";
import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { TagModel } from "../../../../../../common/commission/data/models/tag_model";
import { ComPostDetailModel } from "../../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import IllustratorComposts from "../../models/illustrators_composts";
import ComPostModel from "../../models/illustrators_composts";

export interface ManageComPostRemoteDS {
  getTags(): Promise<TagModel[]>;
  getComPostList( token: string): Promise<IllustratorComposts[]>;
  getIllustratorComPostDetail(compostId: number): Promise<ComPostDetailModel>;
}

class ManageComPostRemoteDSImpl implements ManageComPostRemoteDS {
  private baseClient = new BaseClient();
 async getTags(): Promise<TagModel[]> {
    let getTagsURL = NetworkConstant.baseUrl + "tags";

    const response = await this.baseClient.getWithoutCookie({ url: getTagsURL });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data.data;
      return body.map((tag: any) => {
        return TagModel.fromJson(tag);
      });
    }
    throw new BaseException({ message: response.data.error });
  }
  async getComPostList( token: string): Promise<IllustratorComposts[]> {
    let getComPostListURL = NetworkConstant.baseUrl+ "illustrator/commissions";
    const response = await this.baseClient.getWithCookie({
      url:getComPostListURL,
      configs:{
        headers:{
          Authorization:"Bearer "+token
        }
      }
    });
    if (response.status >= 200 && response.status <= 210) {

      const body = response.data.data;
      return body.map((e: any) => {
        return IllustratorComposts.fromJson(e);
      });
    }
    throw new BaseException({ message: response.data.error });
  }

  async getIllustratorComPostDetail(compostId: number): Promise<ComPostDetailModel> {
    let getComPostDetailURL = NetworkConstant.baseUrl + "commissions/" + compostId;
    const response = await this.baseClient.getWithoutCookie({ url: getComPostDetailURL });
    
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ComPostDetailModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
export default ManageComPostRemoteDSImpl;

