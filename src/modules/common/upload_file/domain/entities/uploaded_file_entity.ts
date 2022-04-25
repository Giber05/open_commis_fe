export class UploadedFileEntity {
  path:string;

  constructor(params:{path: string}) {
    this.path = params.path
  }

}