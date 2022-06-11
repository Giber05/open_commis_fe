import { Steps, Collapse, Typography, Empty } from "antd";
import React, { useEffect, useState } from "react";
import { OrderStatus } from "../../../../../../../../../../core/utils/enums";
import useIllustratorDetailOrderHandler from "../../../use_illustrator_detail_order_handler";

const { Panel } = Collapse;
const { Step } = Steps;
function TrackOrderTab() {
  const [currentStep, setCurrentStep] = useState(0);
  const { orderDetail } = useIllustratorDetailOrderHandler();

  useEffect(() => {
    const onChangeOrderStatus = (status: string) => {
      switch (status) {
        case OrderStatus.Created:
          setCurrentStep(1);
          break;
        case OrderStatus.Accepted:
          setCurrentStep(2);
          break;
        case OrderStatus.Denied:
          setCurrentStep(1);
          break;
        case OrderStatus.NotPaid:
          setCurrentStep(2);
          break;
        case OrderStatus.Failed:
          setCurrentStep(2);
          break;
        case OrderStatus.OnWork:
          setCurrentStep(3);
          break;
        case OrderStatus.Sent:
          setCurrentStep(5);
          break;
        case OrderStatus.Finished:
          setCurrentStep(6);
          break;
        default:
          break;
      }
    };
    onChangeOrderStatus(orderDetail?.status!);
  }, [orderDetail?.status]);

  if (orderDetail == null) return <Empty />;
  return (
    <div className="px-3 text-justify">
      <Steps direction="vertical" size="small" current={currentStep}>
        <Step
          title="Order Created"
          description={
            <Collapse ghost bordered={false}>
              <Panel header={<Typography.Text>Pesanan Masuk</Typography.Text>} key="1">
                Terdapat Pesanan yang masuk, segera lakukan konfirmasi pesanan
              </Panel>
            </Collapse>
          }
        />
        {orderDetail?.status !== OrderStatus.Denied ? (
          orderDetail?.status === OrderStatus.Created ? (
            <Step
              title="Waiting Confirmation "
              description={
                <Collapse ghost bordered={false}>
                  <Panel header="Menunggu Konfirmasi Illustrator" key="1">
                    Silahkan lakukan konfirmasi pesanan untuk melanjutkan proses selanjutnya.
                  </Panel>
                </Collapse>
              }
            />
          ) : (
            <Step
              title="Order Accepted "
              description={
                <Collapse ghost bordered={false}>
                  <Panel header="Pesanan Diterima Illustrator" key="1">
                    Pesanan telah anda terima. Lakukan pengerjaan pesanan setelah pesanan dibayar oleh konsumen
                  </Panel>
                </Collapse>
              }
            />
          )
        ) : (
          <Step
            title="Order Denied "
            status="error"
            description={
              <Collapse ghost bordered={false}>
                <Panel header="Pesanan Ditolak Illustrator" key="1">
                  Anda menolak pesanan ini.
                </Panel>
              </Collapse>
            }
          />
        )}
        {orderDetail?.status !== OrderStatus.Failed ? (
          orderDetail?.status !== OrderStatus.NotPaid && orderDetail?.status !== OrderStatus.Accepted ? (
            <Step
              title="Order Paid"
              description={
                <Collapse collapsible={currentStep >= 2 ? "header" : "disabled"} ghost bordered={false}>
                  <Panel header="Pesanan Telah Dibayar" key="1">
                    Pembayaran Konsumen telah diterima OpenCommiss. Segera kerjakan pesanan anda!.
                  </Panel>
                </Collapse>
              }
            />
          ) : (
            <Step
              title="Waiting Payment"
              description={
                <Collapse ghost bordered={false} collapsible={currentStep >= 2 ? "header" : "disabled"}>
                  <Panel header="Menunggu Pembayaran" key="1">
                    Sedang Menunggu pembayaran.
                  </Panel>
                </Collapse>
              }
            />
          )
        ) : (
          <Step
            title="Order Failed"
            status="error"
            description={
              <Collapse ghost bordered={false} collapsible={currentStep >= 2 ? "header" : "disabled"}>
                <Panel header="Pesanan Gagal" key="1">
                  Pesanan digagalkan sebab pesanan gagal dibayar oleh konsumen
                </Panel>
              </Collapse>
            }
          />
        )}
        <Step
          title="On Working"
          description={
            <Collapse ghost bordered={false} collapsible={currentStep >= 3 ? "header" : "disabled"}>
              <Panel header="Pesanan Sedang Dikerjakan" key="1">
                Pesanan sedang dikerjakan oleh illustrator
              </Panel>
            </Collapse>
          }
        />
        <Step
          title="Order Sent"
          description={
            <Collapse ghost bordered={false} collapsible={currentStep >= 4 ? "header" : "disabled"}>
              <Panel header="Pesanan Sudah Dikirim" key="1">
                Pesanan Anda telah berhasil dikirimkan ke konsumen.
              </Panel>
            </Collapse>
          }
        />
        {orderDetail?.status === OrderStatus.Sent ? (
          <Step
            title="Waiting Finish Confirmation"
            description={
              <Collapse ghost bordered={false} collapsible={currentStep >= 5 ? "header" : "disabled"}>
                <Panel header="Menunggu Konfirmasi Pesanan Selesai" key="1">
                  Pesanan Sudah Dikirimkan. Menunggu konfirmasi pesanan selesai dari Konsumen
                </Panel>
              </Collapse>
            }
          />
        ) : (
          <Step
            title="Order Finished"
            description={
              <Collapse ghost bordered={false} collapsible={currentStep >= 5 ? "header" : "disabled"}>
                <Panel header="Pesanan Selesai" key="1">
                  Pesanan Anda telah selesai. Dana akan diteruskan ke Dompet Digital Anda
                </Panel>
              </Collapse>
            }
          />
        )}
      </Steps>
    </div>
  );
}

export default TrackOrderTab;
