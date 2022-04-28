import { DestinationCodeEntity } from "../../domain/entities/destination_code_entity";

export class DestinationCode extends DestinationCodeEntity {
  public static fromJson(json: any): DestinationCode {
    return new DestinationCode({
      name: json.name,
      code: json.code,
    });
  }
}
