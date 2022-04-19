import ed from "../../../../../../core/utils/ed";
import UserModel from "../../models/user_model";

export interface AuthLocalDS {
  saveUser(user: UserModel): Promise<void>;

  getUser():Promise<UserModel | null>;

  deleteLoggedInUser():Promise<void>

}

class AuthLocalDSImpl implements AuthLocalDS {
  private getUserType(user:UserModel):string {
    return user.data.role
  }
  private readonly userBox: string = "user";

  async saveUser(user: UserModel): Promise<void> {
    
    try {
      const encData = ed.enc(user.toJson(), 2, 6);
      
      await localStorage.setItem(this.userBox, encData);
    } catch (error) {
      throw new Error("Error Save user");
    }
  }
  async getUser(): Promise<UserModel | null> {
    let user: UserModel | null = null;
    try {
      const json: string | null = await localStorage.getItem(this.userBox);
      
      if (json != null) {
        const decData = ed.dec(json, 2, 6);
        user = UserModel.fromJson(decData);
      }
      return user;
    } catch (error) {
      throw new Error("Error Get user");
    }
  }
  async deleteLoggedInUser(): Promise<void> {
    try {
      await localStorage.removeItem(this.userBox);
    } catch (error) {
      throw new Error("Error Remove user");
    }
  }
}

export default AuthLocalDSImpl;

