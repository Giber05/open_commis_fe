import Resource from "../../../../../../core/utils/resource";
import ComPostModel from "../../data/models/ComPostModel";

interface ManageComPostRepo {
  getComPostList(ilustratorId: string): Promise<Resource<ComPostModel[]>>;
}
export default ManageComPostRepo;
