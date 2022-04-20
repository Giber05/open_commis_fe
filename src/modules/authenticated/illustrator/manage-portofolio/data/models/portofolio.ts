import IlustratorEntity from "../../../../../common/authentication/domain/entities/ilustrator_entity";
import { ArtworkModel } from "../../../../../guest/illustrators_portofolio/data/models/artwork_model";
import { PortofolioModel } from "../../../../../guest/illustrators_portofolio/data/models/portofolio_model";

export class ManagePortofolio extends IlustratorEntity {
  portofolio?: PortofolioModel;
  artworks?: ArtworkModel[];

  constructor(params: {
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
    artworks?: ArtworkModel[];
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
    });
    this.portofolio = params.portofolio;
    this.artworks = params.artworks;
  }

  public static fromJson(json: any): ManagePortofolio {
    return new ManagePortofolio({
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