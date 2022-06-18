import IlustratorEntity from "../../../../common/authentication/domain/entities/ilustrator_entity";
import { CommissionPost } from "../../../../common/commission/data/models/commission_post";
import CommissionPosts from "../../../commission_post/data/models/compost_list/commission_posts";
import { ArtworkModel } from "./artwork_model";
import { PortofolioModel } from "./portofolio_model";

export class IllustratorsPortofolio extends IlustratorEntity {
  portofolio?: PortofolioModel;
  artworks?: ArtworkModel[];
  commissions?: CommissionPosts[];
  ordersCompleted: number;
  overallRating: number;
  constructor(params: {
    overallRating: number;
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    balance: number;
    profilePicture?: string | null;
    available: boolean;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    portofolio?: PortofolioModel;
    commissions?: CommissionPosts[];
    artworks?: ArtworkModel[];
    ordersCompleted: number;
    verified?: boolean;
  }) {
    super({
      id: params.id,
      name: params.name,
      username: params.username,
      email: params.email,
      phone: params.phone,
      balance: params.balance,
      profilePicture: params.profilePicture ?? null,
      available: params.available,
      emailVerified: params.emailVerified,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
      verified: params.verified,
    });
    this.portofolio = params.portofolio;
    this.artworks = params.artworks;
    this.commissions = params.commissions;
    this.ordersCompleted = params.ordersCompleted;
    this.overallRating = params.overallRating;
  }

  public static fromJson(json: any): IllustratorsPortofolio {
    return new IllustratorsPortofolio({
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
      artworks: json.artworks.map((artwork: any) => {
        return ArtworkModel.fromJson(artwork);
      }),
      portofolio: PortofolioModel.fromJson(json.portfolio),
      commissions: json.commissions.map((commission: any) => {
        return CommissionPosts.fromJson(commission);
      }),
      ordersCompleted: json.ordersCompleted,
      verified: json.verified,
      overallRating: json.overallRating,
    });
  }
}
