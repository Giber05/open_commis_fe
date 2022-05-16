import { UserEntity } from "../../../../../../common/authentication/domain/entities/user_entity";

export class UserList extends UserEntity {
  role: string;
  email: string;
  phone: string;
  createdAt: Date;
  deletedAt?: Date | null;

  constructor(params: { role: string; email: string; phone: string; createdAt: Date; deletedAt?: Date; id: number; name: string; username: string; profilePicture?: string | null }) {
    super({
      id: params.id,
      name: params.name,
      username: params.username,
      profilePicture: params.profilePicture,
    });
    this.role = params.role;
    this.email = params.email;
    this.phone = params.phone;
    this.createdAt = params.createdAt;
    this.deletedAt = params.deletedAt;
  }

  public static fromJson(json: any): UserList {
    return new UserList({
      id: json.id,
      name: json.name,
      username: json.username,
      profilePicture: json.profilePicture,
      role: json.role,
      email: json.email,
      phone: json.phone,
      createdAt: json.createdAt,
      deletedAt: json.deletedAt,
    });
  }
}
