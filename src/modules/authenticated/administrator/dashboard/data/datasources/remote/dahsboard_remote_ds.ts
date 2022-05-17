import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { TransactionListModel } from "../../models/transaction/transaction_list_model";

export interface DashboardRemoteDS {
  getTransactionList(params:{token:string; limit?:number;page:number}):Promise<TransactionListModel>;
}

export class DashboardRemoteDSImpl implements DashboardRemoteDS {
  private baseClient = new BaseClient()
  async getTransactionList(params: { token: string; limit?: number; page: number; }): Promise<TransactionListModel> {
    let getTransactionsURL = NetworkConstant.baseUrl + "transactions";

    const response = await this.baseClient.getWithCookie({
      url: getTransactionsURL,
      configs: {
        params: {
          limit: params.limit,
          page: params.page,
        },
        headers:{
          Authorization: "Bearer "+params.token
        }
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return TransactionListModel.fromJson(body);
    }
    throw new BaseException({ message: response.data });
  }
  
}
