import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import InfoButton from "../../../../../../../core/common_components/buttons/InfoButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import ResultSuccess from "../../../../../../../core/common_components/feedback/ResultSuccess";

function RegistrationSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <ResultSuccess title="Registrasi Akun Berhasil" subTitle="Email verifikasi akun telah dikirimkan. Silahkan cek email Anda, lalu lakukan verifikasi akun untuk menyelesaikan proses registrasi">
        <div className="mx-auto flex justify-center">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" className="my-2 ">
            <Col xs={24} sm={12} lg={12}>
              <div className="my-2">
                <Link to="/auth/login" className="text-center sm:text-left">
                <Button className="comic-shadow-btn bg-[#00782C] text-white hover:text-white hover:bg-[#00782C] hover:opacity-75 hover:border-green-600 rounded-full">Kembali ke halaman Login</Button>
                </Link>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={12} >
              <div className="text-center my-2 sm:text-right">
                <Button className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full">Kirim Ulang Email Verifikasi</Button>
              </div>
            </Col>
          </Row>
        </div>
      </ResultSuccess>
    </div>
  );
}

export default RegistrationSuccessPage;
