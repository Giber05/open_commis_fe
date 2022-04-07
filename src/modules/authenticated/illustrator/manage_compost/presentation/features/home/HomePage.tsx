import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Divider, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import FullWidthCorousel from "../../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import useHomePageHandler from "./use_home_page_handler";
import IlustratorComPostItem from "./components/IlustratorComPostItem";

function HomePage() {
  const { commissionPosts } = useHomePageHandler();

  return (
    <div className="bg-white">
      <FullWidthCorousel />
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Commission Post Anda</h2>
        <div className=" flex justify-center sm:justify-end py-4">
          <Link to="asd">
            <Button 
              type="default" 
              size="large"
              className=" font-bold" 
              icon={<PlusCircleOutlined />}
              style={{
                
                border: "1px solid black",
                boxShadow: "0.2rem 0.2rem 0 #222",
              }}
              >
              Commission Baru
            </Button>
          </Link>
        </div>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {commissionPosts?.map((product:any) => (
            <Col className="" span={12}>
              <IlustratorComPostItem product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
