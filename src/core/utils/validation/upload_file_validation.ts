import { message } from "antd";

export class UploadFileValidation {
  /**
   * beforeUploadCheck
   */
  public static beforeUploadCheck(params: { file: File; maxFileSize: number; allowedFormat: string[] }): boolean {
    const isValidFormatFile = params.allowedFormat.includes(params.file.type);
    if (!isValidFormatFile) {
      message.error("Format file yang diupload tidak valid");
      return false;
    }
    const isValidFileSize = params.file.size / 1024 / 1024 < params.maxFileSize;

    if (!isValidFileSize) {
      message.error(`Image must smaller than ${params.maxFileSize}MB!`);
      return false;
    }
    return isValidFormatFile && isValidFileSize;
  }
}
