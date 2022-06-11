import { UploadedFileEntity } from "../../domain/entities/uploaded_file_entity";

export class UploadedFileModel extends UploadedFileEntity {
  public static fromJson(json: any): UploadedFileModel {
    return new UploadedFileModel({
      path: json.path === undefined ? json.fileName : json.path,
    });
  }
}
