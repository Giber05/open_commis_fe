import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { ManagePortofolioRepo } from "../../domain/repositories/manage_portofolio_repository";
import { ManagePortofolioRemoteDS, ManagePortofolioRemoteDSImpl } from "../datasources/manage_portofolio_remote_ds";
import { AddArtworkModel } from "../models/manage_portfolio/add_artwork_model";
import { DeleteArtworkModel } from "../models/manage_portfolio/delete_artwork_model";
import { ManagePortofolioModel } from "../models/manage_portfolio/manage_portofolio_model";

export class ManagePortofolioRepoImpl extends BaseRepository implements ManagePortofolioRepo {
  private managePortofolioRemoteDS: ManagePortofolioRemoteDS = new ManagePortofolioRemoteDSImpl();
  
  deleteArtwork(params: { token: string; artworkId: number; }): Promise<Resource<DeleteArtworkModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.managePortofolioRemoteDS.deleteArtwork({
          token: params.token,
          artworkId:params.artworkId
        });
        if (resource instanceof DeleteArtworkModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }

  addArtwork(params: { token: string; formData: any; }): Promise<Resource<AddArtworkModel>> {
   return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.managePortofolioRemoteDS.addArtwork({formData:params.formData, token:params.token});
        if (resource instanceof AddArtworkModel) return Resource.success({ data: resource });
        return Resource.error(resource);
      },
    });
  }
  
  editProfile(params: { token: string; formData: any; }): Promise<Resource<ManagePortofolioModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.managePortofolioRemoteDS.editProfile({formData:params.formData, token:params.token});
        if (resource instanceof ManagePortofolioModel) return Resource.success({ data: resource });
        return Resource.error(resource);
      },
    });
  }
  
  changeAvailabilityStatus(params: { token: string; status: boolean; }): Promise<Resource<ManagePortofolioModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.managePortofolioRemoteDS.changeAvailabilityStatus({status:params.status, token:params.token});
        if (resource instanceof ManagePortofolioModel) return Resource.success({ data: resource });
        return Resource.error(resource);
      },
    });
  }
  
  getProfile(token: string): Promise<Resource<ManagePortofolioModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.managePortofolioRemoteDS.getProfile(token);
        if (resource instanceof ManagePortofolioModel) return Resource.success({ data: resource });
        return Resource.error(resource);
      },
    });
  }
}
