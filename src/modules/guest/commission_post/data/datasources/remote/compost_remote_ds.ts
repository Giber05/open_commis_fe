import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { CategoryModel } from "../../../../../common/commission/data/models/category_model";
import { ComPostDetailModel } from "../../models/compost_detail/compost_detail_model";
import ComPostModel from "../../models/compost_list/compost_model";

export interface ComPostRemoteDS {
  getComPostList(params: { page: number; limit: number; categoryId?: number }): Promise<ComPostModel>;
  getComPostDetail(compostId: number): Promise<ComPostDetailModel>;
  getCategories(): Promise<CategoryModel[]>;
  searchComPosts(params: { keyword: string }): Promise<ComPostModel>;
}

class ComPostRemoteDSImpl implements ComPostRemoteDS {
  private baseClient = new BaseClient();
  async searchComPosts(params: { keyword: string }): Promise<ComPostModel> {
    let searchComPostsURL = NetworkConstant.baseUrl + "commissions/search";
    const response = await this.baseClient.getWithoutCookie({
      url: searchComPostsURL,
      configs: {
        params: {
          q: params.keyword,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ComPostModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

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

  async getComPostList(params: { page: number; limit: number; categoryId?: number; keyword?: string }): Promise<ComPostModel> {
    let getComPostListURL = NetworkConstant.baseUrl + "commissions";

    const response = await this.baseClient.getWithoutCookie({
      url: getComPostListURL,
      configs: {
        params: {
          limit: params.limit,
          page: params.page,
          category: params.categoryId,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ComPostModel.fromJson(body);
    }
    throw new BaseException({ message: response.data });
  }
}
export default ComPostRemoteDSImpl;
