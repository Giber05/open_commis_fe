import { PortofolioEntity } from "../../domain/entities/portofolio_entity";

export class PortofolioModel extends PortofolioEntity {
  public static fromJson(json:any):PortofolioModel{
    console.log({json});
    
    return new PortofolioModel ({
      bio:json.bio,
      instagramAcc:json.instagramAcc,
      twitterAcc:json.twitterAcc,
      facebookAcc:json.facebookAcc,
    })
  }
}