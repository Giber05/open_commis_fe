import { ReviewEntity } from "../../../../../common/reviews/domain/entities/review_entity";

export class AddReview extends ReviewEntity {
  consumerId: number;
  commissionPostId: number;

  constructor(params: { id: number; rating: number; comment: string; createdAt: Date; consumerId: number; commissionPostId: number }) {
    super({
      id: params.id,
      rating: params.rating,
      comment: params.comment,
      createdAt: params.createdAt,
    });
    this.consumerId = params.consumerId;
    this.commissionPostId = params.commissionPostId;
  }
  public static fromJson(json: any): AddReview {
    return new AddReview({
      id: json.id,
      rating: json.rating,
      comment: json.comment,
      createdAt: json.createdAt,
      consumerId: json.consumerId,
      commissionPostId: json.commissionPostId,
    });
  }
}
