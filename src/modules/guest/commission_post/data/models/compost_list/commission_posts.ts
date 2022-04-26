import { UserTypeModel } from "../../../../../common/authentication/data/model/user_type_model";
import { CommissionPostEntity } from "../../../../../common/commission/domain/entities/commission_post_entity";

class CommissionPosts extends CommissionPostEntity {
  illustrator: UserTypeModel;
  overallRating: number;
  ordersCompleted: number;

  constructor(params: {
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
    overallRating: number;
    ordersCompleted: number;
    illustrator: UserTypeModel;
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
    this.overallRating = params.overallRating;
    this.ordersCompleted = params.ordersCompleted;
    this.illustrator = params.illustrator;
    
  }

  public static fromJson(json: any): CommissionPosts {
    return new CommissionPosts({
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
      overallRating:json.overallRating,
      ordersCompleted:json.ordersCompleted,
      illustrator: UserTypeModel.fromJson(json.illustrator),
    });
  }
}

export default CommissionPosts;
