import { List, Avatar, Space, Row, Col, Card, Divider, Rate } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import FullWidthCorousel from "../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import useComPostsHandler from "./use_composts_handler";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import millify from "millify";

const listData: any[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

function CommissionPostListPage() {
  const { isLoadingComPosts, commissionPosts } = useComPostsHandler();

  if (isLoadingComPosts) return <CircularLoadingIndicator />;
  console.log({ commissionPosts });

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {commissionPosts?.data.commissionPosts.map((commission) => (
          <Col xs={24} sm={16} lg={8}>
            {/* <Link to={`/crypto/`}> */}
            <Card>
              <Card.Meta avatar={<Avatar src="https://i.pinimg.com/originals/eb/07/e3/eb07e3c77d122a1c037f3c69a3e24383.jpg" />} title="Ilustrator Name" />
              <Divider />
              <FullWidthCorousel image1={commission.image_1 ?? null} image2={commission.image_2 ?? null} image3={commission.image_3 ?? null} image4={commission.image_4 ?? null} />
              <Divider />
              <h3>{commission.title}</h3>
              <div className="">
                <Row justify="space-between">
                  <h2>Rp. {millify(commission.price)}</h2>
                  <Rate value={4} />
                </Row>
              </div>
            </Card>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page: any) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={
              [
                // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]
            }
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
          >
            <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
}

export default CommissionPostListPage;
