import { BankTwoTone, WalletTwoTone, ShopTwoTone } from "@ant-design/icons";
import { Modal, Form, Radio, Space, Typography, Button } from "antd";
import React from "react";
import useConsumerOrderDetailHandler from "../use_consumer_order_detail_handler";


function PaymentMethodModal() {
  const {isPaymentModalVisible, changePaymentModalVisibility}  = useConsumerOrderDetailHandler()
  const handleCancel = () => {
    changePaymentModalVisibility(false);
  };
  return (
    <Modal footer={false} title="Pilih Metode Pembayaran" visible={isPaymentModalVisible} onCancel={handleCancel}>
      <Form layout="vertical" onFinish={(event) => console.log({ event })}>
        <Form.Item name="payment_method" label="Metode Pembayaran">
          <Radio.Group size="large" buttonStyle="solid" className="large-icons text-center ">
            <Radio.Button className="m-2" value="bank">
              <Space>
                <BankTwoTone />
                <Typography>Bank</Typography>
                <Typography.Text
                  style={{
                    fontSize: "10px",
                  }}
                  italic
                  className=" text-gray-400"
                >
                  (BRI, BNI, BCA, dll)
                </Typography.Text>
              </Space>
            </Radio.Button>

            <Radio.Button className="m-2" value="e-wallet">
              <Space>
                <WalletTwoTone />
                <Typography>E-wallet</Typography>
                <Typography.Text
                  style={{
                    fontSize: "10px",
                  }}
                  italic
                  className=" text-gray-400"
                >
                  (OVO, DANA, GoPay, dll)
                </Typography.Text>
              </Space>
            </Radio.Button>
            <Radio.Button className="m-2" value="retail">
              <Space>
                <ShopTwoTone />
                <Typography>Toko Retail</Typography>
                <Typography.Text
                  style={{
                    fontSize: "10px",
                  }}
                  italic
                  className=" text-gray-400"
                >
                  (Indomart, Alfamart, dll)
                </Typography.Text>
              </Space>
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <div className="mx-auto text-center">
            <Button htmlType="submit" type="primary">
              Lanjutkan
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PaymentMethodModal;
