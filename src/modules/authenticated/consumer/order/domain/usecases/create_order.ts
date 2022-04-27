import Resource from "../../../../../../core/utils/resource";
import { ConsumerMakeOrderModel } from "../../data/models/order/make_order/consumer_make_order_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";

export class CreateOrder {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { orderForm: any;  token: string }): Promise<Resource<ConsumerMakeOrderModel>> {
    return this.orderRepo.createOrder({ orderForm: params.orderForm, token: params.token });
  }
}
