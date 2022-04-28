export class DestinationCodeEntity {
  name: string;
  code: string;

  constructor(params: { name: string; code: string }) {
    this.name = params.name;
    this.code = params.code;
  }
}
