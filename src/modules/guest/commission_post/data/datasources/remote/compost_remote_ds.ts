import ListBody from "antd/lib/transfer/ListBody";
import axios from "axios";
import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { CategoryModel } from "../../models/category/category_model";
import { ComPostDetailModel } from "../../models/compost_detail/compost_detail_model";
import ComPostModel from "../../models/compost_list/compost_model";

export interface ComPostRemoteDS {
  getComPostList(): Promise<ComPostModel>;
  getComPostDetail(compostId: number): Promise<ComPostDetailModel>;
  getCategories(): Promise<CategoryModel[]>;
}

class ComPostRemoteDSImpl implements ComPostRemoteDS {
  private baseClient = new BaseClient();
  async getCategories(): Promise<CategoryModel[]> {
    let getCategoriesURL = NetworkConstant.baseUrl + "categories";

    const response = await this.baseClient.getWithoutCookie({ url: getCategoriesURL });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data.data;
      return body.map((category: any) => {
        return CategoryModel.fromJson(category);
      });
    }
    throw new BaseException({ message: response.data.error });
  }

  async getComPostDetail(compostId: number): Promise<ComPostDetailModel> {
    let getComPostDetailURL = NetworkConstant.baseUrl + "commissions/" + compostId;
    const response = await this.baseClient.getWithoutCookie({ url: getComPostDetailURL });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ComPostDetailModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async getComPostList(): Promise<ComPostModel> {
    this.getComPostDetail(12);
    let getComPostListURL = NetworkConstant.baseUrl + "commissions";
    const response = await this.baseClient.getWithoutCookie({ url: getComPostListURL });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ComPostModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
export default ComPostRemoteDSImpl;
