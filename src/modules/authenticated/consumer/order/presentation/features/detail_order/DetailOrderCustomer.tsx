import { Col, Modal, Row, Typography } from 'antd'
import modal from 'antd/lib/modal'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SuccessButton from '../../../../../../../core/common_components/buttons/SuccessButton'
import OrderDetail from './component/OrderDetail'
import ComPostDetail from './component/ComPostDetail'
import PaymentDetail from './component/PaymentDetail'

function DetailOrderCustomer() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const navigate = useNavigate();
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setConfirmLoading(false);
    }, 2000);
    navigate("/consumer/order/1001/reviewForm");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
      <div className='max-w-3xl mx-auto py-3  sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8'>
        <Row gutter={[24, 24]} >
            <Col xs={24} sm={24} md={12} lg={12}>
            <OrderDetail/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
            <ComPostDetail/>
            <PaymentDetail/>
            </Col>
            <div className="mx-auto flex justify-center"> 
              <SuccessButton 
                  block 
                  title="Selesai"
                  rounded
                  onClick={showModal}
                  />
            </div>
        </Row>
      <Modal title="Selesai" visible={isModalVisible}  confirmLoading={confirmLoading} onOk={handleOk} onCancel={handleCancel}>
        <Typography.Text className='justify-center'>Apakah anda yakin untuk menyelesaikan orderan ini ? </Typography.Text>
      </Modal>
    </div>
  )
}

export default DetailOrderCustomer;