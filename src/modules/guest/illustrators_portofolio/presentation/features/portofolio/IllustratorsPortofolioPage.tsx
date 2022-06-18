import { CheckCircleFilled, ShoppingOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, WhatsAppOutlined, StarFilled } from "@ant-design/icons";
import { Row, Col, Popconfirm, Avatar, Typography, Space, Rate, Image, Tooltip, Divider } from "antd";
import React, { useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import { LeftArrow, RightArrow } from "../../../../../../core/common_components/main_app/category_button/Arrows";
import NotFound from "../../../../../../core/common_components/NotFound";
import AssetConstants from "../../../../../../core/constants/asset_constants";
import IllustratorsArtworksSection from "./components/IllustratorsArtworksSection";
import IllustratorsBioSection from "./components/IllustratorsBioSection";
import IllustratorsCommissionSection from "./components/IllustratorsCommissionSection";
import useIllustratorsPortofolioHandler from "./use_illustrators_portofolio_handler";

function IllustratorsPortofolioPage() {
  const visibility = React.useContext(VisibilityContext);
  const { isLoadingPortofolio, getIllustratorsPortofolio, illustratorsPortofolio } = useIllustratorsPortofolioHandler();
  useEffect(() => {
    getIllustratorsPortofolio();
    window.scroll(0, 0);
  }, []);

  if (isLoadingPortofolio) return <CircularLoadingIndicator />;
  else if (illustratorsPortofolio == null) {
    return <NotFound />;
  }
  const rating = (Math.round(illustratorsPortofolio?.overallRating! * 100) / 100).toFixed(2);
  const commissions = illustratorsPortofolio?.commissions;
  const artworks = illustratorsPortofolio?.artworks;
  return (
    <div className="bg-[url('/public/assets/images/background/profile-background.svg')] bg-cover bg-center  h-auto">
      <div className="m-auto p-auto max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Profil</h2>
        <div className="mx-auto text-center justify-center my-5 flex flex-row">
          <Avatar
            size={{ xs: 72, sm: 84, md: 92, lg: 100, xl: 120, xxl: 132 }}
            src={illustratorsPortofolio?.profilePicture == null ? AssetConstants.imageURL + "placeholder/profile_placeholder.png" : illustratorsPortofolio?.profilePicture}
          />
        </div>
        <div className="mx-auto text-center ">
          <Typography.Title level={2}>
            {illustratorsPortofolio?.name}
            {illustratorsPortofolio?.verified ? (
              <Tooltip title="Illustrator telah terverifikasi oleh OpenCommiss">
                <CheckCircleFilled style={{ color: "#1890ff" }} />
              </Tooltip>
            ) : null}
          </Typography.Title>
          <div className="md:w-1/2 mx-auto">
            <div className={`${illustratorsPortofolio?.available ? "border-green-500  bg-green-500" : "border-red-500  bg-red-500"} rounded-full text-center`}>
              <Typography.Title
                level={3}
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                {illustratorsPortofolio?.available ? "TERSEDIA" : "TIDAK TERSEDIA"}
              </Typography.Title>
            </div>
          </div>
          <Row>
            <Col xs={24} sm={12} lg={12}>
              <Space size="small">
                <ShoppingOutlined className="text-xl" />
                <Typography.Title level={4}>Transaksi Berhasil:</Typography.Title>
                <Typography.Title level={4}>{illustratorsPortofolio?.ordersCompleted} Pesanan</Typography.Title>
              </Space>
            </Col>

            <Col xs={24} sm={12} lg={12}>
              <Typography.Title level={4}>
                Overall Rating: <StarFilled className="text-yellow-400" /> ({rating})
              </Typography.Title>
            </Col>
          </Row>
        </div>
        <IllustratorsBioSection phone={illustratorsPortofolio?.phone!} portofolio={illustratorsPortofolio?.portofolio} />
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Karya Seni Ilustrator</h2>
      </div>
      <div className=" mx-auto pb-10">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {artworks?.length! > 0 ? (
            artworks!.map((artwork) => <IllustratorsArtworksSection artwork={artwork} itemId={artwork?.id.toString()} />)
          ) : (
            <Typography.Text type="secondary" strong italic>
              Belum ada karya yang diunggah
            </Typography.Text>
          )}
        </ScrollMenu>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Open Commission</h2>
      <div className=" mx-auto pb-10 ">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {commissions?.length! > 0 ? (
            commissions!.map((commission) => <IllustratorsCommissionSection commission={commission} itemId={commission.id.toString()} />)
          ) : (
            <Typography.Text type="secondary" strong italic>
              Belum ada commission post yang ditawarkan
            </Typography.Text>
          )}
        </ScrollMenu>
      </div>
    </div>
  );
}

export default IllustratorsPortofolioPage;
