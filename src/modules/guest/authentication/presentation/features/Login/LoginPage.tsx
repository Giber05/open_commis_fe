import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Col, Typography, Row, Image, Radio, Alert, Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../../../core/common_components/buttons/PrimaryButton";
import AssetConstants from "../../../../../../core/constants/asset_constants";
import LoginContainer from "./components/LoginContainer";
import styles from "./SignInPage.module.css";
import useLoginHandler from "./use_login_handler";

function LoginPage() {
  const { isLoadingUser, onFinish, error, clearError } = useLoginHandler();
  const loginFailed = () => {
    if (error != "") {
      clearError();
      return Promise.reject(error);
    }
    return Promise.resolve();
  };

  return (
    <LoginContainer>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <div className="text-center mx-auto">
          <Image preview={false} className="text-center mx-auto flex h-36  sm:h-44 md:h-52  lg:h-60 xl:h-64 " src={`${AssetConstants.iconURL}/logo/open_commiss.png`}></Image>
        </div>
        <Typography className="text-sm text-center ">Comission Post adalah sebuah aplikasi yang mempertemukan antara para illustrator digital dan konsumen</Typography>
        <Form layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} name="normal_login" className="max-w-md m-auto font-semibold ">
          <Form.Item name="role" label="Jenis User" className="mt-6 mb-3 " rules={[{ required: true, message: "Pilih salah satu jenis user!" }]}>
            <Radio.Group>
              <Radio value="illustrator">Ilustrator</Radio>
              <Radio value="consumer">Konsumen</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Email"
            validateFirst={true}
            rules={[
              { required: true, message: "Email wajib diisi" },
              { type: "email", message: "Masukan email yang valid" },
              () => ({
                validator(rule, value) {
                  if (error == "") {
                    return Promise.resolve();
                  }
                  return Promise.reject(error);
                },
              }),
            ]}
            name="email"
          >
            <Input className="mt-2 form-style" prefix={<UserOutlined />} placeholder="Masukan email anda" />
          </Form.Item>
          <Form.Item
            className="mb-0"
            label="Password"
            rules={[
              {
                required: true,
                message: "Password wajib diisi!",
              },
              {
                validator: (_, __) => loginFailed(),
              },
            ]}
            name="password"
          >
            <Input.Password className="mt-2 form-style" prefix={<LockOutlined />} placeholder="Masukan password anda" />
          </Form.Item>
          <Form.Item>
            <div className={styles.spaceBetween}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="#">
                Forgot password
              </a>
            </div>
          </Form.Item>
          <Form.Item className="mt-3 mb-1 text-center ">
            <PrimaryButton loading={isLoadingUser} title="Masuk" htmlType="submit" additionalClass="w-full comic-shadow-btn" rounded />
          </Form.Item>
          <Form.Item className="text-center font-bold">
            <span>
              Anda belum memiliki akun? Register{" "}
              <Link className="text-blue-400" to="/auth/registration">
                Disini!
              </Link>
            </span>
          </Form.Item>
          <Form.Item className="text-center font-bold">
            <Link className="text-blue-400 text-center text-base md:text-lg" to="/">
              Kembali Ke Beranda
            </Link>
          </Form.Item>
        </Form>
      </div>
    </LoginContainer>
  );
}

export default LoginPage;
