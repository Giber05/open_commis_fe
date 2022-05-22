import { UserCountEntity } from "../../../domain/entities/user_count_entity";

export class UserCount extends UserCountEntity {
  public static fromJson(json: any): UserCount {
    return new UserCount({
      illustrator: json.illustrator,
      consumer: json.consumer,
    });
  }
}
