import IlustratorEntity from "../../../../common/authentication/domain/entities/ilustrator_entity";
import { ArtworkModel } from "./artwork_model";
import { PortofolioModel } from "./portofolio_model";

export class IllustratorsPortofolio extends IlustratorEntity {
  portofolio?: PortofolioModel;
  artworks?: ArtworkModel[];

  constructor(params: {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    balance: number;
    profilePicture: null;
    available: boolean;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    portofolio?: PortofolioModel;
    artworks?: ArtworkModel[];
  }) {
    super({
      id: params.id,
      name: params.name,
      username: params.username,
      email: params.email,
      phone: params.phone,
      balance: params.balance,
      profilePicture: params.profilePicture,
      available: params.available,
      emailVerified: params.emailVerified,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    this.portofolio = params.portofolio;
    this.artworks = params.artworks;
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
    });
  }
}
