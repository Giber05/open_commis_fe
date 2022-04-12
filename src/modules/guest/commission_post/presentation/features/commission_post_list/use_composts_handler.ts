import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import ComPostModel from "../../../data/models/compost_model";
import GetCommissionPosts from "../../../domain/usecases/get_commission_posts";
import { fetchCommissionPosts, isLoading, selectComPost } from "../../reducers/compost_slice";

type ComPostsController = {
  isLoadingComPosts: boolean;
  commissionPosts: ComPostModel | null;
};

function useComPostsHandler(): ComPostsController {
  const dispatch = useAppDispatch();
  const getCommissionPostsUC = new GetCommissionPosts();
  const { commissionPosts, isLoadingComPosts } = useSelector(selectComPost);

  const getCommissionPosts = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getCommissionPostsUC.execute();
      
      dispatch(isLoading(false));

      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCommissionPosts(value.data));
        },
      });
    }, 1000);
  };
  useEffect(() => {
    getCommissionPosts();
  }, []);

  return {
    isLoadingComPosts,
    commissionPosts,
  }
}
export default useComPostsHandler;
