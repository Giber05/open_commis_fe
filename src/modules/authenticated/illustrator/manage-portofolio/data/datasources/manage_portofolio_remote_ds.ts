import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { PortofolioModel } from "../../../../../guest/illustrators_portofolio/data/models/portofolio_model";
import { AddArtworkModel } from "../models/manage_portfolio/add_artwork_model";
import { DeleteArtworkModel } from "../models/manage_portfolio/delete_artwork_model";
import { ManagePortofolioModel } from "../models/manage_portfolio/manage_portofolio_model";

export interface ManagePortofolioRemoteDS {
  getProfile(token: string): Promise<ManagePortofolioModel>;
  changeAvailabilityStatus(params: { token: string; status: boolean }): Promise<ManagePortofolioModel>;
  editProfile(params: { token: string; formData: any }): Promise<ManagePortofolioModel>;
  addArtwork(params: { token: string; formData: any }): Promise<AddArtworkModel>;
  deleteArtwork(params: { artworkId: number; token: string }): Promise<DeleteArtworkModel>;
}

export class ManagePortofolioRemoteDSImpl implements ManagePortofolioRemoteDS {
  private baseClient = new BaseClient();

  async deleteArtwork(params: { artworkId: number; token: string }): Promise<DeleteArtworkModel> {
    let deleteArtworkURL =NetworkConstant.baseUrl + "illustrator/artworks/" + params.artworkId;
    const response = await this.baseClient.deleteWithCookie({
      url: deleteArtworkURL,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {

      return DeleteArtworkModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data.error });
  }

  async addArtwork(params: { token: string; formData: any }): Promise<AddArtworkModel> {
    let addArtworkURL = NetworkConstant.baseUrl + "illustrator/artworks";
    const response = await this.baseClient.postWithCookie({
      url: addArtworkURL,
      body: params.formData,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
          "content-type": "multipart/form-data",
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      return AddArtworkModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data.error });
  }

  async editProfile(params: { token: string; formData: any }): Promise<ManagePortofolioModel> {
    let editProfileURL = NetworkConstant.baseUrl + "illustrator/portfolio";
    const response = await this.baseClient.postWithCookie({
      url: editProfileURL,
      body: params.formData,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
          "content-type": "multipart/form-data",
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      return ManagePortofolioModel.fromJson(response.data);
    }
    throw new BaseException({ message: response.data.error });
  }

  async changeAvailabilityStatus(params: { token: string; status: boolean }): Promise<ManagePortofolioModel> {
    let changeAvailabilityStatusURL = NetworkConstant.baseUrl + "illustrator/portfolio";

    const response = await this.baseClient.postWithCookie({
      url: changeAvailabilityStatusURL,
      body: {
        available: params.status,
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ManagePortofolioModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
  async getProfile(token: string): Promise<ManagePortofolioModel> {
    let getProfileURL = NetworkConstant.baseUrl + "illustrator/portfolio";

    const response = await this.baseClient.getWithCookie({
      url: getProfileURL,
      configs: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ManagePortofolioModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
