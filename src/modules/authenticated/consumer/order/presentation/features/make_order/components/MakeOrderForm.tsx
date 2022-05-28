import { InboxOutlined } from "@ant-design/icons";
import { Typography, Form, Input, message, Upload, Card, Button } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useState } from "react";
import DangerButton from "../../../../../../../../core/common_components/buttons/DangerButton";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";
import { isLoading } from "../../../../../../illustrator/manage_compost/presentation/reducers/illustrators_compost_slice";
import useMakeOrderHandler from "../use_make_order_handler";

function MakeOrderForm() {
  const { isLoading, createOrder, navigate, uploadFile } = useMakeOrderHandler();
  const [defaultFileList, setDefaultFileList] = useState([]);

  const handleOnChange = ({ file, fileList, event }: any) => {
    setDefaultFileList(fileList);
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className="flex justify-center">
      <div className="comic-shadow py-4 px-2 w-full">
        <Form layout="vertical" onFinish={createOrder} name="order_form" className="max-w-md m-auto font-semibold ">
          <Form.Item
            rules={[
              { required: true, message: "Deskripsi permintaan wajib diisi!" },
              { max: 255, message: "Deskripsi permintaan maksimal berjumlah 255 karakter" },
            ]}
            className=""
            label="Deskripsi permintaan"
            name="req_description"
          >
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
          <Form.Item getValueFromEvent={normFile} label="Referensi Gambar" name="file">
            <Dragger className="mt-3" maxCount={1} accept=".png,.jpg,.jpeg,.pdf" defaultFileList={defaultFileList} customRequest={uploadFile} listType="picture" onChange={handleOnChange}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-hint">Klik atau seret file ke area ini untuk mengunggah file</p>
            </Dragger>
          </Form.Item>
          <Typography.Text italic className="text-blue-400 font-semibold">
            *Maksimal file yang dapat diupload 1 file
            <br />
          </Typography.Text>
          <Typography.Text italic className="text-blue-400 font-semibold">
            *Jenis File yang dapat di unggah adalah jpg, png, jpeg, pdf.
            <br />
          </Typography.Text>
          <Typography.Text italic className="text-blue-400 font-semibold">
            *Maksimal gambar yang dapat diupload 10MB
            <br />
          </Typography.Text>
          <div className="mx-auto justify-center flex">
            <div className="mt-3 mb-1 mr-3">
              <DangerButton
                onClick={() => {
                  navigate(-1);
                }}
                title="Batal"
                block
                rounded
              />
            </div>
            <Form.Item className="mt-3 mb-1">
              <div className={`sm:w-80 md:w-40 lg:w-72 xl:w-80`}>
                <Button block className={`comic-shadow-btn bg-[#00782C] text-white hover:text-white hover:bg-[#00782C] hover:opacity-75 hover:border-green-600 rounded-full`} htmlType="submit" loading={isLoading}>
                  Buat Pesanan
                </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default MakeOrderForm;
