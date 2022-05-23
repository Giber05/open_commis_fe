import Resource from "../../../../../../core/utils/resource";
import { IllustratorOrderDetailModel } from "../../data/models/illustrator_order_detail_model";
import { SubmissionFileModel } from "../../data/models/submission_file_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";

export class SendOrder {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { orderId: number; token: string; submissionFile?: string; cloudLink?: string; description?: string }): Promise<Resource<IllustratorOrderDetailModel>> {
    return this.orderRepo.sendOrder({ token: params.token, submissionFile: params.submissionFile, description: params.description, cloudLink: params.cloudLink, orderId: params.orderId });
  }
}
