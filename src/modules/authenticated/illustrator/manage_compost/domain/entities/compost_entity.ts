class ComPostEntity {
  id: string;
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  category: string;
  duration: number;
  tags: string[];

  constructor(params: { id: string; name: string; price: number; description: string; imageSrc: string; category: string; duration: number; tags: string[] }) {
    this.id = params.id;
    this.name = params.name;
    this.price = params.price;
    this.description = params.description;
    this.imageSrc = params.imageSrc;
    this.category = params.category;
    this.duration = params.duration;
    this.tags = params.tags;
  }
}

export default ComPostEntity;
