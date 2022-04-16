import { List, Avatar, Space, Row, Col, Card, Divider, Rate, Image, Typography, Input } from "antd";
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

const { Search } = Input;
function CommissionPostListPage() {
  const { isLoadingComPosts, commissionPosts, getCommissionPosts, categories, getCategories, selectedCategory, chooseCategory } = useComPostsHandler();

  useEffect(() => {
    getCommissionPosts();
  }, [selectedCategory]);
  useEffect(() => {
    getCategories();
  }, []);
  console.log({ selectedCategory });

  return (
    <div className="bg-white">
      <div className="mx-auto my-5 sm:w-11/12 md:w-5/6 lg:w-1/2">
        <Search placeholder="input search text" allowClear onSearch={() => {}} />
      </div>

      <div>
        <Typography.Title level={5}>Kategori</Typography.Title>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {categories.map(({ categoryName, id }) => (
            <CategoryItem title={categoryName} key={id} onClick={chooseCategory(id)} selected={id === selectedCategory} itemId={id.toString()} />
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
              <Link to={`${commission.id}`}>
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
