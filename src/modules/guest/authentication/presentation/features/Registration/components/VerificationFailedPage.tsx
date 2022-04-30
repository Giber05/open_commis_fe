import { Row, Col, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ResultError from '../../../../../../../core/common_components/feedback/ResultError';
import useRegistrationHandler from '../use_registration_handler';

function VerificationFailedPage() {
  const {resendVerifEmail} = useRegistrationHandler()
  return (
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <ResultError title="Kode Verifikasi Email Expired" subTitle="Kode verifikasi email yang anda kirimkan sudah kadaluarsa. Silahkan lakukan permintaan kode verifikasi ulang">
          <div className="mx-auto flex justify-center">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" className="my-2 ">
              <Col xs={24} sm={12} lg={12}>
                <div className="my-2">
                  <Link to="/auth/login" className="text-center sm:text-left">
                  <Button className="comic-shadow-btn bg-reject text-white hover:text-white hover:bg-reject hover:opacity-75 hover:border-reject rounded-full">Kembali ke halaman Login</Button>
                  </Link>
                </div>
              </Col>
              <Col xs={24} sm={12} lg={12} >
                <div className="text-center my-2 sm:text-right">
                  <Button onClick={resendVerifEmail} className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full">Kirim Ulang Email Verifikasi</Button>
                </div>
              </Col>
            </Row>
          </div>
        </ResultError>
      </div>
    );
  
}

export default VerificationFailedPage;
