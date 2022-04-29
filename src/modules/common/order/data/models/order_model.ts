import { OrderEntity } from "../../domain/entities/order_entity";

export class OrderModel extends OrderEntity {
 public static fromJson(json:any):OrderModel{
   return new OrderModel ({
     id:json.id,
     status:json.status,
     grandTotal:json.grandTotal,
     orderDate:json.orderDate,
     reviewed:json.reviewed

   })
 } 
}