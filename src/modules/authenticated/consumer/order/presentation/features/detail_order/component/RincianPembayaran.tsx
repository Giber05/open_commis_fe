import { Card, Typography, Divider, Row, Col } from 'antd';
import React from 'react'

function RincianPembayaran() {
  return (
  <Card
      className="comic-shadow sm:shrink-0 mt-5"
    //  loading={isLoadingComPosts}
      style={{
        maxWidth:"580px",
        padding: "0",
      }}
    >
     <Typography className='text-center text-lg sm:text-lg lg:text-2xl font-bold'>Rincian Pembayaran</Typography>
      <Divider className="my-2" />
       <Row justify='space-between'>
            <Col className="text-base leading-10">
                <Col>
                    <Typography.Text className="text-sm  sm:text-sm lg:text-lg pr-5">Tanggal Pembayaran</Typography.Text>
                </Col>
                <Col>
                    <Typography.Text className="text-sm  sm:text-sm lg:text-lg ">Metode Pembayaran</Typography.Text>
                </Col>
                <Col>
                    <Typography.Text className="text-sm  sm:text-sm lg:text-lg ">Total Pembayaran</Typography.Text>
                </Col>
            </Col>
            <Col className="text-base leading-10" >
                <Col>
                    <Typography.Text className="text-sm mb-1 sm:text-sm lg:text-lg text-right font-bold">21 Desember 2022</Typography.Text>
                </Col>
                <Col>
                    <Typography.Text className="text-sm mb-1 sm:text-sm lg:text-lg font-bold text-right"> E-Wallet </Typography.Text>
                </Col>
                <Col>
                    <Typography.Text className="text-sm mb-1 sm:text-sm lg:text-lg font-bold text-right"> Rp100.000</Typography.Text>
                </Col>
            </Col>
      </Row>
    </Card>
  );
}


export default RincianPembayaran