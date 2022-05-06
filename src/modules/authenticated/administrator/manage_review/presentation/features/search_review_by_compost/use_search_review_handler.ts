import { message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import CommissionPosts from "../../../../../../guest/commission_post/data/models/compost_list/commission_posts";
import SearchComPosts from "../../../../../../guest/commission_post/domain/usecases/search_composts";
import { fetchSearchedCommissionPosts, selectAdminComPostList, setIsSearchComPostLoading } from "../../../../manage_compost/presentation/reducers/admin_compost_list_slice";

type SearchReviewController = {
  isSearchComPostLoading: boolean;
  isMobile: boolean;
  searchedComPosts: CommissionPosts[];
  searchComPosts: (keyword: string) => void;
};
function useSearchReviewHandler(): SearchReviewController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchComPostsUC = new SearchComPosts();
  const { isMobile } = useSelector(selectCommon);
  const { authUser } = useSelector(selectAuth);
  const { searchedComPosts,isSearchComPostLoading } = useSelector(selectAdminComPostList);
  

  const searchComPosts = (keyword: string) => {
    dispatch(setIsSearchComPostLoading(true));
    setTimeout(async () => {
      const resource = await searchComPostsUC.execute({ keyword: keyword });

      dispatch(setIsSearchComPostLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchSearchedCommissionPosts(value.data.data.commissionPosts));
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
    isSearchComPostLoading,
    searchedComPosts,
    searchComPosts,
    isMobile,
  };
}
export default useSearchReviewHandler;
