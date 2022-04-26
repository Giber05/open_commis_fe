import { UserTypeModel } from "../../../../../common/authentication/data/model/user_type_model";
import { ReviewEntity } from "../../../../../common/reviews/domain/entities/review_entity";

export class ReviewModel extends ReviewEntity {
  consumer: UserTypeModel;

  constructor(params: { id: number; rating: number; comment: string;  createdAt: Date; consumer: UserTypeModel, }) {
    super({
      id: params.id,
      rating: params.rating,
      comment: params.comment,
      createdAt: params.createdAt,
    });
    this.consumer = params.consumer;
  }

  public static fromJson(json: any): ReviewModel {
    return new ReviewModel({
      id: json.id,
      rating: json.rating,
      comment: json.comment,
      createdAt: json.createdAt,
      consumer: UserTypeModel.fromJson(json.consumer),
    });
  }
}