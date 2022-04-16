import ConsumerEntity from "../../domain/entities/consumer_entity";

class ConsumerModel extends ConsumerEntity {
  public static fromJson(json: any): ConsumerModel {
    return new ConsumerModel({
      id: json.id,
      name: json.name,
      username: json.username,
      email: json.email,
      phone: json.phone,
      profilePicture: json.profilePicture,
      emailVerified: json.emailVerified,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
    });
  }
}
export default ConsumerModel;

