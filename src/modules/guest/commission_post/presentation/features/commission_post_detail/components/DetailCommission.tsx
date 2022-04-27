import { Button, Card, Col, Rate, Row, Tag, Typography } from "antd";
import Paragraph from "antd/lib/skeleton/Paragraph";
import Link from "antd/lib/typography/Link";
import { Link as LinkReact } from "react-router-dom";
import { randomInt } from "crypto";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import DisabledButton from "../../../../../../../core/common_components/buttons/DisabledButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import { CommissionPostDetail } from "../../../../data/models/compost_detail/commission_post_detail";
import useComPostDetailHandler from "../use_compost_detail_handler";

export type CommissionProps = {
  commission: CommissionPostDetail;
};

const colors = ["red", "pink", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime", "success", "processing", "error", "default", "warning"];
function DetailCommission({ commission }: CommissionProps) {
  const { isMobile } = useComPostDetailHandler();
  
  const [ellipsis, setEllipsis] = useState(false);
  const [isLongTitle, setIsLongTitle] = useState(false);
  useEffect(() => {
    if (commission?.description?.length! > 150) setEllipsis(true);
    if (commission.title.length > 30) setIsLongTitle(true);
  }, [isMobile]);
  return (
    <Card className="comic-shadow ">
      <Row justify="space-between">
        <Col span={isLongTitle || isMobile ? 24 : 16}>
          <Typography.Text className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 text-start ">{commission.title}</Typography.Text>
        </Col>
        <Col span={isMobile ? 24: 8}>
          <div
            style={{
              textAlign: isLongTitle || isMobile ? "left" : "right",
            }}
          >
            <Rate disabled value={commission.overallRating!} className="text-base md:text-lg mb-3" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-base leading-10">
          <Col>
            <Typography.Text className="text-xl md:text-2xl font-bold">RP. {commission.price}</Typography.Text>
          </Col>

          <Typography.Text className="text-gray-400">Jumlah pesanan berhasil : {commission.ordersCompleted}</Typography.Text>

          <Col>
            <h3>Deskripsi</h3>
          </Col>
          <Col>
            <Typography.Paragraph className="leading-tight">
              {ellipsis ? `${commission?.description?.substring(0, 150)}... ` : commission?.description}{" "}
              {commission?.description?.length! > 150 ? (
                <Link onClick={() => setEllipsis(!ellipsis)} className="text-blue-500">
                  {ellipsis ? "More" : "Hide"}
                </Link>
              ) : (
                ""
              )}
            </Typography.Paragraph>
          </Col>
          <div>
            {commission.tags?.map((tag) => {
              let random = Math.floor(Math.random() * colors.length);

              return <Tag color={colors[random]}>{tag.tagName}</Tag>;
            })}
          </div>
          <Typography.Text className="text-gray-400">{moment(commission.createdAt).format("DD-MMM-YYYY")}</Typography.Text>
        </Col>
      </Row>
      <Row justify="center" className="mt-3 mx-auto">
        
        {commission.status==="OPEN"?(
        <LinkReact to={{ pathname: `/consumer/${commission.id}/make-order` }}>
        <SuccessButton block title="Pesan" rounded />
        </LinkReact>
        ):<DisabledButton rounded title="Pesan"/> }
      </Row>
    </Card>
  );
}

export default DetailCommission;
