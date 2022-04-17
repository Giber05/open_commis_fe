import { CheckCircleFilled, ShoppingOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Row, Col, Popconfirm, Avatar, Typography, Space, Rate, Image } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DangerButton from "../../../../../../core/common_components/buttons/DangerButton";
import InfoButton from "../../../../../../core/common_components/buttons/InfoButton";
import IllustratorsArtworksSection from "./components/IllustratorsArtworksSection";
import IllustratorsBioSection from "./components/IllustratorsBioSection";
import IllustratorsCommissionSection from "./components/IllustratorsCommissionSection";
import useIllustratorsPortofolioHandler from "./use_illustrators_portofolio_handler";
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
function IllustratorsPortofolioPage() {
  const { isLoadingPortofolio, getIllustratorsPortofolio,illustratorsPortofolio } = useIllustratorsPortofolioHandler();
  useEffect(() => {
    getIllustratorsPortofolio();
  }, []);
  
  
  return (
    <div className="flex flex-col m-auto p-auto max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Profil</h2>
      <div className="mx-auto my-5">
        <Avatar
          size={{ xs: 72, sm: 84, md: 92, lg: 100, xl: 120, xxl: 132 }}
          src={illustratorsPortofolio?.profilePicture}
        />
      </div>
      <div className="mx-auto text-center">
        <Typography.Title level={2}>
          {illustratorsPortofolio?.name}<CheckCircleFilled style={{ color: "#1890ff" }} />
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
            {illustratorsPortofolio?.available?"TERSEDIA":"TIDAK TERSEDIA"}
          </Typography.Title>
        </div>
        <Row justify="space-around">
          <Space size="small">
            <ShoppingOutlined className="text-xl" />
            <Typography.Title level={4}>Transaksi Berhasil:</Typography.Title>
            <Typography.Title level={4}>100 Pesanan</Typography.Title>
          </Space>
        </Row>
      </div>
      <IllustratorsBioSection phone={illustratorsPortofolio?.phone!} portofolio={illustratorsPortofolio?.portofolio} />
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Karya Seni Ilustrator</h2>

      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {illustratorsPortofolio?.artworks!.map((artwork) => (
            <IllustratorsArtworksSection artwork={artwork} />
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Open Commission</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {illustratorsPortofolio?.artworks!.map((e) => (
            <IllustratorsCommissionSection commission={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IllustratorsPortofolioPage;
