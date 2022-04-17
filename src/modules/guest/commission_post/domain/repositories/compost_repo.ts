import Resource from "../../../../../core/utils/resource";
import { CategoryModel } from "../../data/models/category/category_model";
import { ComPostDetailModel } from "../../data/models/compost_detail/compost_detail_model";
import ComPostModel from "../../data/models/compost_list/compost_model";

interface ComPostRepo {
  getComPostList(params:{page:number, limit:number, categoryId?:number}): Promise<Resource<ComPostModel>>;
  getComPostDetail(compostId:number):Promise<Resource<ComPostDetailModel>>
  getCategories(): Promise<Resource<CategoryModel[]>>;
  searchComPosts(params:{keyword:string}): Promise<Resource<ComPostModel>>;
}
export default ComPostRepo;
