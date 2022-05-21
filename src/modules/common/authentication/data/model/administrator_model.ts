import { UserEntity } from "../../domain/entities/user_entity";

export class AdministratorModel extends UserEntity {
  createdAt: Date;
  updateAt: Date;

  constructor(params: { createdAt: Date; updateAt: Date; id: number; name: string; username: string; profilePicture?: string | null }) {
    super({
      id: params.id,
      name: params.name,
      username: params.username,
    });
    this.createdAt = params.createdAt;
    this.updateAt = params.updateAt;
  }

  public static fromJson(json:any):AdministratorModel{
    return new AdministratorModel ({
      id: json.id,
      name: json.name,
      username: json.username,
      createdAt :json.createdAt,
      updateAt :json.updateAt,
    })
  }
}
