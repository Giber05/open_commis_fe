import { Card, Col, Input, Result, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAdminComPostDetailHandler from "../../../../manage_compost/presentation/features/compost_detail/use_admin_compost_detail_handler";
import useAdminComPostListHandler from "../../../../manage_compost/presentation/features/show_composts/use_admin_compost_list_handler";
import { fetchSearchedCommissionPosts } from "../../../../manage_compost/presentation/reducers/admin_compost_list_slice";
import CommissionItem from "./components/CommissionItem";
import useSearchReviewHandler from "./use_search_review_handler";
const { Search } = Input;
function SearchReviewPage() {
  const { searchComPosts, searchedComPosts, isSearchComPostLoading } = useSearchReviewHandler();
  const [onSearch, setOnSearch] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto -mt-24 ">
        <div className="mb-5 container max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8  bg-white rounded-xl  shadow-md ">
          <div className="bg-gradient-to-t from-sky-400 to-[#3576a7] -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-auto py-4 px-8 justify-center shadow-sky-600 shadow-md ">
            <h2 className="text-center text-white text-md md:text-lg lg:text-xl xl:text-2xl">Cari Commission Post yang Ingin Dilihat Review Lengkapnya</h2>
            <Search
              width={1000}
              size="large"
              className="w-full rounded-xl flex-1"
              style={{ borderRadius: "40%" }}
              placeholder="Cari Commission Post"
              allowClear
              onSearch={(keyword,event) => {
                event?.preventDefault()
                if (keyword != "") {
                  setOnSearch(true);
                  searchComPosts(keyword);
                }
              }}
            />
          </div>
          <Card bordered={false} loading={isSearchComPostLoading} className="text-center mx-auto overflow-hidden ">
            {onSearch ? (
              <Row gutter={[32, 32]} className="my-auto">
                {searchedComPosts.length > 0 ? (
                  searchedComPosts.map((commission) => (
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                      <Link to={`/admin/manage-review/${commission.id}/reviews`}>
                        <CommissionItem commission={commission} />
                      </Link>
                    </Col>
                  ))
                ) : (
                  <Card bordered={false} className="mx-auto">
                    <Result title="Data tidak ditemukan" subTitle="Commission yang kamu cari tidak ditemukan" />
                  </Card>
                )}
              </Row>
            ) : null}
          </Card>
        </div>
      </div>
    </>
  );
}

export default SearchReviewPage;
