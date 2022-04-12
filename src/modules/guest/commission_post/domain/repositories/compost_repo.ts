import Resource from "../../../../../core/utils/resource";
import ComPostModel from "../../data/models/compost_model";

interface ComPostRepo {
  getComPostList(): Promise<Resource<ComPostModel>>;
}
export default ComPostRepo;
