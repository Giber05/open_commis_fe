import Resource from "../../../../../../core/utils/resource";
import { IllustratorOrderDetailModel } from "../../data/models/illustrator_order_detail_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";

export class GetOrderDetail {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { orderId: number;  token: string }): Promise<Resource<IllustratorOrderDetailModel>> {
    return this.orderRepo.getOrderDetail({ orderId: params.orderId, token: params.token });
  }
}
