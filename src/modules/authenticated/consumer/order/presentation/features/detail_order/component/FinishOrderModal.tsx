import { Modal, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import useConsumerOrderDetailHandler from "../use_consumer_order_detail_handler";

function FinishOrderModal() {
  const { isFinishOrderModalVisible, changeFinishOrderModalVisibility } = useConsumerOrderDetailHandler();
  const handleCancel = () => {
    changeFinishOrderModalVisibility(false);
  };
  const navigate = useNavigate();
  const handleOk = () => {
    changeFinishOrderModalVisibility(false);

    navigate("/consumer/order/1001/reviewForm");
  };

  return (
    <Modal title="Selesai" visible={isFinishOrderModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Typography.Text className="justify-center">Apakah anda yakin untuk menyelesaikan orderan ini ? </Typography.Text>
    </Modal>
  );
}

export default FinishOrderModal;
