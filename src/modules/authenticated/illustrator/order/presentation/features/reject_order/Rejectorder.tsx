import { Form, Input, message, Typography } from 'antd';
import React from 'react'
import SuccessButton from '../../../../../../../core/common_components/buttons/SuccessButton';

function Rejectorder() {
   const onFinish = (values: any) => {
    console.log("Registration form Values: ", values);
  };
  const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info:any) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e:any) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
  return (
     <div>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <Typography className="text-center my-3 text-black text-2xl font-bold">Pengiriman</Typography>
        <Form layout="vertical" onFinish={onFinish} name="normal_login" className="max-w-md m-auto font-semibold">
          <Form.Item className="" label="Alasan Penolakan"  name="description">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
        </Form>
          <div className="mx-auto justify-center flex">
            <Form.Item className="mt-3 mb-1 text-center ">
              <SuccessButton htmlType="submit" title="Submit" block rounded/>
            </Form.Item>
          </div>
      </div>
    </div>
  )
}

export default Rejectorder