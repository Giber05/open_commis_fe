import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchError, selectCommon } from "../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import { CommissionPostDetail } from "../../../data/models/compost_detail/commission_post_detail";
import GetComPostDetail from "../../../domain/usecases/get_compost_detail";
import { fetchCommissionDetail, isLoading, selectComPost } from "../../reducers/compost_slice";

type ComPostDetailController = {
  isLoadingComPosts: boolean;
  commissionPost?: CommissionPostDetail |null;
  getComPostDetail: () => void;
};

function useComPostDetailHandler():ComPostDetailController {
  const {compostId} = useParams()
  let id = parseInt(compostId!)
  
  const dispatch = useAppDispatch();
  const getComPostDetailUC = new GetComPostDetail();
  const { commissionPost, isLoadingComPosts } = useSelector(selectComPost);
  const { error } = useSelector(selectCommon);

  const getComPostDetail= () =>{
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getComPostDetailUC.execute(id);

      dispatch(isLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCommissionDetail(value.data.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });

  }
  return {
    isLoadingComPosts,
    commissionPost,
    getComPostDetail,
  }
}
export default useComPostDetailHandler;
