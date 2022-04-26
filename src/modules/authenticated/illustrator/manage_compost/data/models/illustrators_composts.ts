import { CommissionPostEntity } from "../../../../../common/commission/domain/entities/commission_post_entity";

class IllustratorComposts extends CommissionPostEntity {
  ordersCompleted?: number | null;
  overallRating?: number | null;

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
    ordersCompleted?: number;
    overallRating?: number;
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

    this.ordersCompleted = params.ordersCompleted;
    this.overallRating = params.overallRating;
  }

  public static fromJson(json: any): IllustratorComposts {
    return new IllustratorComposts({
      id: json.id,
      title: json.title,
      durationTime: json.durationTime,
      price: json.price,
      description: json.description,
      status: json.status,
      image_1: json.image_1,
      image_2: json.image_2,
      image_3: json.image_3,
      image_4: json.image_4,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
      overallRating: json.overallRating == undefined ? null : json.overallRating,
      ordersCompleted: json.ordersCompleted == undefined ? null : json.ordersCompleted,
    });
  }
}
export default IllustratorComposts;
