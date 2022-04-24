import { CheckCircleFilled, FacebookFilled, InstagramOutlined, ShoppingOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Avatar, Col, Popconfirm, Divider, Image, Rate, Row, Space, Typography, Button } from "antd";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import InfoButton from "../../../../../../../core/common_components/buttons/InfoButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import ArtworkItem from "./components/ArtworkItem";
import CommissionItem from "./components/CommissionItem";
import PortfolioSection from "./components/PortfolioSection";
import PortofolioContainer from "./components/PortofolioContainer";
import usePortofolioHandler from "./use_portofolio_handler";
import use_portofolio_handler from "./use_portofolio_handler";

function Portofolio() {
  const { isLoading, isLoadingUpdateProfile, changeAvailabilityStatus, getIllustratorProfile, illustratorProfile, getIllustratorComPosts, illustratorComPosts } = usePortofolioHandler();
  useEffect(() => {
    getIllustratorProfile();
  }, []);

  useEffect(() => {
    getIllustratorComPosts();
  }, []);
  console.log({ illustratorComPosts });
  const onClick = useCallback(() => {
    changeAvailabilityStatus();
  }, [illustratorProfile?.available]);
  return (
    <div className="flex flex-col m-auto p-auto max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Profil</h2>
      <Row justify="space-between">
        <Col>
          {illustratorProfile?.available ? (
            <Popconfirm
              title="Ubah ketersediaan menjadi tidak menerima orderan?"
              onCancel={() => {
                return;
              }}
              onConfirm={onClick}
            >
              <DangerButton loading={isLoadingUpdateProfile} title="CLOSE" block />
            </Popconfirm>
          ) : (
            <Popconfirm
              title="Ubah ketersediaan menjadi siap menerima orderan?"
              onCancel={() => {
                return;
              }}
              onConfirm={onClick}
            >
              <div className={`w-20 sm:w-40`}>
                <Button block={true} className={`comic-shadow-btn bg-[#00782C] text-white hover:text-white hover:bg-[#00782C] hover:opacity-75 hover:border-green-600 rounded`} loading={isLoadingUpdateProfile}>
                  OPEN
                </Button>
              </div>
            </Popconfirm>
          )}
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
          src={`${illustratorProfile?.profilePicture !== null ? illustratorProfile?.profilePicture : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}`}
        />
      </div>
      <div className="mx-auto text-center">
        <Typography.Title level={2}>
          {illustratorProfile?.name} <CheckCircleFilled style={{ color: "#1890ff" }} />
        </Typography.Title>
        <div className={`${illustratorProfile?.available ? "border-green-500  bg-green-500" : "border-red-500  bg-red-500"} rounded-full text-center`}>
          <Typography.Title
            level={3}
            italic
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            {illustratorProfile?.available ? "Tersedia" : "Tidak Tersedia"}
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

      <PortfolioSection portofolio={illustratorProfile?.portofolio} phone={illustratorProfile?.phone!} />

      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Karya Seni Ilustrator</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {illustratorProfile?.artworks?.map((artwork) => (
            <ArtworkItem artwork={artwork} />
          ))}
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Open Commission</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {illustratorComPosts.map((commission) => (
            <CommissionItem commission={commission} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
