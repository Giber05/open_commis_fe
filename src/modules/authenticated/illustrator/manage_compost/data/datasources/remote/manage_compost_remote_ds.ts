import axios from "axios";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import ComPostModel from "../../models/ComPostModel";

export interface ManageComPostRemoteDS {
  getComPostList(ilustratorId: string, token: string): Promise<ComPostModel[]>;
}

class ManageComPostRemoteDSImpl implements ManageComPostRemoteDS {
  private baseClient = new BaseClient();
  private getComPostListURL = "";
  async getComPostList(ilustratorId: string, token: string): Promise<ComPostModel[]> {
    const response = await axios.get("/assets/dummy_data/json/ilustrator's_composts.json");
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return body.map((e: any) => {
        return ComPostModel.fromJson(e);
      });
    }
    throw new BaseException({ message: "Failed to fetch data" });
  }
}
export default ManageComPostRemoteDSImpl;

