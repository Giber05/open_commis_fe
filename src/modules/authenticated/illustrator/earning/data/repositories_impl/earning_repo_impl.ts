import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { EarningRepo } from "../../domain/repositories/earning_repo";
import { EarningRemoteDS, EarningRemoteDSImpl } from "../datasources/remote/earning_remote_ds";
import { IllustratorsBalanceModel } from "../models/illustrators_balance_model";

export class EarningRepoImpl extends BaseRepository implements EarningRepo {
  private earningRemoteDS: EarningRemoteDS = new EarningRemoteDSImpl();
  getIllustratorsBalance(token: string): Promise<Resource<IllustratorsBalanceModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.earningRemoteDS.getIllustratorsBalance(token);
        if (resource instanceof IllustratorsBalanceModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
}
