import Resource from "../../../../../core/utils/resource";
import { CommonUploadedFileModel } from "../../data/models/common_uploaded_file_model";
import { UploadedFileModel } from "../../data/models/uploaded_file_model";

export interface UploadFileRepo {
  uploadFile(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void }): Promise<Resource<CommonUploadedFileModel>>;

}