import { InboxOutlined } from "@ant-design/icons";
import { Form, Input, Typography } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useState } from "react";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";
import useSendOrderHandler from "../use_send_order_handler";

function TabFormUsingFile() {
  const { isSendOrderLoading, uploadFile, sendOrder, uploadedFilePath } = useSendOrderHandler();

  const [defaultFileList, setDefaultFileList] = useState([]);

  const handleOnChange = ({ file, fileList, event }: any) => {
    setDefaultFileList(fileList);
  };
  return (
    <div>
      <Form layout="vertical" onFinish={sendOrder} name="normal_login" className="max-w-md m-auto font-semibold">
        <Form.Item
          required
          rules={[
            () => ({
              validator(rule, value) {
                if (defaultFileList.length > 0 && uploadedFilePath != null) {
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
        <Form.Item className="" label="Deskripsi" name="description">
          <Input.TextArea autoSize={true} className="form-style-blue" />
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
  );
}

export default TabFormUsingFile;
