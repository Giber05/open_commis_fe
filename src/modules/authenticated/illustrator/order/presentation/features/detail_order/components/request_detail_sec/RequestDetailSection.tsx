import { DownloadOutlined, FileOutlined, FilePdfOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography, Image } from "antd";
import React from "react";
import { OrderDetailModel } from "../../../../../../../../common/order/data/models/order_detail_model";
import useIllustratorDetailOrderHandler from "../../use_illustrator_detail_order_handler";

type RequestDetailProps = {
  detail: OrderDetailModel;
};
function RequestDetailSection({ detail }: RequestDetailProps) {
  const { orderDetail, isLoading } = useIllustratorDetailOrderHandler();

  return (
    <Card title="Detail Permintaan Pesanan" className="comic-shadow rounded-xl">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <div className="text-center">
            <Typography.Text className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg  font-bold">Deskripsi pesanan yang diminta</Typography.Text>
          </div>
          <div className="text-justify mt-2">
            <Typography.Text className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg  ">{detail?.requestDetail}</Typography.Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <div className="text-center mt-5">
            {detail?.referenceImage !== null ? (
              detail?.referenceImage!.includes(".pdf") == true ? (
                <div className="mt-6">
                  <a href={detail?.referenceImage!} target="_blank">
                    <div>
                      <FilePdfOutlined style={{color:"red"}} /> PDF
                      <Col> <DownloadOutlined/> Download File Referensi Gambar</Col>
                    </div>
                  </a>
                </div>
              ) : (
                <div>
                  <Col>
                    <Image src={detail?.referenceImage!} className="max-h-52 md:max-h-64 lg:max-h-72" />
                  </Col>
                  <Col>
                    <Typography.Text type="secondary" italic className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg  ">
                      Referensi Gambar
                    </Typography.Text>
                  </Col>
                </div>
              )
            ) : (
              <div className="mt-6">
                <Typography.Text type="warning" className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg italic ">Konsumen tidak melampirkan gambar referensi</Typography.Text>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default RequestDetailSection;
