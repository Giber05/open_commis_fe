import { Button, Col, Modal, Row, Space } from "antd";
import React, { useCallback, useState } from "react";
import DangerButton from "../../../../../../../../core/common_components/buttons/DangerButton";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";
import useIllustratorDetailOrderHandler from "../use_illustrator_detail_order_handler";
import Rejectorder from "./reject_order/Rejectorder";

function ConfirmIncomingOrderSection() {
  
  const {isConfirmOrderModalVisible,isLoading, confirmOrder,changeOrderModalVisibility} = useIllustratorDetailOrderHandler()
  const onAcceptOrder = useCallback(() => {
    confirmOrder(true)
  }, []);
  return (
    <div className="w-full text-center">
      <div className="inline space-x-7 ">
        <Button onClick={()=>changeOrderModalVisibility(true)} size="large" className="comic-shadow-btn bg-red-500 text-white rounded">Ditolak</Button>
        <Button onClick={onAcceptOrder}  size="large" className="comic-shadow-btn bg-submit text-white rounded">Diterima</Button>
        <Modal
          title="Penolakan"
          centered
          visible={isConfirmOrderModalVisible}
          onCancel={() => changeOrderModalVisibility(false)}
          footer={null}
        >
          <Rejectorder/>
        </Modal>
      </div>
    </div>
  );
}

export default ConfirmIncomingOrderSection;
