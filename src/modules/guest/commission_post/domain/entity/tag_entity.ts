export class TagEntity {
  id: number;
  tagName: string;

  constructor(params: { id: number; tagName: string }) {
    this.id = params.id;
    this.tagName = params.tagName;
  }
}
