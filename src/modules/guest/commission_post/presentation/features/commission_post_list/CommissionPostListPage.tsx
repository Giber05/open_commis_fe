import { List, Avatar, Space, Row, Col, Card, Divider, Rate, Image, Typography, Input, Result, Button, Pagination } from "antd";
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
  const { initLoading, isMobile, isLoadingComPosts, pagination, searchComPosts, commissionPosts, getCommissionPosts, categories, getCategories, selectedCategory, chooseCategory, onChangePage } = useComPostsHandler();

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
            onSearch={(keyword) => {
              if (keyword != "") {
                searchComPosts(keyword);
                setOnSearch(true);
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
        {!onSearch ? (
          <FullWidthCorousel
            image3={`https://media.wired.com/photos/5c9572e72e8d9c717b83a846/16:9/w_2400,c_limit/CellPath_lede_fullwidth-2880x1620.jpg`}
            image1="https://kpopping.com/documents/6c/3/211226-IVE-Leeseo-documents-2.jpeg"
            image2="https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg"
          />
        ) : null}
        <Row gutter={[32, 32]} className="my-auto">
          {commissionPosts.length > 0 ? (
            commissionPosts.map((commission) => (
              <Col xs={24} sm={12} lg={8}>
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
