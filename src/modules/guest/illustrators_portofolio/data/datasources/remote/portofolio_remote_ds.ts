import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import ComPostModel from "../../../../commission_post/data/models/compost_list/compost_model";
import { IllustratorsPortofolioModel } from "../../models/illustrators_portofolio_model";

export interface PortofolioRemoteDS {
  getIllustratorsPortofolio(illustratorId: number): Promise<IllustratorsPortofolioModel>;
}

export class PortofolioRemoteDSImpl implements PortofolioRemoteDS {
  private baseClient = new BaseClient();

  async getIllustratorsPortofolio(illustratorId: number): Promise<IllustratorsPortofolioModel> {
    let getIllustratorsPortofolio = NetworkConstant.baseUrl + "illustrator/" + illustratorId + "/portfolio";
    
    const response = await this.baseClient.getWithoutCookie({
      url: getIllustratorsPortofolio,
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      const data = IllustratorsPortofolioModel.fromJson(body);
      
      return data
    }
    throw new BaseException({ message: response.data.error });
  }
}
