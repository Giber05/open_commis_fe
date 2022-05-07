import { List, Avatar, Space, Row, Col, Card, Divider, Rate, Image, Typography, Input, Result, Button, Pagination, Carousel } from "antd";
import useComPostsHandler from "./use_composts_handler";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import millify from "millify";
import CommissionPostItem from "./components/CommissionPostItem";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useEffect, useState } from "react";
import { CategoryItem } from "../../../../../../core/common_components/main_app/category_button/CategoryItems";
import { LeftArrow, RightArrow } from "../../../../../../core/common_components/main_app/category_button/Arrows";
import { Link } from "react-router-dom";
import React from "react";
import { TestItem } from "./components/TestItem";
import AssetConstants from "../../../../../../core/constants/asset_constants";

const { Search } = Input;
function CommissionPostListPage() {
  const { initLoading, isMobile, isLoadingComPosts, pagination, searchComPosts, commissionPosts, getCommissionPosts, categories, getCategories, selectedCategory, chooseCategory, onChangePage } = useComPostsHandler();
  const visibility = React.useContext(VisibilityContext);

  // const visible = visibility.isItemVisible(itemId);
  const [onSearch, setOnSearch] = useState(false);
  useEffect(() => {
    getCommissionPosts();
    window.scrollTo(0, 0);
  }, [selectedCategory, onSearch, pagination?.currentPage]);
  useEffect(() => {
    getCategories();
  }, []);

  if (initLoading) return <CircularLoadingIndicator />;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-7">
        <div className="mx-auto my-5 sm:w-11/12 md:w-5/6 lg:w-1/2">
          <Search
            placeholder="Pencarian"
            allowClear
            onSearch={(keyword,e) => {
              if (keyword != "") {
                e?.preventDefault()
                setOnSearch(true);
                searchComPosts(keyword);
              }
            }}
          />
        </div>
        <div className="my-3">
          <Typography.Title level={5}>Kategori</Typography.Title>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {categories.map(({ categoryName, id }) => (
              <CategoryItem title={categoryName} key={id} onClick={chooseCategory(id)} selected={id === selectedCategory} itemId={id.toString()} />
            ))}
          </ScrollMenu>
        </div>
      </div>
      {!onSearch ? (
        <div className="object-cover mx-auto text-center">
          <Image preview={false}  src={`${AssetConstants.imageURL}/corousels/color_pencils.svg`}/>
        </div>
      ) : null}
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-screen-2xl lg:px-7">
        <Row gutter={[32, 32]} className="my-auto">
          {commissionPosts.length > 0 ? (
            commissionPosts.map((commission) => (
              <Col xs={24} sm={12} lg={8} xxl={6}>
                <Link to={`${commission.id}/detail`}>
                  <CommissionPostItem commission={commission} />
                </Link>
              </Col>
            ))
          ) : (
            <Card className="mx-auto">
              <Result title="Data tidak ditemukan" subTitle="Commission yang kamu cari tidak ditemukan" />
            </Card>
          )}
        </Row>
        <div className="mb-5 mt-10 text-center">
          {!isLoadingComPosts ? <Pagination simple={isMobile} pageSize={pagination?.pageSize} total={pagination?.totalData} defaultCurrent={1} current={pagination?.currentPage} onChange={onChangePage} /> : null}
        </div>
      </div>
    </div>
  );
}

export default CommissionPostListPage;
