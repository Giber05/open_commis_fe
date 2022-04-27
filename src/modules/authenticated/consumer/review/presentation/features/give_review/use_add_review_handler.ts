import { message } from "antd";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { AddReview } from "../../../domain/usecases/add_review";
import { selectAddReview, setIsAddReviewLoading } from "../../reducers/add_review_slice";

type AddReviewController = {
  isAddReviewLoading: boolean;
  addReview: (event: any) => void;
};

function useAddReviewHandler(): AddReviewController {
  const dispatch = useAppDispatch();
  const { compostId } = useParams();
  const { authUser } = useSelector(selectAuth);
  const { isAddReviewLoading } = useSelector(selectAddReview);
  const navigate = useNavigate();
  const addReviewUC = new AddReview();

  const addReview = (event: any) => {
    message.loading("Loading...");

    dispatch(setIsAddReviewLoading(true));
    setTimeout(async () => {
      const resource = await addReviewUC.execute({
        token: authUser?.data.token!,
        comment: event.comment,
        rate: event.rating,
        compostId: parseInt(compostId!),
      });

      dispatch(setIsAddReviewLoading(false));
      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message, 2);
          navigate(`/${value.data.data.commissionPostId}/detail`);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  return {
    isAddReviewLoading,
    addReview,
  };
}

export default useAddReviewHandler;
