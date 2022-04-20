export class ArtworkEntity {
  id: number;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(params:{
    id: number, 
    image: string, 
    description: string, 
    createdAt: Date, 
    updatedAt: Date}
) {
    this.id = params.id
    this.image = params.image
    this.description = params.description
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
