import React, { useState } from 'react';
import { message, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { RcFile } from 'antd/lib/upload';

const TestCropImage = () => {
  const [fileList, setFileList] = useState([
  ]);

  const onChange = (values:any) => {
    
    setFileList(values.fileList);
  };

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

  const beforeUpload = (file: File, fileList:File[]) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return false
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return false
    }
    return true ;
  };
  return (
    <ImgCrop beforeCrop={beforeUpload} rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default TestCropImage;