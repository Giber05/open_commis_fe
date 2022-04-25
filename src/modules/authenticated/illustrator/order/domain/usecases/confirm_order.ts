import Resource from "../../../../../../core/utils/resource";
import { IllustratorOrderDetailModel } from "../../data/models/illustrator_order_detail_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";

export class ConfirmOrder {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { orderId: number; token: string; accept: boolean; rejectReason?: string | undefined }): Promise<Resource<IllustratorOrderDetailModel>> {
    return this.orderRepo.confirmOrder({ orderId: params.orderId, token: params.token, accept: params.accept, rejectReason: params.rejectReason });
  }
}
