import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Radio } from "antd";
import React from "react";
import PrimaryButton from "../../../../../../core/common_components/buttons/PrimaryButton";
import useLoginAdminHandler from "./use_login_admin_handler";

function LoginAdminPage() {
  const {isLoadingUser,onFinish} = useLoginAdminHandler()
  const error = "";
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center w-screen h-screen relative flex flex-col justify-between ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-sm w-96">
          <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
            <div className="bg-gradient-to-tr from-sky-500 to-sky-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-center shadow-lg-light-blue undefined">
              <h1 className="text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2">LOGIN</h1>
            </div>
            <Form size="large" layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} name="normal_login" className="max-w-md m-auto ">
              
              <Form.Item
                label="Username"
                validateFirst={true}
                rules={[
                  { required: true, message: "Username wajib diisi" },
                  () => ({
                    validator(rule, value) {
                      if (error == "") {
                        return Promise.resolve();
                      }
                      return Promise.reject(error);
                    },
                  }),
                ]}
                name="username"
              >
                <Input  className="mt-2 rounded-xl shadow-sm" prefix={<UserOutlined />} placeholder="Masukan email anda" />
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
                    // validator: (_, __) => loginFailed(),
                  },
                ]}
                name="password"
              >
                <Input.Password className="mt-2 rounded-xl shadow-sm" prefix={<LockOutlined />} placeholder="Masukan password anda" />
              </Form.Item>
              <Form.Item>
                <div className="flex justify-between">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </div>
              </Form.Item>
              <Form.Item className="mt-3 mb-1 text-center ">
                <PrimaryButton title="Masuk" htmlType="submit" additionalClass="w-full rounded-xl shadow-md" />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdminPage;
