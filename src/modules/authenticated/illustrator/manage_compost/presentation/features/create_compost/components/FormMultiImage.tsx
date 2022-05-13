import { ReactNode, useState } from "react";
import { Card, message, Upload, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/lib/upload";
import NetworkConstant from "../../../../../../../../core/constants/network_constant";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import useCreateComPostHandler from "../use_create_compost_handler";

interface Props extends UploadProps {
  children: ReactNode;
}
const beforeUpload = (file: File) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG/JPEG file!");
    return Upload.LIST_IGNORE;
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  console.log(`${file.size}`);

  if (!isLt2M) {
    message.error("Image must smaller than 5MB!");
    return Upload.LIST_IGNORE;
  }
  return isJpgOrPng && isLt2M;
};
const onPreview = async (file: any) => {
  let src = file.url;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};

function UploadWithCrop(props: Props) {
  const {uploadFile} = useCreateComPostHandler()
  return (
    <ImgCrop
      // beforeCrop={beforeUpload}
      rotate
      quality={1}
      aspect={5 / 4}
    >
      <Upload
      withCredentials={false}
        customRequest={uploadFile}
        {...props}
        maxCount={4}
        beforeUpload={beforeUpload}
        listType="picture-card"
        onPreview={onPreview}
      />
    </ImgCrop>
  );
}

export default UploadWithCrop;
