import { CheckCircleFilled, CheckCircleOutlined, CheckOutlined, CloseCircleFilled, CloseCircleOutlined, DollarCircleOutlined, MailOutlined, PicCenterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Image, Row, Tooltip, Typography } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import NotFound from "../../../../../../../core/common_components/NotFound";
import AssetConstants from "../../../../../../../core/constants/asset_constants";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import useAdminVerifRequestDetailHandler from "./use_admin_verif_request_detail_handler";

function AccountVerificationRequestDetail() {
  const { getVerifRequestDetail, isActionLoading, isGetVerifRequestDetailLoading, verificationRequestDetail, approveVerificationRequest } = useAdminVerifRequestDetailHandler();

  useEffect(() => {
    getVerifRequestDetail();
  }, []);

  if (isGetVerifRequestDetailLoading) return <CircularLoadingIndicator />;
  if (verificationRequestDetail == null) return <NotFound />;
  const illustratorBalance = UtilMethods.getIndonesianCurrencyFormat(verificationRequestDetail?.illustrator.balance!);

  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 -mt-24">
        <div className=" px-4 mb-16 mt-14 mx-auto">
          <div className="w-full sm:w-4/5 md:w-full lg:w-full xl:w-9/12  bg-white rounded-xl  shadow-md p-4 mx-auto">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-40 -mt-20">
                    <Image
                      alt="Profile picture"
                      src={verificationRequestDetail?.illustrator.profilePicture ?? AssetConstants.imageURL + "placeholder/profile_placeholder.png"}
                      className="rounded-full shadow-lg h-32 w-32 align-middle border-none object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center gap-4 flex justify-center mt-10 lg:justify-end lg:mt-0">
                {!verificationRequestDetail?.accepted ? (
                  <>
                    <Button
                      loading={isActionLoading}
                      onClick={() => approveVerificationRequest(true)}
                      size="large"
                      className="bg-gradient-to-tr from-green-400 to-submit text-white rounded-xl  comic-shadow-btn hover-scale-up font-bold border-green-400 hover:bg-gradient-to-tr hover:from-green-400 hover:to-submit hover:border-green-400 hover:text-white"
                    >
                      Approve
                    </Button>
                    <Button
                      loading={isActionLoading}
                      onClick={() => approveVerificationRequest(false)}
                      size="large"
                      className="bg-gradient-to-tr from-red-400 to-reject text-white rounded-xl comic-shadow-btn hover-scale-up font-bold border-red-400 hover:bg-gradient-to-tr hover:from-red-400 hover:to-reject hover:border-red-400 hover:text-white"
                    >
                      Reject
                    </Button>
                  </>
                ) : null}
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <Tooltip title="Status Ketersediaan Illustrator" className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      {verificationRequestDetail?.illustrator.available ? <CheckCircleOutlined className="text-green-600" /> : <CloseCircleOutlined className="text-red-600" />}
                    </span>
                    <span className="text-sm text-gray-700">TIDAK TERSEDIA</span>
                  </Tooltip>
                  <Tooltip title="Jumlah Saldo Illustrator" className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      <DollarCircleOutlined className="text-orange-300" />
                    </span>
                    <span className="text-sm text-gray-700">Rp. {illustratorBalance}</span>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-gray-900 text-2xl font-serif font-bold leading-normal mt-0 mb-2">
                {verificationRequestDetail?.illustrator.name}{" "}
                {verificationRequestDetail?.illustrator.verified ? (
                  <Tooltip title="Illustrator telah terverifikasi oleh OpenCommiss">
                    <CheckCircleFilled style={{ color: "#1890ff" }} />
                  </Tooltip>
                ) : null}
              </h1>
              <Tooltip title="Username">
                <h5 className="text-gray-900 text-sm  leading-normal mt-0 mb-2">({verificationRequestDetail?.illustrator.username})</h5>
              </Tooltip>
              <div className=" mb-2 text-gray-700 flex items-center justify-center mt-0 ">
                <span className="material-icons text-xl leading-none ">
                  <Avatar size="small" shape="square" src={AssetConstants.iconURL + "location.png"} />
                </span>
                {verificationRequestDetail?.address}, {verificationRequestDetail?.city}, {verificationRequestDetail?.province}
              </div>
              <div className="mb-2 text-gray-700 flex items-center mt-10 justify-center gap-2">
                <span className="material-icons undefined text-xl leading-none">
                  <MailOutlined className="text-red-500" />
                </span>
                {verificationRequestDetail?.illustrator.email}
                <span>
                  {verificationRequestDetail?.illustrator.emailVerified ? (
                    <Tooltip title="Email terverifikasi">
                      <CheckCircleFilled className="text-green-600" />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Email belum terverifikasi">
                      <CloseCircleFilled className="text-red-600" />
                    </Tooltip>
                  )}
                </span>
              </div>
              <div className="mb-2 text-gray-700 flex items-center  justify-center gap-2">
                <span className="material-icons undefined text-xl leading-none">
                  <WhatsAppOutlined className="text-green-500" />
                </span>
                {verificationRequestDetail?.illustrator.phone}
              </div>
            </div>

            <Divider />
            <div className="p-2">
              <div className=" text-center w-3/4 mx-auto">
                <h3>Latar Belakang Illustrator</h3>
                <p className="text-blue-gray-700 text-sm font-light leading-relaxed mt-2 mb-4">{verificationRequestDetail?.background}</p>
              </div>
              <div className="py-10">
                <Row gutter={[24, 24]} className="">
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <div className="text-center">
                      <h3>KTP : {verificationRequestDetail?.nik}</h3>
                      <Divider />
                    </div>
                    <div className="bg-gradient-to-tr from-gray-100 to-gray-200 shadow-md shadow-gray-400 rounded-xl text-center p-2">
                      <Image src={verificationRequestDetail?.idCardPhoto} className="max-h-72 " />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <div className="text-center">
                      <h3>Foto KTP + Foto Diri</h3>
                      <Divider />
                    </div>
                    <div className="bg-gradient-to-tr from-gray-100 to-gray-200 shadow-md shadow-gray-400 rounded-xl text-center p-2">
                      <Image src={verificationRequestDetail?.cardSelfiePhoto} className=" max-h-72" />
                    </div>
                  </Col>
                </Row>
              </div>

              <div>
                <Row gutter={16} justify="space-between">
                  <div>
                    <Typography.Text type="secondary" className="italic">
                      Disubmit pada: {moment(verificationRequestDetail?.submissionDate).format("DD-MMM-YYYY")}
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text type="secondary" className="italic">
                      Diverifikasi pada: {verificationRequestDetail.verificationDate == null ? "-" : moment(verificationRequestDetail?.verificationDate).format("DD-MMM-YYYY")}
                    </Typography.Text>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountVerificationRequestDetail;
