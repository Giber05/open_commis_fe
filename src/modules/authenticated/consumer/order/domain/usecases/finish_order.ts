import Resource from "../../../../../../core/utils/resource";
import { ConsumerMakeOrderModel } from "../../data/models/order/make_order/consumer_make_order_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";

export class FinishOrder {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { orderId: number;  token: string }): Promise<Resource<ConsumerMakeOrderModel>> {
    return this.orderRepo.finishOrder({ orderId: params.orderId, token: params.token });
  }
}