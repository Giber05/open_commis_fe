import Resource from "../../../../../core/utils/resource";
import { IllustratorsPortofolioModel } from "../../data/models/illustrators_portofolio_model";

export interface IllustratorsPortofolioRepo {
  getIllustratorsPortofolio(illustratorId: number): Promise<Resource<IllustratorsPortofolioModel>>;
  
}
