import { Card, Col, Row, Tag, Typography } from "antd";
import Link from "antd/lib/typography/Link";
import React, { useState } from "react";
import DangerButton from "../../../../../../../../core/common_components/buttons/DangerButton";
import { CommissionPostDetail } from "../../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import useComPostDetailHandler from "../../../../../../../guest/commission_post/presentation/features/commission_post_detail/use_compost_detail_handler";

type DetailComPostProps = {
  commission?: CommissionPostDetail;
};

function DetailComPost({ commission }: DetailComPostProps) {
  const [ellipsis, setEllipsis] = useState(true);
  const { isMobile } = useComPostDetailHandler();

  return (
    <Card className="comic-shadow rounded-2xl">
      <Row>
        <Col xs={24} sm={24} lg={12} className="text-base leading-10">
          <Typography.Text className="">Pesanan: 10</Typography.Text>
          <br />
          <span>
            Status : <Typography.Text className=" text-green-500 font-semibold">{commission?.status}</Typography.Text>
          </span>
          <br />
          <span>
            Harga : <Typography.Text className="w- font-bold text-lg">Rp. {commission?.price}</Typography.Text>
          </span>
          <br />
          <div>
            {commission?.tags?.map((tag) => (
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
        </Col>
      </Row>
      <Row justify="center" className="mt-3">
        <DangerButton title="TUTUP COMMISSION" rounded />
      </Row>
    </Card>
  );
}

export default DetailComPost;
