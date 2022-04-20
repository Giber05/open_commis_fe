
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import { fetchIllustratorProfile, setIsLoading } from "../../../../manage-portofolio/presentation/reducers/manage_portofolio_slice";
import GetIllustratorComPostDetail from "../../../domain/usecases/get_illustrator_compost_detail";
import { fetchCommissionPostDetail, isLoading, selectManageComPosts } from "../../reducers/manage_compost_slice";

type IllustratorComPostDetailController = {
  isLoadingComPost: boolean;
  commissionPostDetail?: CommissionPostDetail | null;
  getComPostDetail: () => void;
  isMobile: boolean;

};

function useIllustratorComPostDetailHandler(): IllustratorComPostDetailController {
  const { compostId } = useParams();
  let id = parseInt(compostId!);

  const dispatch = useAppDispatch();
  const getIllustratorComPostDetailUC = new GetIllustratorComPostDetail();
  const { commissionPostDetail, isLoadingComPost } = useSelector(selectManageComPosts);
  const { error,isMobile } = useSelector(selectCommon);

  const getComPostDetail = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getIllustratorComPostDetailUC.execute(id);

      dispatch(isLoading(false));
      resource.whenWithResult({
        success: (value) => {
          console.log(value.data.data);
          
          dispatch(fetchCommissionPostDetail(value.data.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  return {
    isLoadingComPost,
    commissionPostDetail,
    getComPostDetail,
    isMobile
  };
}
export default useIllustratorComPostDetailHandler;
