import { UserTypeModel } from "../../../authentication/data/model/user_type_model";
import { ReviewEntity } from "../../domain/entities/review_entity";

export class ReviewList extends ReviewEntity {
  consumer: UserTypeModel;
  commissionPostId:number;

  constructor(params: { visible:boolean;id: number; rating: number; comment: string; commissionPostId: number; createdAt: Date; consumer: UserTypeModel, }) {
    super({
      id: params.id,
      rating: params.rating,
      comment: params.comment,
      createdAt: params.createdAt,
      visible:params.visible,
    });
    this.consumer = params.consumer;
    this.commissionPostId = params.commissionPostId
  }

  public static fromJson(json: any): ReviewList {
    return new ReviewList({
      id: json.id,
      rating: json.rating,
      comment: json.comment,
      commissionPostId: json.commissionPostId,
      createdAt: json.createdAt,
      consumer: UserTypeModel.fromJson(json.consumer),
      visible:json.visible,

    });
  }
}
