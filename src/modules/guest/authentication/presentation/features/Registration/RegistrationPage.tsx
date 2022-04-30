import { LockOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, InputNumber, message, Radio, Typography, Upload } from "antd";
import { RcFile } from "antd/lib/upload";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../../../core/common_components/buttons/PrimaryButton";
import SuccessButton from "../../../../../../core/common_components/buttons/SuccessButton";
import ImageUploader from "../../../../../../core/common_components/image_uploader/ImageUploader";
import ConfigConstants from "../../../../../../core/constants/config_constants";
import LoginContainer from "../Login/components/LoginContainer";
import RegistrationContainer from "./components/RegistrationContainer";
import useRegistrationHandler from "./use_registration_handler";

function RegistrationPage() {
  const {isLoadingUser, onFormSubmitted,resendVerifEmail} = useRegistrationHandler()
  const onFinish = (values: any) => {
    console.log("Registration form Values: ", values);
  };

  const getFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const beforeUpload = (file: RcFile) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return;
    }
    return false;
  };
  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
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
    <RegistrationContainer>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">OpenCommiss</h2>
        <Typography className="text-center my-3 text-black text-lg font-bold">Registrasi Akun</Typography>

        <Form layout="vertical" onFinish={onFormSubmitted} name="registration_form" className="max-w-md m-auto font-semibold">
          <Form.Item name="profilePicture"  label="Foto Profile" getValueFromEvent={getFile}>
            <Upload onPreview={onPreview} className="flex justify-center items-center" name="profile_picture" listType="picture-card" accept=".png,.jpg,.jpeg" beforeUpload={beforeUpload} maxCount={1}>
              <Button icon={<UploadOutlined />} />
            </Upload>
          </Form.Item>
          <Form.Item name="role" label="Jenis User" className="mt-6 mb-3" rules={[{ required: true, message: "Pilih salah satu jenis user!" }]}>
            <Radio.Group>
              <Radio value="illustrator">Ilustrator</Radio>
              <Radio value="consumer">Konsumen</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="" label="Nama" rules={[{ required: true, message: "Nama wajib diisi!" }]} name="name">
            <Input className="form-style" />
          </Form.Item>
          <Form.Item className="" label="Username" rules={[{ required: true, message: "Password wajib diisi!" }]} name="username">
            <Input className="form-style" />
          </Form.Item>
          <Form.Item
            label="Email"
            rules={[
              { required: true, message: "Email wajib diisi" },
              { type: "email", message: "Masukan email yang valid" },
            ]}
            name="email"
          >
            <Input className="form-style" />
          </Form.Item>
          <Form.Item className="" label="Password" rules={[{ required: true, message: "Password wajib diisi!" }]} name="password">
            <Input.Password className="form-style " />
          </Form.Item>
          <Form.Item className="" label="No. Telephone" rules={[{ required: true, message: "No. Telephone wajib diisi!" }]} name="phone">
            <Input className="form-style w-full " />
          </Form.Item>

          <div className="mx-auto justify-center flex">
            <Form.Item className="mt-3 mb-1 text-center ">
              <SuccessButton  loading={isLoadingUser} htmlType="submit" title="Register akun" block />
            </Form.Item>
          </div>
          <Form.Item className="text-center font-bold ">
            <span>
              Kembali ke Login Page? Login{" "}
              <Link className="text-blue-400" to="/auth/login">
                Disini!
              </Link>
            </span>
          </Form.Item>
        </Form>
        <Col>
          <Typography className="text-gray font-semibold text-center">{ConfigConstants.copyright}</Typography>
        </Col>
      </div>
    </RegistrationContainer>
  );
}

export default RegistrationPage;
