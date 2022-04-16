import { List, Avatar, Space, Row, Col, Card, Divider, Rate, Image, Typography } from "antd";
import useComPostsHandler from "./use_composts_handler";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import millify from "millify";
import CommissionPostItem from "./components/CommissionPostItem";
import FullWidthCorousel from "../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useEffect, useState } from "react";
import { CategoryItem } from "../../../../../../core/common_components/main_app/category_button/CategoryItems";
import { LeftArrow, RightArrow } from "../../../../../../core/common_components/main_app/category_button/Arrows";
import AssetConstants from "../../../../../../core/constants/asset_constants";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Commission 1",
    price: 50000,
    rate: 3,
    src: "https://obs.line-scdn.net/0hl0gZ0aa8Mx9aIySVR3xMSGJ1P25pRSkWeEMofyx3bC0iD30bZ0VgfHZwPjN-FnQbekApfSwgaHtwFCdAbg/w644",
  },
  {
    title: "Commission 2",
    price: 60000,
    rate: 5,
    src: "https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg",
  },
  {
    title: "Commission 3",
    price: 40000,
    rate: 4,
    src: "https://pbs.twimg.com/media/FIBlp9FX0AINnsO.jpg:large",
  },
  {
    title: "Commission 4",
    price: 50000,
    rate: 2,
    src: "https://kpopping.com/documents/6c/3/211226-IVE-Leeseo-documents-2.jpeg",
  },
  {
    title: "Commission 5",
    price: 50000,
    rate: 2,
    src: "https://i.pinimg.com/originals/9a/84/80/9a8480513fca9ed7952ea4ee5724bca9.jpg",
  },
  {
    title: "Commission 6",
    price: 50000,
    rate: 2,
    src: "https://i.pinimg.com/originals/9a/84/80/9a8480513fca9ed7952ea4ee5724bca9.jpg",
  },
  {
    title: "Commission 7",
    price: 50000,
    rate: 2,
    src: "https://i.pinimg.com/originals/9a/84/80/9a8480513fca9ed7952ea4ee5724bca9.jpg",
  },
  {
    title: "Commission 8",
    price: 50000,
    rate: 2,
    src: "https://i.pinimg.com/originals/9a/84/80/9a8480513fca9ed7952ea4ee5724bca9.jpg",
  },
  {
    title: "Commission 9",
    price: 50000,
    rate: 2,
    src: "https://i.pinimg.com/originals/9a/84/80/9a8480513fca9ed7952ea4ee5724bca9.jpg",
  },
];

function CommissionPostListPage() {
  const { isLoadingComPosts, commissionPosts, getCommissionPosts, categories, getCategories } = useComPostsHandler();
  const [selected, setSelected] = useState("");

  const handleItemClick = (itemId: string) => () => setSelected(itemId);

  useEffect(() => {
    getCategories();
    getCommissionPosts();
  }, []);

  return (
    <div className="bg-white">
      <div>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {categories.map(({ categoryName, id }) => (
          <CategoryItem title={categoryName} key={id} onClick={handleItemClick(id.toString())} selected={id.toString() === selected} itemId={id.toString()} />
        ))}
      </ScrollMenu>
      </div>
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-7">
        <FullWidthCorousel
          image3={`${AssetConstants.imageURL}corousels/color_pencils.svg`}
          image1="https://kpopping.com/documents/6c/3/211226-IVE-Leeseo-documents-2.jpeg"
          image2="https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg"
        />
        <Row gutter={[32, 32]} className="crypto-card-container">
          {commissionPosts.map((commission) => (
            <Col xs={24} sm={12} lg={8}>
              <Link to={`/${commission.id}/detail`}>
                <CommissionPostItem commission={commission} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CommissionPostListPage;
