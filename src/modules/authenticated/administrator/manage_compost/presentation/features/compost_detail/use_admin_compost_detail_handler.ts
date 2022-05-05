import { message } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import AdminGetComPostDetail from "../../../domain/usecases/admin_get_compost_detail";
import { fetchCommissionDetail, selectAdminComPostDetail, setIsLoadingComPost } from "../../reducers/admin_compost_detail_slice";


type AdminComPostDetailController = {
  isLoadingComPost: boolean;
  commissionPost?: CommissionPostDetail | null;
  getComPostDetail: () => void;
  isMobile: boolean;
};

function useAdminComPostDetailHandler(): AdminComPostDetailController {
  const { compostId } = useParams();
  let id = parseInt(compostId!);

  const dispatch = useAppDispatch();
  const AdminGetComPostDetailUC = new AdminGetComPostDetail();
  const { commissionPost,initLoading,isLoadingComPost } = useSelector(selectAdminComPostDetail);
  const { error, isMobile } = useSelector(selectCommon);

  const getComPostDetail = () => {
    dispatch(setIsLoadingComPost(true));
    setTimeout(async () => {
      const resource = await AdminGetComPostDetailUC.execute(id);

      dispatch(setIsLoadingComPost(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCommissionDetail(value.data.data));
          console.log({value});
          
          dispatch(fetchError(""));
        },
        error: (error) => {
          message.error(error.exception.message)
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  return {
    isLoadingComPost,
    commissionPost,
    getComPostDetail,
    isMobile,
  };
}
export default useAdminComPostDetailHandler;
