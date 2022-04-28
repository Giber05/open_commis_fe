import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { IllustratorsBalanceModel } from "../../models/illustrators_balance_model";
import { WithdrawalBalanceModel } from "../../models/withdrawal_balance_model";

export interface EarningRemoteDS {
  getIllustratorsBalance(token: string): Promise<IllustratorsBalanceModel>;
  withdrawBalance(params: { token: string; amount: number; destination: string; accountNumber: string }): Promise<WithdrawalBalanceModel>;
}

export class EarningRemoteDSImpl implements EarningRemoteDS {
  private baseClient = new BaseClient();
  async withdrawBalance(params: { token: string; amount: number; destination: string; accountNumber: string }): Promise<WithdrawalBalanceModel> {
    let withdrawBalanceURL = NetworkConstant.baseUrl + "withdrawals/create";
    const response = await this.baseClient.postWithCookie({
      url: withdrawBalanceURL,
      body:{
        destination:params.destination,
        amount:params.amount,
        accountNumber:params.accountNumber
      },
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;

      return WithdrawalBalanceModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async getIllustratorsBalance(token: string): Promise<IllustratorsBalanceModel> {
    let getIllustratorsBalanceURL = NetworkConstant.baseUrl + "illustrator/balance";
    const response = await this.baseClient.getWithCookie({
      url: getIllustratorsBalanceURL,
      configs: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;

      return IllustratorsBalanceModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
