import { UserTypeModel } from "../../../../../common/authentication/data/model/user_type_model";
import { CategoryModel } from "../../../../../common/commission/data/models/category_model";
import { TagModel } from "../../../../../common/commission/data/models/tag_model";
import { CommissionPostEntity } from "../../../../../common/commission/domain/entities/commission_post_entity";
import { ReviewModel } from "../review/review_model";

export class CommissionPostDetail extends CommissionPostEntity {
  category?: CategoryModel | null;
  tags?: TagModel[] | null;
  illustrator: UserTypeModel;
  ordersCompleted?: number|null;
  overallRating?: number|null;
  reviews?: ReviewModel[]|null;

  constructor(params: {
    category?: CategoryModel;
    tags?: TagModel[];
    illustrator: UserTypeModel;
    ordersCompleted?: number|null;
    overallRating?: number|null;
    reviews?: ReviewModel[]|null;
    id: number;
    title: string;
    durationTime: number;
    price: number;
    description?: string;
    status: string;
    image_1: string;
    image_2?: string;
    image_3?: string;
    image_4?: string;
    createdAt: Date;
    updatedAt?: Date;
  }) {
    super({
      id: params.id,
      title: params.title,
      durationTime: params.durationTime,
      price: params.price,
      description: params.description,
      status: params.status,
      image_1: params.image_1,
      image_2: params.image_2,
      image_3: params.image_3,
      image_4: params.image_4,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    this.tags = params.tags;
    this.illustrator = params.illustrator;
    this.category = params.category;
    this.overallRating = params.overallRating;
    this.ordersCompleted = params.ordersCompleted;
    this.reviews = params.reviews;
  }

  public static fromJson(json: any): CommissionPostDetail {
    return new CommissionPostDetail({
      id: json.id,
      title: json.title,
      price: json.price,
      description: json.description,
      durationTime: json.durationTime,
      status: json.status,
      image_1: json.image_1,
      image_2: json.image_2,
      image_3: json.image_3,
      image_4: json.image_4,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
      category: CategoryModel.fromJson(json.category),
      tags: json.tags.map((tag: TagModel) => {
        return TagModel.fromJson(tag);
      }),
      illustrator: UserTypeModel.fromJson(json.illustrator),
      overallRating: json.overallRating == undefined?null:json.overallRating,
      ordersCompleted: json.ordersCompleted== undefined?null:json.ordersCompleted,
      reviews:json.reviews== undefined?null: json.reviews.map((review: ReviewModel) => ReviewModel.fromJson(review)),
    });
  }
}
