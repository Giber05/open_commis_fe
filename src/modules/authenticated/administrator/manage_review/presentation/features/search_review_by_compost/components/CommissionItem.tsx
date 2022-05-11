import { Typography, Row, Col, Rate, Image } from "antd";
import React from "react";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";
import { CommissionPost } from "../../../../../../../common/commission/data/models/commission_post";

type CommissionProps = {
  commission: CommissionPost;
};
function CommissionItem({ commission }: CommissionProps) {
  const commissionPrice = UtilMethods.getIndonesianCurrencyFormat(commission?.price!);

  return (
    <div className="inline-block p-3 content-center ">
  
      <div className="bg-gradient-to-tr from-gray-100 to-gray-200 shadow-md shadow-gray-400 rounded-xl w-56 p-3 flex items-center  justify-center max-w-xs overflow-hidden  hover-scale-up">
        <div className="block">
          <div className=" flex items-center text-center justify-center">
            <Image
            preview={false}
              src={commission.image_1}
              className="max-h-40 w-56 object-contain "
              style={{
                minHeight: "160px",
                maxWidth: "300px",
              }}
            />
          </div>
          <div className="p-3">
            <Typography.Title level={5}>{commission.title}</Typography.Title>
            <Row justify="space-between">
              <Col>
                <Typography.Text className="font-bold">Rp. {commissionPrice}</Typography.Text>
              </Col>
              <Col>
                <Rate disabled defaultValue={3} className="text-xs" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommissionItem;
