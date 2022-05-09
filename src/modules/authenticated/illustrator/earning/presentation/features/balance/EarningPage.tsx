import { Card, Col, List, Row, Table, Tag, Typography } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DisabledButton from "../../../../../../../core/common_components/buttons/DisabledButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import useEarningHandler from "./use_earning_handler";

function EarningPage() {
  const data = ["Minimal saldo untuk melakukan penarikan Rp. 50.000", "Penarikan yang dilakukan terjadi potongan Rp 5.500 sekali penarikan"];
  const { getIllustratorsBalance, illustratorsBalance, isLoadingBalance, getWithdrawalHistory, isWithdrawalHistoryLoading, withdrawalHistory } = useEarningHandler();

  useEffect(() => {
    getIllustratorsBalance();
  }, []);
  useEffect(() => {
    getWithdrawalHistory();
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Total Pendapatan Anda</h2>
        <div className="h-1/4">
          <Card loading={isLoadingBalance} title="Saldo Anda Sekarang" className="w-full form-style-blue min-h-full text-center">
            <Typography.Text className="font-bold text-lg">Rp. {illustratorsBalance?.balance}</Typography.Text>
          </Card>
        </div>
        <div className="mx-auto my-4 flex justify-center">
          {illustratorsBalance?.balance! >= 50000 ? (
            <Link to="/manage/earning/withdraw">
              <SuccessButton rounded block title="Lakukan Penarikan" />
            </Link>
          ) : (
            <DisabledButton title="Lakukan Penarikan" />
          )}
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
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center my-5">Riwayat Penarikan</h2>

        <div className="comic-shadow p-3 rounded-xl my-5">
          <Table key="id" loading={isWithdrawalHistoryLoading} dataSource={withdrawalHistory} scroll={{ x: "80vw" }} size="middle">
            <Column
              title="Tanggal Penarikan"
              render={(text, record: any) => {
                let withdrawDate = UtilMethods.getIndonesianFormatDate(record.createdAt);
                return <Typography.Text>{withdrawDate}</Typography.Text>;
              }}
            />
            <Column title="Jumlah penarikan" render={(text, record: any) => <Typography.Text>Rp. {record.amount}</Typography.Text>} />
            <Column
              title="No. Tujuan"
              render={(text, record: any) => {
                return (
                  <Row>
                    <Col>
                      <Tag>{record.destination}</Tag>
                    </Col>
                    <Col>
                      <Typography.Text>{record.accountNumber}</Typography.Text>
                    </Col>
                  </Row>
                );
              }}
            />
            <Column
              title="Status"
              render={(text, record: any) => {
                const withdrawStatusColor = UtilMethods.matchWithdrawStatusColor(record.status);
                const withdrawStatus = UtilMethods.translateWithdrawStatus(record.status);

                return <Tag color={withdrawStatusColor}>{withdrawStatus}</Tag>;
              }}
            />
          </Table>
        </div>
      </div>
    </div>
  );
}

export default EarningPage;
