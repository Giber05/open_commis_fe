import { CommissionPostEntity, Illustrator } from "../../../../../common/commission/domain/entities/commission_post_entity";

class CommissionPosts extends CommissionPostEntity {
  illustrator: Illustrator;

  constructor(params: {
    illustrator: Illustrator;
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
      illustrator: Illustrator.fromJson(json.illustrator),
    });
  }
}

export default CommissionPosts;
