import ListBody from "antd/lib/transfer/ListBody";
import axios from "axios";
import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import ComPostModel from "../../models/compost_model";

export interface ComPostRemoteDS {
  getComPostList(): Promise<ComPostModel>;
}

class ComPostRemoteDSImpl implements ComPostRemoteDS {
  private baseClient = new BaseClient();
  private getComPostListURL = NetworkConstant.baseUrl + "commissions";
  async getComPostList(): Promise<ComPostModel> {
    const response = await axios.get(this.getComPostListURL);
    
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ComPostModel.fromJson(body);
    
    }
    throw new BaseException({ message: "Failed to fetch data" });
  }
}
export default ComPostRemoteDSImpl;
