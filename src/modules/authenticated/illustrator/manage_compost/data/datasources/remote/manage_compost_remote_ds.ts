import axios from "axios";
import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { TagModel } from "../../../../../../common/commission/data/models/tag_model";
import { ComPostDetailModel } from "../../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import { DeleteComPostModel } from "../../models/delete_compost_model";
import IllustratorComposts from "../../models/illustrators_composts";
import ComPostModel from "../../models/illustrators_composts";

export interface ManageComPostRemoteDS {
  getTags(): Promise<TagModel[]>;
  deleteComPost(params:{compostId:number, token:string}):Promise<DeleteComPostModel>;
  createTag(params: { token: string; tagName: string }): Promise<TagModel>;
  createComPost(params: { token: string; formData: any;}): Promise<ComPostDetailModel>;
  editComPost(params: { token: string; formData: any;compostId: number  }): Promise<ComPostDetailModel>;
  changeComPostStatus(params: { token: string; status: string; compostId: number }): Promise<ComPostDetailModel>;
  getComPostList(token: string): Promise<IllustratorComposts[]>;
  getIllustratorComPostDetail(compostId: number): Promise<ComPostDetailModel>;
}

class ManageComPostRemoteDSImpl implements ManageComPostRemoteDS {
  private baseClient = new BaseClient();
  
  async deleteComPost(params:{compostId:number, token:string}): Promise<DeleteComPostModel> {
    let deleteComPostURL =NetworkConstant.baseUrl + "commissions/" + params.compostId;
    const response = await this.baseClient.deleteWithCookie({
      url: deleteComPostURL,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data.data;

      return DeleteComPostModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data.error });
  }

  async editComPost(params: { token: string; formData: any;compostId: number }): Promise<ComPostDetailModel> {
    let editComPostURL =NetworkConstant.baseUrl + "commissions/" + params.compostId;
    const response = await this.baseClient.putWithCookie({
      url: editComPostURL,
      body: params.formData,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
          "content-type": "multipart/form-data",
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data.data;

      return ComPostDetailModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data.error });
  }

  async changeComPostStatus(params: { token: string; status: string; compostId: number }): Promise<ComPostDetailModel> {
    let changeComPostStatusURL = NetworkConstant.baseUrl + "commissions/" + params.compostId;
    const response = await this.baseClient.putWithCookie({
      url: changeComPostStatusURL,
      body: {
        status: params.status,
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      
      return ComPostDetailModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data.error });
  }

  async createComPost(params: { token: string; formData: any }): Promise<ComPostDetailModel> {
    let createComPostURL = NetworkConstant.baseUrl + "commissions";

    const response = await this.baseClient.postWithCookie({
      url: createComPostURL,
      body: params.formData,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
          "content-type": "multipart/form-data",
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data.data;

      return ComPostDetailModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data.error });
  }

  async createTag(params: { token: string; tagName: string }): Promise<TagModel> {
    let createTagURL = NetworkConstant.baseUrl + "tags";
    const response = await this.baseClient.postWithCookie({
      url: createTagURL,
      body: {
        name: params.tagName,
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data.data;
      return TagModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
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
  async getComPostList(token: string): Promise<IllustratorComposts[]> {
    let getComPostListURL = NetworkConstant.baseUrl + "illustrator/commissions";
    const response = await this.baseClient.getWithCookie({
      url: getComPostListURL,
      configs: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data.data;
      console.log({body});
      
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
