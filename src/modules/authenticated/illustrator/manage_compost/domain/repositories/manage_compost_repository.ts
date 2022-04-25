import Resource from "../../../../../../core/utils/resource";
import { TagModel } from "../../../../../common/commission/data/models/tag_model";
import { ComPostDetailModel } from "../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import { DeleteComPostModel } from "../../data/models/delete_compost_model";
import IllustratorComposts from "../../data/models/illustrators_composts";

interface ManageComPostRepo {
  getTags(): Promise<Resource<TagModel[]>>;
  deleteComPost(params:{token:string, compostId:number}): Promise<Resource<DeleteComPostModel>>;
  createComPost(params: { token: string; formData: any }): Promise<Resource<ComPostDetailModel>>;
  editComPost(params: { token: string; formData: any; compostId:number }): Promise<Resource<ComPostDetailModel>>;
  changeComPostStatus(params: {token: string; status: string; compostId: number}): Promise<Resource<ComPostDetailModel>>;
  createTag(params: { token: string; tagName: string }): Promise<Resource<TagModel>>;
  getComPostList(token: string): Promise<Resource<IllustratorComposts[]>>;
  getIllustratorComPostDetail(compostId: number): Promise<Resource<ComPostDetailModel>>;
}
export default ManageComPostRepo;
