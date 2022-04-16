import Resource from "../../../../../core/utils/resource";
import { CategoryModel } from "../../data/models/category/category_model";
import ComPostRepoImpl from "../../data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../repositories/compost_repo";

export class GetCategories{
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(): Promise<Resource<CategoryModel[]>> {
    return this.compostRepo.getCategories();
  }
}