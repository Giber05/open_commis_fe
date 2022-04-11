import { CheckCircleFilled, FacebookFilled, InstagramOutlined, ShoppingOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Avatar, Col, Popconfirm, Divider, Image, Rate, Row, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import InfoButton from "../../../../../../../core/common_components/buttons/InfoButton";
import PortofolioContainer from "./components/PortofolioContainer";

const imageUrl = [
  {
    title: "Commission 1",
    price: 50000,
    rate: 3,
    src: "https://obs.line-scdn.net/0hl0gZ0aa8Mx9aIySVR3xMSGJ1P25pRSkWeEMofyx3bC0iD30bZ0VgfHZwPjN-FnQbekApfSwgaHtwFCdAbg/w644",
  },
  {
    title: "Commission 2",
    price: 60000,
    rate: 5,
    src: "https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg",
  },
  {
    title: "Commission 3",
    price: 40000,
    rate: 4,
    src: "https://pbs.twimg.com/media/FIBlp9FX0AINnsO.jpg:large",
  },
  {
    title: "Commission 4",
    price: 50000,
    rate: 2,
    src: "https://kpopping.com/documents/6c/3/211226-IVE-Leeseo-documents-2.jpeg",
  },
  {
    title: "Commission 5",
    price: 50000,
    rate: 2,
    src: "https://i.pinimg.com/originals/9a/84/80/9a8480513fca9ed7952ea4ee5724bca9.jpg",
  },
];

function Portofolio() {
  return (
    <div className="flex flex-col m-auto p-auto max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Profil</h2>
      <Row justify="space-between">
        <Col>
          <Popconfirm
            title="Tutup commission post ini?"
            onCancel={() => {
              return;
            }}
            onConfirm={() => {
              return;
            }}
          >
            <DangerButton title="CLOSE" block />
          </Popconfirm>
        </Col>
        <Col>
          <Link to="/manage/manage-portofolio/edit">
            <InfoButton title="Edit" block />
          </Link>
        </Col>
      </Row>
      <div className="mx-auto my-5">
        <Avatar
          size={{ xs: 72, sm: 84, md: 92, lg: 100, xl: 120, xxl: 132 }}
          src="https://1.bp.blogspot.com/-Ap7aNSKUVs0/X2XIZvC_MJI/AAAAAAAANOE/ohlQo_0pLxAaFGjs2PYUkRf-GHH9o1xaQCLcBGAsYHQ/s1600/05a7d3e123774a0eb6c6f1dbe09480b1%2B%25281%2529.jpg"
        />
      </div>
      <div className="mx-auto text-center">
        <Typography.Title level={2}>
          Kim Jisoo <CheckCircleFilled style={{ color: "#1890ff" }} />
        </Typography.Title>
        <div className="border-green-500  bg-green-500 rounded-full text-center">
          <Typography.Title
            level={3}
            italic
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Tersedia
          </Typography.Title>
        </div>
        <Row>
          <Space>
            <ShoppingOutlined className="text-xl" />
            <Typography.Title level={4}>Transaksi Berhasil:</Typography.Title>
            <Typography.Title level={4}>100 Pesanan</Typography.Title>
          </Space>
        </Row>
      </div>
      <div className="my-5">
        <Row justify="space-between" className="text-center">
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <FacebookFilled className="text-xl" />
              <Typography.Title level={4}>Kim Jisoo</Typography.Title>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <TwitterOutlined className="text-xl" />
              <Typography.Title level={4}>Kim Jisoo</Typography.Title>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <InstagramOutlined className="text-xl" />
              <Typography.Title level={4}>Kim Jisoo</Typography.Title>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <WhatsAppOutlined className="text-xl" />
              <Typography.Title level={4}>08xxxxxxxxx </Typography.Title>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="mx-auto sm:w-4/5 md:w-2/3 lg:1/2 my-5">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Tentang</h2>
        <Typography.Title level={5} className="text-center">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
        </Typography.Title>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Karya Seni Ilustrator</h2>

      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {imageUrl.map((e) => (
            <div className="inline-block px-3 content-center">
              <div className="comic-shadow-btn  max-w-56 max-h-52  flex items-center max-w-xs overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out">
                <Image
                  src={e.src}
                  className="align-middle object-contain"
                  style={{
                    minHeight: "208px",
                    minWidth: "250px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Open Commission</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {imageUrl.map((e) => (
            <div className="inline-block p-3 content-center">
              <div className="comic-shadow-btn w-56 p-3 flex items-center  justify-center max-w-xs overflow-hidden rounded-lg hover:comic-shadow transition-shadow duration-300 ease-in-out">
                <div className="block">
                  <div className=" flex items-center text-center justify-center">
                    <Image
                      src={e.src}
                      className="max-h-40 w-56 object-contain "
                      style={{
                        minHeight: "160px",
                        maxWidth: "300px",
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <Typography.Title level={5}>{e.title}</Typography.Title>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Text className="font-bold">Rp.{e.price}</Typography.Text>
                      </Col>
                      <Col>
                        <Rate disabled defaultValue={e.rate} className="text-xs" />
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
