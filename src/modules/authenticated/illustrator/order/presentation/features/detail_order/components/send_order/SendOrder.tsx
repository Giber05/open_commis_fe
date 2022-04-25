import { InboxOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, InputNumber, message, Radio, Typography, Upload } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import SuccessButton from '../../../../../../../../../core/common_components/buttons/SuccessButton'
import ConfigConstants from '../../../../../../../../../core/constants/config_constants'
import NetworkConstant from '../../../../../../../../../core/constants/network_constant'

const { Dragger } = Upload;

function SendOrder() {
    const onFinish = (values: any) => {
    console.log("Registration form Values: ", values);
  };
  const props = {
  name: 'file',
  multiple: true,
  action: NetworkConstant.baseUrl+"/orders/submission/upload",
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
          <Form.Item className="" label="Link Cloud Storage" name="link">
            <Input className="form-style-blue" />
          </Form.Item>
          <Form.Item className="" label="Deskripsi"  name="description">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
          <Form.Item className='' label="File Gambar" name="file">
            <Typography.Text italic className="text-blue-400 font-semibold">
                *Maksimal file yang dapat diupload 1 file
                <br/>
              </Typography.Text>
            <Typography.Text italic className="text-blue-400 font-semibold">
                *Jenis File yang dapat di unggah adalah jpg, png, jpeg, zip(tidak mengandung file tipe exe).
                <br/>
            </Typography.Text>
            <Typography.Text italic className="text-blue-400 font-semibold">
                *Maksimal gambar yang dapat diupload 25MB
                <br/>
              </Typography.Text>
            <Dragger className='mt-3' maxCount={1} {...props}>
            <p className="ant-upload-drag-icon">
            <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
            </p>
            </Dragger>
          </Form.Item>
          <div className="mx-auto justify-center flex">
            <Form.Item className="mt-3 mb-1 text-center ">
              <SuccessButton htmlType="submit" title="Submit" block rounded />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SendOrder