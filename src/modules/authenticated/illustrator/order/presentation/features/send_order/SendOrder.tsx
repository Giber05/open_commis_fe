import { InboxOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, InputNumber, message, Radio, Typography, Upload, UploadProps } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import ConfigConstants from "../../../../../../../core/constants/config_constants";
import NetworkConstant from "../../../../../../../core/constants/network_constant";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import useSendOrder from "./use_send_order_handler";

const { Dragger } = Upload;

function SendOrder() {
  const { isSendOrderLoading, uploadFile, uploadProgress, sendOrder, uploadedFilePath } = useSendOrder();

  const onFinish = useCallback((values: any) => {
    sendOrder(values);
  }, [uploadedFilePath]);

  const [defaultFileList, setDefaultFileList] = useState([]);

  const handleOnChange = ({ file, fileList, event }: any) => {
    // console.log(file, fileList, event);
    //Using Hooks to update the state to the current filelist
    setDefaultFileList(fileList);
    //filelist - [{uid: "-1",url:'Some url to image'}]
  };
  console.log({ uploadedFilePath });

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
          <Form.Item className="" label="Link Cloud Storage" name="cloud_link">
            <Input className="form-style-blue" />
          </Form.Item>
          <Form.Item className="" label="Deskripsi" name="description">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
          <Form.Item
            required
            rules={[
              () => ({
                validator(rule, value) {
                  if (defaultFileList.length > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject("File wajib diisi");
                },
              }),
            ]}
            className=""
            label="File Gambar"
            name="file"
          >
            <Typography.Text italic className="text-blue-400 font-semibold">
              *Maksimal file yang dapat diupload 1 file
              <br />
            </Typography.Text>
            <Typography.Text italic className="text-blue-400 font-semibold">
              *Jenis File yang dapat di unggah adalah jpg, png, jpeg, zip(tidak mengandung file tipe exe).
              <br />
            </Typography.Text>
            <Typography.Text italic className="text-blue-400 font-semibold">
              *Maksimal gambar yang dapat diupload 25MB
              <br />
            </Typography.Text>
            <Dragger className="mt-3" maxCount={1} accept=".png,.jpg,.jpeg,.zip" defaultFileList={defaultFileList} customRequest={uploadFile} listType="picture" onChange={handleOnChange}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
          </Form.Item>
          <div className="mx-auto justify-center flex">
            <Form.Item name="submissionFile" hidden className="mt-3 mb-1 text-center ">
              <Input className="form-style-blue" value={uploadedFilePath?.path} />
            </Form.Item>
            <Form.Item className="mt-3 mb-1 text-center ">
              <SuccessButton loading={isSendOrderLoading} htmlType="submit" title="Submit" block rounded />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SendOrder;
