import Resource from "../../../../../core/utils/resource";
import { IllustratorsPortofolioModel } from "../../data/models/illustrators_portofolio_model";
import { IllustratorsPortofolioRepoImpl } from "../../data/repositories_impl/illustrators_portofolio_repo_impl";
import { IllustratorsPortofolioRepo } from "../repositories/illustrators_portofolio_repo";

export class GetIllustratorsPortofolio {
  private illustratorsPortofolioRepo: IllustratorsPortofolioRepo = new IllustratorsPortofolioRepoImpl();
  async execute(illustratorId: number): Promise<Resource<IllustratorsPortofolioModel>> {
    
    return this.illustratorsPortofolioRepo.getIllustratorsPortofolio(illustratorId);
  }
}
