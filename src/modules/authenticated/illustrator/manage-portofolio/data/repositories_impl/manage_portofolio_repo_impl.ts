import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { ManagePortofolioRepo } from "../../domain/repositories/manage_portofolio_repository";
import { ManagePortofolioRemoteDS, ManagePortofolioRemoteDSImpl } from "../datasources/manage_portofolio_remote_ds";
import { ManagePortofolioModel } from "../models/portofolio_model";

export class ManagePortofolioRepoImpl extends BaseRepository implements ManagePortofolioRepo {
  private managePortofolioRemoteDS: ManagePortofolioRemoteDS = new ManagePortofolioRemoteDSImpl();
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
