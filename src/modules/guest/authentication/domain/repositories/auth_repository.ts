import Resource from "../../../../../core/utils/resource";
import UserModel from "../../data/models/user_model";

interface AuthRepository {
  login(params: { email: string; password: string }): Promise<Resource<UserModel>>;

  logout(): Promise<Resource<boolean>>;

  getCurrentUser(): Promise<Resource<UserModel>>;
}

export default AuthRepository;
