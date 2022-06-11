import Resource from "../../../../../core/utils/resource";
import { CommonUploadedFileModel } from "../../data/models/common_uploaded_file_model";
import { UploadFileRepoImpl } from "../../data/repositories_impl/upload_file_repo_impl";
import { UploadFileRepo } from "../repositories/upload_file_repo";

export class UploadImage {
  private uploadFileRepo:UploadFileRepo = new UploadFileRepoImpl()

  async execute(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void }): Promise<Resource<CommonUploadedFileModel>> {
    return this.uploadFileRepo.uploadImage({ token: params.token, formData: params.formData, progressConfig: params.progressConfig });
  }
} 