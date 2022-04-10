// import PrimaryButton from '@root/core/common_components/buttons/PrimaryButton';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Radio, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../../../core/common_components/buttons/PrimaryButton";
import SuccessButton from "../../../../../../core/common_components/buttons/SuccessButton";
import ImageUploader from "../../../../../../core/common_components/ImageUploader/ImageUploader";
import LoginContainer from "../Login/components/LoginContainer";

function RegistrationPage() {
  const onFinish = (values: any) => {
    console.log("Registration form Values: ",values);
  };
  return (
    <LoginContainer>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">OpenCommiss</h2>
        <Typography className="text-center my-3 text-black text-lg font-bold">Registrasi Akun</Typography>

        <Form layout="vertical" onFinish={onFinish} name="normal_login" className="max-w-md m-auto ">
          {/* <Form.Item name="profile_picture" label="Foto Akun" className="mt-6 mb-3 " rules={[{ required: true, message: "Tambahkan foto profil anda" }]}>
            <ImageUploader />
          </Form.Item> */}
          <Form.Item name="role" label="Jenis User" className="mt-6 mb-3 " rules={[{ required: true, message: "Pilih salah satu jenis user!" }]}>
            <Radio.Group>
              <Radio value="ILUSTRATOR">Ilustrator</Radio>
              <Radio value="CONSUMER">Konsumen</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="mb-0" label="Nama" rules={[{ required: true, message: "Nama wajib diisi!" }]} name="name">
            <Input className="mt-2" />
          </Form.Item>
          <Form.Item className="mb-0" label="Username" rules={[{ required: true, message: "Password wajib diisi!" }]} name="username">
            <Input className="mt-2" />
          </Form.Item>
          <Form.Item
            label="Email"
            rules={[
              { required: true, message: "Email wajib diisi" },
              { type: "email", message: "Masukan email yang valid" },
            ]}
            name="email"
          >
            <Input className="mt-2" />
          </Form.Item>
          <Form.Item className="mb-0" label="Password" rules={[{ required: true, message: "Password wajib diisi!" }]} name="password">
            <Input.Password className="mt-2" />
          </Form.Item>
          <Form.Item className="mb-0" label="No. Telephone" rules={[{ required: true, message: "No. Telephone wajib diisi!" }]} name="phone_number">
            <InputNumber className="mt-2" />
          </Form.Item>

            <div className="mx-auto justify-center flex">

          <Form.Item className="mt-3 mb-1 text-center ">
            <SuccessButton htmlType="submit" title="Register akun" block />
          </Form.Item>
            </div>
          <Form.Item className="text-center font-bold">
            <span>
              Kembali ke Login Page? Login{" "}
              <Link className="text-blue-400" to="/auth/login">
                Disini!
              </Link>
            </span>
          </Form.Item>
        </Form>
      </div>
    </LoginContainer>
  );
}

export default RegistrationPage;
