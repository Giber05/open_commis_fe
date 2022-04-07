class ComPostEntity {
  id: string;
  name: string;
  price: number;
  description: string;
  imageSrc: string;

  constructor(params: { id: string; name: string; price: number; description: string; imageSrc: string }) {
    this.id = params.id;
    this.name = params.name;
    this.price = params.price;
    this.description = params.description;
    this.imageSrc = params.imageSrc;
  }
}

export default ComPostEntity;
