export class CategoryEntity {
  id: number;
  categoryName: string;

  constructor(params: { id: number; categoryName: string }) {
    this.id = params.id;
    this.categoryName = params.categoryName;
  }
}
