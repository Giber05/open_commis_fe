import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Image, Col, Typography, Row, Radio, Alert } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../../../core/common_components/buttons/PrimaryButton";
import LoginContainer from "./components/LoginContainer";
import styles from "./SignInPage.module.css";
import useLoginHandler from "./use_login_handler";

function LoginPage() {
  const { isLoadingUser, onFinish, error, clearError } = useLoginHandler();
  const handleSubmit = () => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submit form =>", e.currentTarget.value);
  };
  const loginFailed = (value:any) => {
    if (error != "") {
      clearError()
      return Promise.reject(error);
    }
    return Promise.resolve();
  };
  console.log("LOGIN");
  
  return (
    <LoginContainer>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <Typography className="text-center my-3 text-black text-lg font-bold">OpenCommiss</Typography>
        <Typography className="text-sm text-center">Comission Post adalah sebuah aplikasi yang mempertemukan antara para illustrator digital dan konsumen</Typography>
        <Form layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} name="normal_login" className="max-w-md m-auto ">
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
            <Input className="mt-2" prefix={<UserOutlined />} placeholder="Masukan email anda" />
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
                validator: (_, value) => loginFailed(value),
              }
            ]}
            name="password"
          >
            <Input.Password className="mt-2" prefix={<LockOutlined />} placeholder="Masukan password anda" />
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
            <PrimaryButton loading={isLoadingUser} title="Masuk" htmlType="submit" additionalClass="w-full" />
          </Form.Item>
          <Form.Item className="text-center font-bold">
            <span>
              Anda belum memiliki akun? Register{" "}
              <Link className="text-blue-400" to="/auth/registration">
                Disini!
              </Link>
            </span>
          </Form.Item>
        </Form>
      </div>
    </LoginContainer>
  );
}

export default LoginPage;
