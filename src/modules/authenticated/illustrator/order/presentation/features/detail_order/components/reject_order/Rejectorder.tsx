import { Form, Input, message, Typography } from "antd";
import React, { useCallback } from "react";
import SuccessButton from "../../../../../../../../../core/common_components/buttons/SuccessButton";
import useIllustratorDetailOrderHandler from "../../use_illustrator_detail_order_handler";

function Rejectorder() {
  const {isConfirmOrderModalVisible,confirmOrder,changeOrderModalVisibility} = useIllustratorDetailOrderHandler()

  const onFinish = useCallback((values: any) => {
    confirmOrder(false,values.description)
  }, []);
  

  return (
    <div>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <Form layout="vertical" onFinish={onFinish} name="normal_login" className="max-w-md m-auto font-semibold">
          <Form.Item rules={[{ required: true, message: "Alasan penolakan wajib diisi!" }]} className="" label="Alasan Penolakan" name="description">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
          <div className="mx-auto justify-center flex">
            <Form.Item className="mt-3 mb-1 text-center ">
              <SuccessButton htmlType="submit" title="Submit" block rounded />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Rejectorder;
