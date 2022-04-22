import { Card, Col, Row, Tag, Typography } from "antd";
import Link from "antd/lib/typography/Link";
import React, { useCallback, useEffect, useState } from "react";
import DangerButton from "../../../../../../../../core/common_components/buttons/DangerButton";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";
import { CommissionPostDetail } from "../../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import useIllustratorComPostDetailHandler from "../use_illustrator_compost_detail_handler";

function DetailComPost() {
  const [ellipsis, setEllipsis] = useState(true);
  const { onChangeComPostStatus, isLoadingChangeStatus, commissionPostDetail } = useIllustratorComPostDetailHandler();
  const onClick = useCallback(() => {
    onChangeComPostStatus();
  }, [commissionPostDetail?.status]);
  console.log(commissionPostDetail?.status);
  

  let status = commissionPostDetail?.status === "OPEN" ? true : false;
  return (
    <Card className="comic-shadow rounded-2xl">
      <Row>
        <Col xs={24} sm={24} lg={12} className="text-base leading-10">
          <Typography.Text className="">Pesanan: 10</Typography.Text>
          <br />
          <span>
            Status : <Typography.Text className={` ${status?"text-green-500":"text-red-500"} font-semibold`}>{commissionPostDetail?.status}</Typography.Text>
          </span>
          <br />
          <span>
            Harga : <Typography.Text className="w- font-bold text-lg">Rp. {commissionPostDetail?.price}</Typography.Text>
          </span>
          <br />
          <div>
            {commissionPostDetail?.tags?.map((tag) => (
              <Tag color="cyan">{tag.tagName}</Tag>
            ))}
          </div>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <Col>
            <h3>Deskripsi</h3>
          </Col>
          <Col>
            <Typography.Paragraph className="leading-tight">
              {ellipsis ? `${commissionPostDetail?.description?.substring(0, 150)}... ` : commissionPostDetail?.description}{" "}
              {commissionPostDetail?.description?.length! > 150 ? (
                <Link onClick={() => setEllipsis(!ellipsis)} className="text-blue-500">
                  {ellipsis ? "More" : "Hide"}
                </Link>
              ) : (
                ""
              )}
            </Typography.Paragraph>
          </Col>
        </Col>
      </Row>
      <Row justify="center" className="mt-3">
        {status ? (
          <DangerButton title="TUTUP COMMISSION" block loading={isLoadingChangeStatus} rounded onClick={onClick} />
        ) : (
          <SuccessButton loading={isLoadingChangeStatus} title="BUKA COMMISSION" block onClick={onClick} rounded />
        )}
      </Row>
    </Card>
  );
}

export default DetailComPost;
