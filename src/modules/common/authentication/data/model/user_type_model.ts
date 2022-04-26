import { UserEntity } from "../../domain/entities/user_entity";

export class UserTypeModel extends UserEntity {
  public static fromJson(json: any): UserTypeModel {
    return new UserTypeModel({
      id: json.id,
      name: json.name,
      username: json.username,
      profilePicture: json.profilePicture,
    });
  }
}