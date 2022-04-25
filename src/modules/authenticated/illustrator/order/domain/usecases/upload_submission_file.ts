import Resource from "../../../../../../core/utils/resource";
import { IllustratorOrderDetailModel } from "../../data/models/illustrator_order_detail_model";
import { SubmissionFileModel } from "../../data/models/submission_file_model";
import { OrderRepoImpl } from "../../data/repositories_impl/order_repo_impl";
import { OrderRepo } from "../repositories/order_repo";

export class UploadSubmissionFile {
  private orderRepo: OrderRepo = new OrderRepoImpl();
  async execute(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void }): Promise<Resource<SubmissionFileModel>> {
    return this.orderRepo.uploadSubmissionFile({ token: params.token, formData: params.formData, progressConfig: params.progressConfig });
  }
}
