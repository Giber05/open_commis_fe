import Resource from "../../../../../../core/utils/resource";
import { AddArtworkModel } from "../../data/models/manage_portfolio/add_artwork_model";
import { DeleteArtworkModel } from "../../data/models/manage_portfolio/delete_artwork_model";
import { ManagePortofolioModel } from "../../data/models/manage_portfolio/manage_portofolio_model";

export interface ManagePortofolioRepo {
  getProfile(token:string):Promise<Resource<ManagePortofolioModel>>;
  changeAvailabilityStatus(params: { token: string; status: boolean }): Promise<Resource<ManagePortofolioModel>>;
  editProfile(params: { token: string; formData: any; }): Promise<Resource<ManagePortofolioModel>>;
  addArtwork(params: { token: string; formData: any; }): Promise<Resource<AddArtworkModel>>;
  deleteArtwork(params:{token:string, artworkId:number}): Promise<Resource<DeleteArtworkModel>>;

}
