export class ReviewEntity {
  id: number;
  rating: number;
  comment: string;
  createdAt: Date;
  visible: boolean;

  constructor(params: { id: number; rating: number; comment: string; createdAt: Date; visible: boolean }) {
    this.id = params.id;
    this.rating = params.rating;
    this.comment = params.comment;
    this.createdAt = params.createdAt;
    this.visible = params.visible;
  }
}
