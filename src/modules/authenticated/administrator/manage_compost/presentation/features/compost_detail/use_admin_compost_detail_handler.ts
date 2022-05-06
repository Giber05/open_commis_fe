import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import { AdminDeleteComPost } from "../../../domain/usecases/admin_delete_compost";
import AdminGetComPostDetail from "../../../domain/usecases/admin_get_compost_detail";
import { fetchCommissionDetail, selectAdminComPostDetail, setIsDeleteComPostLoading, setIsLoadingComPost } from "../../reducers/admin_compost_detail_slice";

type AdminComPostDetailController = {
  isLoadingComPost: boolean;
  isDeleteComPostLoading: boolean;
  commissionPost?: CommissionPostDetail | null;
  getComPostDetail: () => void;
  isMobile: boolean;
  deleteComPost: () => void;
};

function useAdminComPostDetailHandler(): AdminComPostDetailController {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { compostId } = useParams();
  let id = parseInt(compostId!);

  const AdminGetComPostDetailUC = new AdminGetComPostDetail();
  const AdminDeleteComPostUC = new AdminDeleteComPost();
  const { commissionPost, isDeleteComPostLoading, isLoadingComPost } = useSelector(selectAdminComPostDetail);
  const { error, isMobile } = useSelector(selectCommon);
  const { authUser } = useSelector(selectAuth);

  const getComPostDetail = () => {
    dispatch(setIsLoadingComPost(true));
    setTimeout(async () => {
      const resource = await AdminGetComPostDetailUC.execute(id);

      dispatch(setIsLoadingComPost(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCommissionDetail(value.data.data));
          console.log({ value });

          dispatch(fetchError(""));
        },
        error: (error) => {
          message.error(error.exception.message);
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };

  const deleteComPost = () => {
    message.loading("Menghapus Commission Post ...")
    dispatch(setIsDeleteComPostLoading(true));
    setTimeout(async () => {
      const resource = await AdminDeleteComPostUC.execute({ token: authUser?.data.token!, compostId: id });

      dispatch(setIsDeleteComPostLoading(false));
      resource.whenWithResult({
        success: (value) => {
          console.log(value.data.data);
          message.success(value.data.message, 2);
          navigate(-1);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  return {
    isLoadingComPost,
    commissionPost,
    getComPostDetail,
    isMobile,
    deleteComPost,
    isDeleteComPostLoading,
  };
}
export default useAdminComPostDetailHandler;
