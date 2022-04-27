import Resource from "../../../../../../core/utils/resource";
import { MakePaymentModel } from "../../data/models/payment/make_payment_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";

export class MakePayment {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { orderId: number; method: string; token: string }): Promise<Resource<MakePaymentModel>> {
    return this.orderRepo.makePayment({ orderId: params.orderId, token: params.token, method: params.method });
  }
}
