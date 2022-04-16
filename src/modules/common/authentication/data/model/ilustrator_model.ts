import IlustratorEntity from "../../domain/entities/ilustrator_entity";

class IlustratorModel extends IlustratorEntity {
  public static fromJson(json: any): IlustratorModel {
    return new IlustratorModel({
      id: json.id,
      name: json.name,
      username: json.username,
      email: json.email,
      phone: json.phone,
      balance: json.balance,
      profilePicture: json.profilePicture,
      available: json.available,
      emailVerified: json.emailVerified,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
    });
  }
}
export default IlustratorModel;

