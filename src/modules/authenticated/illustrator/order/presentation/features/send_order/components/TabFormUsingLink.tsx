import { Form, Input } from "antd";
import React from "react";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";
import useSendOrderHandler from "../use_send_order_handler";

function TabFormUsingLink() {
  const { sendOrder, isSendOrderLoading } = useSendOrderHandler();
  return (
    <div>
      <Form layout="vertical" onFinish={sendOrder} name="normal_login" className="max-w-md m-auto font-semibold">
        <Form.Item
          rules={[
            {
              type: "url",
              message: "Link URL tidak valid",
            },
            {
              required:true,
              message:"Link cloud storage wajib diisi!"
            }
          ]}
          label="Link Cloud Storage"
          name="cloud_link"
        >
          <Input className="form-style-blue" />
        </Form.Item>
        <Form.Item className="" label="Deskripsi" name="description">
          <Input.TextArea autoSize={true} className="form-style-blue" />
        </Form.Item>

        <div className="mx-auto justify-center flex">
          <Form.Item className="mt-3 mb-1 text-center ">
            <SuccessButton loading={isSendOrderLoading} htmlType="submit" title="Submit" block rounded />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default TabFormUsingLink;
