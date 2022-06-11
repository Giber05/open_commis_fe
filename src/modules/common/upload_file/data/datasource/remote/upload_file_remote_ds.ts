import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { CommonUploadedFileModel } from "../../models/common_uploaded_file_model";

export interface UploadFileRemoteDS {
  uploadFile(params:{token:string; formData:any;progressConfig: (progressEvent: any) => void}):Promise<CommonUploadedFileModel>;
  uploadImage(params:{token:string; formData:any;progressConfig: (progressEvent: any) => void}):Promise<CommonUploadedFileModel>;
}

export class UploadFileRemoteDSImpl implements UploadFileRemoteDS {
 async  uploadImage(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void; }): Promise<CommonUploadedFileModel> {
    let uploadImageURL = NetworkConstant.baseUrl + "image/upload";
    const response = await this.baseClient.postWithCookie({
      url: uploadImageURL,
      body: params.formData,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
        onUploadProgress: params.progressConfig,
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return CommonUploadedFileModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
  private baseClient = new BaseClient();

 async uploadFile(params: { token: string; formData: any; progressConfig: (progressEvent: any) => void; }): Promise<CommonUploadedFileModel> {
    let uploadFileURL = NetworkConstant.baseUrl + "orders/submission/upload";
    const response = await this.baseClient.postWithCookie({
      url: uploadFileURL,
      body: params.formData,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
        onUploadProgress: params.progressConfig,
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return CommonUploadedFileModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  
}
