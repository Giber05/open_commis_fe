import { IllustratorsBalanceEntity } from "../../domain/entities/illustrators_balance_entity";

export class IllustratorsBalance extends IllustratorsBalanceEntity {
 public static fromJson(json:any):IllustratorsBalance{
   return new IllustratorsBalance ({
     id:json.id,
     name:json.name,
     username:json.username,
     balance:json.balance
   })
 } 
}