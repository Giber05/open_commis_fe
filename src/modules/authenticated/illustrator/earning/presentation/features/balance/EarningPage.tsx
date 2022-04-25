import { Card, List, Typography } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import FullWidthCorousel from "../../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import useEarningHandler from "./use_earning_handler";

function EarningPage() {
  const data = ["Minimal saldo untuk melakukan penarikan Rp. 50.000", "Penarikan yang dilakukan terjadi potongan Rp 5.500 sekali penarikan"];
  const {getIllustratorsBalance,illustratorsBalance,isLoadingBalance} = useEarningHandler()

  useEffect(() => {
    getIllustratorsBalance()
  }, []);
  
  return (
    <div className="bg-white">
      <FullWidthCorousel />
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Total Pendapatan Anda</h2>
        <div className="h-1/4">
          <Card title="Saldo Anda Sekarang" className="w-full form-style-blue min-h-full text-center">
            <Typography.Text className="font-bold text-lg">Rp. {illustratorsBalance?.balance}</Typography.Text>
          </Card>
        </div>
        <div className="mx-auto my-4 flex justify-center">
          <Link to="/manage/earning/withdraw">
            <SuccessButton rounded block title="Lakukan Penarikan" />
          </Link>
        </div>
        <div className="mt-4 ">
          <Typography.Text className=" text-gray-400 font-semibold">Syarat dan ketentuan penarikan: </Typography.Text>
          <List
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item
                style={{
                  border: "0",
                  padding: "0",
                }}
              >
                <Typography.Text className="text-gray-400">{`${index + 1}. ${item}`}</Typography.Text>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default EarningPage;
