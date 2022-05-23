import Resource from "../../../../../../core/utils/resource";
import { IllustratorOrderDetailModel } from "../../data/models/illustrator_order_detail_model";
import OrderListModel from "../../../../../common/order/data/models/order_list_model";
import { SubmissionFileModel } from "../../data/models/submission_file_model";

export interface OrderRepo {
  getOrders(params: { page: number; limit: number;token:string,compostId?: number }): Promise<Resource<OrderListModel>>;
  getOrderDetail(params: { orderId: number;token:string, }): Promise<Resource<IllustratorOrderDetailModel>>;
  confirmOrder(params: { orderId: number; token: string; accept: boolean; rejectReason?: string }): Promise<Resource<IllustratorOrderDetailModel>>;
  uploadSubmissionFile(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void }): Promise<Resource<SubmissionFileModel>>;
  sendOrder(params: { orderId: number; token: string; submissionFile?:string, cloudLink?:string,description?:string }): Promise<Resource<IllustratorOrderDetailModel>>;

}
