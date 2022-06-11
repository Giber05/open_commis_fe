import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import { UploadFileRepo } from "../../domain/repositories/upload_file_repo";
import { UploadFileRemoteDS, UploadFileRemoteDSImpl } from "../datasource/remote/upload_file_remote_ds";
import { CommonUploadedFileModel } from "../models/common_uploaded_file_model";
import { UploadedFileModel } from "../models/uploaded_file_model";

export class UploadFileRepoImpl extends BaseRepository implements UploadFileRepo {
  private uploadFileRemoteDS: UploadFileRemoteDS = new UploadFileRemoteDSImpl();
  
  uploadImage(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void; }): Promise<Resource<CommonUploadedFileModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.uploadFileRemoteDS.uploadImage({ token: params.token, formData: params.formData, progressConfig: params.progressConfig });
        if (resource instanceof CommonUploadedFileModel) return Resource.success({ data: resource });

        return Resource.error({ exception: resource });
      },
    });
  }
  

  uploadFile(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void; }): Promise<Resource<CommonUploadedFileModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.uploadFileRemoteDS.uploadFile({ token: params.token, formData: params.formData, progressConfig: params.progressConfig });
        if (resource instanceof CommonUploadedFileModel) return Resource.success({ data: resource });

        return Resource.error({ exception: resource });
      },
    });
  }
  
}