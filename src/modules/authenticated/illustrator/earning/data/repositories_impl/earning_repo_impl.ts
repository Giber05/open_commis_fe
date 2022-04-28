import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { EarningRepo } from "../../domain/repositories/earning_repo";
import { EarningRemoteDS, EarningRemoteDSImpl } from "../datasources/remote/earning_remote_ds";
import { DestinationCodeModel } from "../models/destination_code_model";
import { IllustratorsBalanceModel } from "../models/illustrators_balance_model";
import { WithdrawalBalanceModel } from "../models/withdrawal_balance_model";

export class EarningRepoImpl extends BaseRepository implements EarningRepo {
  getDestinationCode(token: string): Promise<Resource<DestinationCodeModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.earningRemoteDS.getDestinationCode(token);
        if (resource instanceof DestinationCodeModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  withdrawBalance(params: { token: string; amount: number; destination: string; accountNumber: string }): Promise<Resource<WithdrawalBalanceModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.earningRemoteDS.withdrawBalance({ token: params.token, amount: params.amount, destination: params.destination, accountNumber: params.accountNumber });
        if (resource instanceof WithdrawalBalanceModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
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
