import { InboxOutlined } from "@ant-design/icons";
import { Typography, Form, Rate, Input, message, Upload } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import useMakeOrderHandler from "./use_make_order_handler";

function MakeOrderPage() {
  const { isLoading, createOrder, navigate,uploadFile } = useMakeOrderHandler();
  const [defaultFileList, setDefaultFileList] = useState([]);

  const handleOnChange = ({ file, fileList, event }: any) => {
    setDefaultFileList(fileList);
  };
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const  beforeUpload=(file:File)=> {
    
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg" || file.type === "application/pdf";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG/JPEG/PDF file!");
        return Upload.LIST_IGNORE
      }
      const isLt2M = file.size / 1024 / 1024 < 10;
      console.log(`${file.size}`);
    
      if (!isLt2M) {
        message.error("File must smaller than 10MB!");
        return Upload.LIST_IGNORE
      }
      return isJpgOrPng && isLt2M; ;
  }
useEffect(() => {
  window.scroll(0, 0);

}, []);

  return (
    <div>
      <div className="max-w-full w-11/12 m-auto text-sm shadow-none">
        <Typography className="text-center my-3 text-black text-2xl font-bold">Formulir Pemesanan</Typography>
        <Form layout="vertical" onFinish={createOrder} name="order_form" className="max-w-md m-auto font-semibold">
          <Form.Item rules={[{required:true, message:"Deskripsi permintaan wajib diisi!"},{max:255, message:"Deskripsi permintaan maksimal berjumlah 255 karakter"}]} className="" label="Deskripsi permintaan" name="req_description">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
          <Form.Item getValueFromEvent={normFile} label="Referensi Gambar" name="file">
            <Dragger 
              className="mt-3" 
              maxCount={1}
              accept=".png,.jpg,.jpeg,.pdf"
              defaultFileList={defaultFileList} 
              customRequest={uploadFile} 
              listType="picture" 
              onChange={handleOnChange}
            >
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
