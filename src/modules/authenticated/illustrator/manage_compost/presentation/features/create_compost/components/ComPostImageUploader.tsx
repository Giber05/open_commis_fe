import { Form, Upload } from 'antd';
import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';

function ComPostImageUploader() {
  const [form] = Form.useForm();
  const formData = new FormData();
  const [fileList, setFileList] = useState<any>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = (newFileList:any) => {
    setFileList(newFileList.fileList);
    formData.append("file", fileList);
    form.setFieldsValue({ formData })
    console.log({form});
    const data = formData.values()
    console.log({fileList});
  

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
  return (
    <ImgCrop rotate>
      <Upload
        listType="picture-card"
        accept=".png,.jpeg,.jpg"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={()=>{
        
        }}
        
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
}

export default ComPostImageUploader;
