import Resource from "../../../../../../core/utils/resource";
import OrderListModel from "../../../../../common/order/data/models/order_list_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";


export class GetOrders {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { page: number; limit: number; token: string; compostId?: number }): Promise<Resource<OrderListModel>> {
    return this.orderRepo.getOrders({ page: params.page, limit: params.limit, token: params.token, });
  }
}
