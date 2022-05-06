import { Card, Result } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import ReviewItem from "./components/ReviewItem";
import useReviewListHandler from "./use_review_list_handler";

function ReviewListPage() {
  const { compostId } = useParams();
  const { getReviewsByComPostId, isDeleteReviewLoading, isReviewLoading, reviews } = useReviewListHandler();
  useEffect(() => {
    getReviewsByComPostId(parseInt(compostId!));
  }, []);

  if (isReviewLoading) return <CircularLoadingIndicator />;
  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto -mt-24 ">
        <div className="mb-5 container max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8  bg-white rounded-xl overflow-hdden shadow-md ">
          <div className="bg-gradient-to-t from-sky-400 to-[#3576a7] -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-sky-600 shadow-md undefined">
            <h2 className="text-white text-md md:text-lg lg:text-xl xl:text-2xl">Ulasan Lengkap Commission Post #{compostId}</h2>
          </div>
          {reviews?.length! > 0 ? (
            reviews?.map((review) => <ReviewItem review={review} />)
          ) : (
            <Card className="mx-auto border-0">
              <Result title="Belum ada Review" subTitle="Commission post ini belum diberi review oleh konsumen" />
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
export default ReviewListPage;
