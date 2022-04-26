export class ReviewEntity {
  id:number;
  rating:number;
  comment:string;
  createdAt:Date;

  constructor(
    params:{id: number, 
    rating: number, 
    comment: string, 
    createdAt: Date}
) {
    this.id = params.id
    this.rating = params.rating
    this.comment = params.comment
    this.createdAt = params.createdAt
  }

}