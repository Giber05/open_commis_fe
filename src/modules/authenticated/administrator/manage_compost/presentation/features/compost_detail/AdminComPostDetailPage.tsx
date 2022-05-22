import { QuestionCircleOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Card, Result, Button, Popconfirm } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import FullWidthCorousel from "../../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import NotFound from "../../../../../../../core/common_components/NotFound";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import DetailCommission from "./components/DetailCommission";
import Reviews from "./components/Reviews";
import useAdminComPostDetailHandler from "./use_admin_compost_detail_handler";

function AdminComPostDetailPage() {
  const { getComPostDetail, isLoadingComPost, isMobile, deleteComPost, isDeleteComPostLoading, commissionPost } = useAdminComPostDetailHandler();
  useEffect(() => {
    getComPostDetail();
  }, []);
  if (isLoadingComPost) return <CircularLoadingIndicator />;
  else if (commissionPost == null) {
    return <NotFound />;
  }

  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto -mt-24 ">
        <div className="mb-5 container max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8  bg-white rounded-xl overflow-hdden shadow-md ">
          <div className="bg-gradient-to-t from-sky-400 to-[#3576a7] -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-sky-600 shadow-md undefined">
            <h2 className="text-white text-md md:text-lg lg:text-xl xl:text-2xl">Detail Commission Post</h2>
          </div>
          <Row gutter={[24, 24]} className="">
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="bg-gradient-to-tr from-gray-100 to-gray-200 shadow-md shadow-gray-400 rounded-xl">
                <FullWidthCorousel image1={commissionPost?.image_1} image2={commissionPost?.image_2} image3={commissionPost?.image_3} image4={commissionPost?.image_4} />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div>
                <DetailCommission commission={commissionPost!} key={commissionPost?.id} />
              </div>
            </Col>
          </Row>
          <div className="text-center mx-auto my-6 ">
            <Popconfirm
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              title="Apakah Anda yakin akan menghapus commission post ini?"
              placement="top"
              onConfirm={(e) => deleteComPost()}
            >
              <Button loading={isDeleteComPostLoading} size="large" className="hover:bg-reject hover:text-white text-reject border-reject rounded-xl comic-shadow-btn">
                HAPUS COMMISSION POST
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
      <div className="mb-5 mt-16 container max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-5xl lg:px-8  bg-white rounded-xl overflow-hdden shadow-md ">
        <div className="bg-gradient-to-t from-green-300 to-submit -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8  shadow-green-400 shadow-md undefined">
          <Row justify="space-between" className="flex-1">
            <h2 className="text-white text-md md:text-lg lg:text-xl xl:text-2xl">Ulasan</h2>
            {commissionPost?.reviews?.length! > 5 ? (
              <Link to={`/admin/manage-review/${commissionPost?.id}/reviews`} className="text-white text-md md:text-lg lg:text-xl xl:text-2xl hover:text-green-900">
                Selengkapnya...
              </Link>
            ) : null}
          </Row>
        </div>
        {commissionPost?.reviews?.length! > 0 ? (
          commissionPost?.reviews?.slice(0, 5).map((review) => <Reviews review={review} />)
        ) : (
          <Card className="mx-auto border-0">
            <Result title="Belum ada Review" subTitle="Commission post ini belum diberi review oleh konsumen" />
          </Card>
        )}
      </div>
    </>
  );
}

export default AdminComPostDetailPage;
