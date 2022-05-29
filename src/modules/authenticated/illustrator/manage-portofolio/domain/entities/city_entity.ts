export class CityEntity {
  id: number;
  provinceId: number;
  name: string;

  constructor(params: { id: number; provinceId: number; name: string }) {
    this.id = params.id;
    this.provinceId = params.provinceId;
    this.name = params.name;
  }
}
