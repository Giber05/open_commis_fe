import { Row, Image, Col, Typography, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import ComPostModel from "../../../../data/models/ComPostModel";
import useHomePageHandler from "../use_home_page_handler";

type PropsType = {
  product: ComPostModel | null;
};
function IlustratorComPostItem({ product }: PropsType) {
  const { isLoadingComPost } = useHomePageHandler();

  return (
    <Link to={{ pathname: `/manage/manage-compost/${product?.id}` }}>
      <Card
        loading={isLoadingComPost}
        className="rounded-xl my-4 p-3 mx-1 hover:opacity-75 comic-shadow"
      >
        <Row justify="start">
          <div className="pr-5  sm:text-left">
            <Image
              preview={false}
              src={product?.imageSrc}
              className="max-h-40 object-contain"
              style={{
                minHeight: "160px",
                maxWidth: "250px",
              }}
            />
          </div>
          <div>
            <Col>
              <Typography.Title level={5}>{product?.name.length! > 22 ? `${product?.name.substring(0, 21)}...` : product?.name}</Typography.Title>
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
                Harga : <Typography.Text className=" font-bold">{product?.price}</Typography.Text>{" "}
              </span>
            </Col>
            <Col>
              <span>
                ID : <Typography.Text className=" font-bold">{product?.id}</Typography.Text>{" "}
              </span>
            </Col>
          </div>
        </Row>
      </Card>
    </Link>
  );
}

export default IlustratorComPostItem;
