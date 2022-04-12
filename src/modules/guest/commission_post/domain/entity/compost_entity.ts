class ComPostEntity {
  id: number;
  title: string;
  durationTime: number;
  price: number;
  description: string;
  status: string;
  image_1: string;
  image_2?: null | string;
  image_3?: null | string;
  image_4?: null | string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
      params: { 
        id: number; 
        title: string; 
        price: number; 
        durationTime: number;
        description: string;
        status: string;
        image_1: string;
        image_2?: string;
        image_3?: string;
        image_4?: string;
        createdAt: Date;
        updatedAt: Date;
      }
    )
    {
      this.id = params.id;
      this.title = params.title;
      this.price = params.price;
      this.description = params.description;
      this.durationTime = params.durationTime;
      this.status = params.status;
      this.image_1 = params.image_1;
      this.image_2 = params.image_2;
      this.image_3 = params.image_3;
      this.image_4 = params.image_4;
      this.createdAt = params.createdAt;
      this.updatedAt = params.updatedAt;
  }
}

export default ComPostEntity;
