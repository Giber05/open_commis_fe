import { ReactNode } from "react";
import { Card, message, Upload, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/lib/upload";

interface Props extends UploadProps {
  children: ReactNode;
}
const  beforeUpload=(file:RcFile)=> {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'|| file.type === 'image/jpg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
    return 
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  console.log(`${file.size}`);
  
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
    return 
  }
  return false;
}
const onPreview = async (file:any) => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
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

function UploadWithCrop  (props: Props) {
  return (
    <ImgCrop 
      rotate 
      quality={1}
      aspect={5/4} 
      
    >
      <Upload
        {...props}
        maxCount={5}
        beforeUpload={beforeUpload}
        listType="picture-card"
        onPreview={onPreview}
      />
    </ImgCrop>
  );
};

export default UploadWithCrop;
