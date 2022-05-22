import Resource from "../../../../../../core/utils/resource";
import { UserCountModel } from "../../data/models/user_count/user_count_model";
import { DashboardRepoImpl } from "../../data/repositories_impl/dashboard_repo_impl";
import { DashboardRepo } from "../repositories/dashboard_repo";

export class GetUserCount {
  private dashboardRepo: DashboardRepo = new DashboardRepoImpl();

  async execute(token: string): Promise<Resource<UserCountModel>> {
    return await this.dashboardRepo.getUserCount(token);
  }
}
