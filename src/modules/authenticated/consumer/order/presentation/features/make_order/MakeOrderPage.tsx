import { InboxOutlined } from "@ant-design/icons";
import { Typography, Form, Rate, Input, message } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";
import { useNavigate } from "react-router-dom";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import useMakeOrderHandler from "./use_make_order_handler";

function MakeOrderPage() {
  const { isLoading, createOrder, navigate } = useMakeOrderHandler();
  const onFinish = (values: any) => {
    console.log("Ordering form Values: ", values);
  };
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div>
      <div className="max-w-full w-11/12 m-auto text-sm shadow-none">
        <Typography className="text-center my-3 text-black text-2xl font-bold">Formulir Pemesanan</Typography>
        <Form layout="vertical" onFinish={createOrder} name="order_form" className="max-w-md m-auto font-semibold">
          <Form.Item rules={[{required:true, message:"Deskripsi permintaan wajib diisi!"}]} className="" label="Deskripsi permintaan" name="req_description">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
          <Form.Item getValueFromEvent={normFile} label="Referensi Gambar" name="file">
            <Dragger className="mt-3" maxCount={1} listType="picture" {...props}>
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
              <SuccessButton loading={isLoading} htmlType="submit" title="Submit" block rounded />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default MakeOrderPage;
