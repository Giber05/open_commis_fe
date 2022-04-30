import ed from "../../../../../../core/utils/ed";
import UserModel, { UserData } from "../../models/user_model";

export interface AuthLocalDS {
  saveUser(user: UserModel): Promise<void>;

  getUser(): Promise<UserModel | null>;
  
  deleteLoggedInUser(): Promise<void>;
  
  saveRegisteredUser(user: UserData): Promise<void>;

  getRegisteredUser(): Promise<UserData | null>;
}

class AuthLocalDSImpl implements AuthLocalDS {
  private readonly userBox: string = "user";
  private readonly registeredUserBox: string = "registered_user";
  
 async getRegisteredUser(): Promise<UserData | null> {
    let registeredUser: UserData | null = null;
    try {
      const json: string | null = await localStorage.getItem(this.registeredUserBox);

      if (json != null) {
        const decData = ed.dec(json, 2, 6);
        registeredUser = UserData.fromJson(JSON.parse(decData));
      }
      return registeredUser;
    } catch (error) {
      throw new Error("Error Get registered user");
    }
  }

 async  saveRegisteredUser(user: UserData): Promise<void> {
    try {
      const encData = ed.enc(user.toJson(), 2, 6);

      await localStorage.setItem(this.registeredUserBox, encData);
    } catch (error) {
      throw new Error("Error Save user");
    }
  }

  async saveUser(user: UserModel): Promise<void> {
    try {
      const encData = ed.enc(user.toJson(), 2, 6);

      await localStorage.setItem(this.userBox, encData);
      await localStorage.removeItem(this.registeredUserBox);
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
