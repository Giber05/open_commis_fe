export class UserCountEntity {
  illustrator: number;
  consumer: number;

  constructor(params: { illustrator: number; consumer: number }) {
    this.illustrator = params.illustrator;
    this.consumer = params.consumer;
  }
}
