import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { PortofolioModel } from "../../../../../guest/illustrators_portofolio/data/models/portofolio_model";
import { ManagePortofolioModel } from "../models/portofolio_model";

export interface ManagePortofolioRemoteDS {
  getProfile(token: string): Promise<ManagePortofolioModel>;
}

export class ManagePortofolioRemoteDSImpl implements ManagePortofolioRemoteDS {
  private baseClient = new BaseClient();
  async getProfile(token: string): Promise<ManagePortofolioModel> {
    let getProfileURL = NetworkConstant.baseUrl + "illustrator/portfolio";

    const response = await this.baseClient.getWithCookie({
      url: getProfileURL,
      configs:{
        headers:{
          Authorization: "Bearer "+token
        }
      }
    });
    
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ManagePortofolioModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
