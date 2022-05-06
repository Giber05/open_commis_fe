import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { ReviewList } from "../../../../../../common/reviews/data/models/review_list";
import { GetReviewsByComPostId } from "../../../../../../common/reviews/domain/usecases/get_reviews_by_compost_id";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { fetchReviews, selectAdminManageReview, setIsDeleteReviewLoading, setIsReviewLoading } from "../../reducers/admin_manage_review_slice";

type ReviewListController = {
  isDeleteReviewLoading: boolean;
  reviews: ReviewList[];
  getReviewsByComPostId: (conpostId: number) => void;
  isReviewLoading: boolean;
  // deleteComPost:(compostId:number)=>void
};
function useReviewListHandler(): ReviewListController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getReviewsByComPostIdUC = new GetReviewsByComPostId();
  // const AdminDeleteComPostUC = new AdminDeleteComPost();
  const { authUser } = useSelector(selectAuth);
  const { reviews, isDeleteReviewLoading, isReviewLoading } = useSelector(selectAdminManageReview);

  const getReviewsByComPostId = (compostId: number) => {
    dispatch(setIsReviewLoading(true));
    setTimeout(async () => {
      const resource = await getReviewsByComPostIdUC.execute(compostId);
      dispatch(setIsReviewLoading(false));
      resource.whenWithResult({
        success: (value) => {
          console.log({ value });

          dispatch(fetchReviews(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  // const deleteComPost = (reviewId: number) => {
  //   dispatch(setIsDeleteReviewLoading(true));
  //   setTimeout(async () => {
  //     const resource = await AdminDeleteComPostUC.execute({ token: authUser?.data.token!, reviewId: reviewId });

  //     dispatch(setIsDeleteReviewLoading(false));
  //     resource.whenWithResult({
  //       success: (value) => {
  //         console.log(value.data.data);
  //         message.success(value.data.message, 2);
  //         navigate(0);
  //       },
  //       error: (error) => {
  //         message.error(error.exception.message, 2);
  //       },
  //     });
  //   });
  // };

  return {
    isDeleteReviewLoading,
    reviews,
    getReviewsByComPostId,
    isReviewLoading,

    // deleteComPost
  };
}
export default useReviewListHandler;
