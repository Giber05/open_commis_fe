import Resource from "../../../../../core/utils/resource";
import { ReviewListModel } from "../../data/models/review_list_model";

export interface ReviewRepo {
  getReviewsByComPostId(compostId: number): Promise<Resource<ReviewListModel>>;
  
}