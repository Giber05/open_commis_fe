import { Row, Image, Col, Typography, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AssetConstants from "../../../../../../../../core/constants/asset_constants";
import IllustratorComposts from "../../../../data/models/illustrators_composts";
import useHomePageHandler from "../use_home_page_handler";

type PropsType = {
  commission: IllustratorComposts | null;
};
function IlustratorComPostItem({ commission }: PropsType) {
  const { isLoadingComPost,  } = useHomePageHandler();

  return (
    <Link to={{ pathname: `/manage/manage-compost/${commission?.id}` }}>
      <Card
        loading={isLoadingComPost}
        className="rounded-xl my-4 p-3 mx-1 hover:opacity-75 comic-shadow"
      >
        <Row justify="start">
          <div className=" text-center mx-auto md:text-left md:pr-5">
            <Image
              preview={false}
              src={commission?.image_1}
              className="max-h-40 w-full object-contain"
              fallback={`${AssetConstants.imageURL}/placeholder/compost_placeholder.png`}
              style={{
                minHeight: "160px",
                maxWidth: "250px",
              }}
            />
          </div>
          <div>
            <Col>
              <Typography.Title level={5}>{commission?.title.length! > 22 ? `${commission?.title.substring(0, 21)}...` : commission?.title}</Typography.Title>
            </Col>
            <Col>
              <span>
                Status : <Typography.Text className=" text-green-500">Tersedia</Typography.Text>{" "}
              </span>
            </Col>
            <Col>
              <Typography.Text>Jumlah Pesanan: 10</Typography.Text>
            </Col>
            <Col>
              <span>
                Harga : <Typography.Text className=" font-bold">{commission?.price}</Typography.Text>{" "}
              </span>
            </Col>
            <Col>
              <span>
                ID : <Typography.Text className=" font-bold">{commission?.id}</Typography.Text>{" "}
              </span>
            </Col>
          </div>
        </Row>
      </Card>
    </Link>
  );
}

export default IlustratorComPostItem;
