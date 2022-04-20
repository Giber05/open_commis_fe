import Resource from "../../../../../../core/utils/resource";
import { ManagePortofolioModel } from "../../data/models/portofolio_model";

export interface ManagePortofolioRepo {
  getProfile(token:string):Promise<Resource<ManagePortofolioModel>>;
}
