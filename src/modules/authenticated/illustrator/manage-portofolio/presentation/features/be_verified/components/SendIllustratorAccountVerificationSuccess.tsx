import { Row, Col, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ResultSuccess from '../../../../../../../../core/common_components/feedback/ResultSuccess';

function SendIllustratorAccountVerificationSuccess() {
  return <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
  <ResultSuccess title="Pengajuan Verifikasi Akun Telah Dikirimkan" subTitle="Pengajuan Verifikasi akun Anda telah kami terima. OpenCommiss akan meninjau pengajuan yang anda kirimkan. Proses ini akan memakan waktu paling cepat 3 hari. Silahkan Tunggu hasil dari pengajuan tersebut!">
    <div className="mx-auto flex justify-center">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" className="my-2 ">
        <Col xs={24} sm={24} lg={24}>
          <div className="my-2">
            <Link to="/manage/manage-compost" className="text-center sm:text-left">
              <Button className="comic-shadow-btn bg-[#00782C] text-white hover:text-white hover:bg-[#00782C] hover:opacity-75 hover:border-green-600 rounded-full">Kembali ke halaman Beranda</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  </ResultSuccess>
</div>;
}

export default SendIllustratorAccountVerificationSuccess;
