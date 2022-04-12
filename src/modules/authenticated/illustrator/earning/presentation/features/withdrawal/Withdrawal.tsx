import { Button, Form, Input, Select, Typography } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";

const { Option } = Select;
function Withdrawal() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Penarikan Saldo</h2>
        <div className="mx-auto text-center">
          <Typography.Text className="font-bold text-base text-cyan-500"> Saldo Anda Sekarang: Rp. 10.000.000</Typography.Text>
        </div>
        <div className="w-11/12 sm:w-5/6 md:w-3/4 xl:w-1/2 m-auto text-center ">
          <Form layout="vertical" className="text-sm font-semibold" name="withdraw-form" onFinish={(values) => console.log("withdraw form values :", values)}>
            <FormItem name="payment_method" label="Metode Penarikan">
              <Select className="form-style-blue text-left" bordered={false} placeholder="Pilih metode pembayaran">
                <Option value="BRI">BRI</Option>
                <Option value="BNI">BNI</Option>
                <Option value="GOPAY">GoPay</Option>
                <Option value="DANA">Dana</Option>
                <Option value="OVO">OVO</Option>
              </Select>
            </FormItem>
            <FormItem name="no_account" label="No. Akun/Rekening">
              <Input className="form-style-blue" placeholder="Masukan nomor akun/rekening" />
            </FormItem>
            <FormItem name="withdraw_amount" label="Jumlah Penarikan">
              <Input className="form-style-blue" placeholder="Masukan jumlah yang akan ditarik" />
            </FormItem>
            <FormItem name="withdraw_button" className="flex text-center align-middle items-center mx-auto justify-center">
              <div className="mx-auto my-3 flex justify-center">
                <SuccessButton block width="w-40" rounded title="Submit" htmlType="submit" />
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Withdrawal;
