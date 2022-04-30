import { UploadProps, message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { ReactNode, useState } from "react";
import useEditPortofolioHandler from "../../../modules/authenticated/illustrator/manage-portofolio/presentation/features/edit-portofolio/components/use_edit_portofolio_handler";

interface Props extends UploadProps {
  children: ReactNode;
}

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

function ImageWithCrop(props: Props) {
  const { uploadableHandler, } = useEditPortofolioHandler();

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      uploadableHandler(false);
      return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    console.log(`${file.size}`);

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      uploadableHandler(false);

      return Upload.LIST_IGNORE;
    }
    uploadableHandler(true);
    return true;
  };
  const beforeCrop = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    console.log(`${file.size}`);

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");

      return false;
    }
    return true;
  };

  return (
    <ImgCrop zoom={false} rotate quality={1} aspect={5 / 4}>
      <Upload {...props}  onPreview={onPreview} />
    </ImgCrop>
  );
}

export default ImageWithCrop;
