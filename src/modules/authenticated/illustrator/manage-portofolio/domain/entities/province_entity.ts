export class ProvinceEntity {
  id: number;
  name: string;

  constructor(params: { id: number; name: string }) {
    this.id = params.id;
    this.name = params.name;
  }
}
