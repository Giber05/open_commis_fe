import { Button, Form, Input, InputNumber, Select, Typography } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React, { useEffect } from "react";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import useEarningHandler from "../balance/use_earning_handler";
import useWithdrawalHandler from "./use_withdrawal_handler";

const { Option } = Select;
function WithdrawalPage() {
  const validateMessages = {
    required: "${label} wajib diisi!",
    types: {
      email: "${label} bukan inputan yang valid!",
      number: "${label} bukan inputan yang valid!",
    },
    number: {
      range: "${label} harus >= ${min} atau <= ${max}",
    },
  };

  const { illustratorsBalance } = useEarningHandler();
  const { isLoadingBalance, withdrawBalance, destinationCode, getDestinationCode, isDestinationCodeLoading } = useWithdrawalHandler();

  useEffect(() => {
    getDestinationCode();
  }, []);
  
  const balance = UtilMethods.getIndonesianCurrencyFormat(illustratorsBalance?.balance!);
  if (isDestinationCodeLoading) return <CircularLoadingIndicator />;
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Penarikan Saldo</h2>
        <div className="mx-auto text-center">
          <Typography.Text className="font-bold text-base text-cyan-500"> Saldo Anda Sekarang: Rp. {balance}</Typography.Text>
        </div>
        <div className="w-11/12 sm:w-5/6 md:w-3/4 xl:w-1/2 m-auto text-center ">
          <Form layout="vertical" className="text-sm font-semibold" name="withdraw-form" validateMessages={validateMessages} onFinish={withdrawBalance}>
            <FormItem name="destination" label="Metode Penarikan" rules={[{ required: true }]}>
              <Select
                className="form-style-blue text-left"
                bordered={false}
                showSearch
                placeholder="Pilih metode pembayaran"
                optionFilterProp="children"
                filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {destinationCode.map((destination) => (
                  <Option value={destination.code}>{destination.name}</Option>
                ))}
              </Select>
            </FormItem>
            <FormItem name="account_number" label="No. Akun/Rekening" rules={[{ required: true }]}>
              <Input className="form-style-blue" placeholder="Masukan nomor akun/rekening" />
            </FormItem>
            <FormItem rules={[{ type: "number", min: 50000, max: illustratorsBalance?.balance, required: true }]} name="amount" label="Jumlah Penarikan">
              <InputNumber
                style={{
                  width: "100%",
                }}
                className="form-style-blue"
                placeholder="Masukan jumlah yang akan ditarik"
                prefix="Rp."
              />
            </FormItem>
            <FormItem name="withdraw_button" className="flex text-center align-middle items-center mx-auto justify-center">
              <div className="mx-auto my-3 flex justify-center">
                <SuccessButton loading={isLoadingBalance} block width="w-40" rounded title="Submit" htmlType="submit" />
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default WithdrawalPage;
