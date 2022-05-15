import { CheckCircleFilled, ShoppingOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Row, Col, Popconfirm, Avatar, Typography, Space, Rate, Image } from "antd";
import React, { useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DangerButton from "../../../../../../core/common_components/buttons/DangerButton";
import InfoButton from "../../../../../../core/common_components/buttons/InfoButton";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import { LeftArrow, RightArrow } from "../../../../../../core/common_components/main_app/category_button/Arrows";
import NotFound from "../../../../../../core/common_components/NotFound";
import AssetConstants from "../../../../../../core/constants/asset_constants";
import { TestItem } from "../../../../commission_post/presentation/features/commission_post_list/components/TestItem";
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
  console.log(illustratorsPortofolio?.id);
  let commissions = illustratorsPortofolio?.commissions;
  let artworks = illustratorsPortofolio?.artworks;
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
            {illustratorsPortofolio?.emailVerified ? <CheckCircleFilled style={{ color: "#1890ff" }} /> : null}
          </Typography.Title>
          <div className="md:w-1/2 mx-auto">
            <div className={`${illustratorsPortofolio?.available ? "border-green-500  bg-green-500" : "border-red-500  bg-red-500"} rounded-full text-center`}>
              <Typography.Title
                level={3}
                italic
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                {illustratorsPortofolio?.available ? "TERSEDIA" : "TIDAK TERSEDIA"}
              </Typography.Title>
            </div>
          </div>
          <Row justify="space-around">
            <Space size="small">
              <ShoppingOutlined className="text-xl" />
              <Typography.Title level={4}>Transaksi Berhasil:</Typography.Title>
              <Typography.Title level={4}>{illustratorsPortofolio?.ordersCompleted} Pesanan</Typography.Title>
            </Space>
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
