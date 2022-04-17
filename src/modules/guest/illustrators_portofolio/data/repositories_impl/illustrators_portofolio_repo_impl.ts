import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import { IllustratorsPortofolioRepo } from "../../domain/repositories/illustrators_portofolio_repo";
import { PortofolioRemoteDS, PortofolioRemoteDSImpl } from "../datasources/remote/portofolio_remote_ds";
import { IllustratorsPortofolioModel } from "../models/illustrators_portofolio_model";

export class IllustratorsPortofolioRepoImpl extends BaseRepository implements IllustratorsPortofolioRepo {
  private portofolioRemoteDS: PortofolioRemoteDS = new PortofolioRemoteDSImpl();
  getIllustratorsPortofolio(illustratorId: number): Promise<Resource<IllustratorsPortofolioModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.portofolioRemoteDS.getIllustratorsPortofolio(illustratorId);
        if (resource instanceof IllustratorsPortofolioModel) return Resource.success({ data: resource });
        return Resource.error({exception:resource})
      },
    });
  }
}
