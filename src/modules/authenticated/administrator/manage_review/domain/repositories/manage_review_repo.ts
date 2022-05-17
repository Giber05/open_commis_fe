import Resource from "../../../../../../core/utils/resource";
import { DeleteModel } from "../../../../../common/delete/models/delete_model";

export interface ManageReviewRepo {
  deleteReview(params:{token:string,id:number}):Promise<Resource<DeleteModel>>;
}
