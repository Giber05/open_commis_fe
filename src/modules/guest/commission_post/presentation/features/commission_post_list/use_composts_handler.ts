import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchError, selectCommon } from "../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import { CategoryModel } from "../../../data/models/category/category_model";
import { CommissionPost } from "../../../data/models/compost_list/commission_post";
import { GetCategories } from "../../../domain/usecases/get_categories";
import GetCommissionPosts from "../../../domain/usecases/get_commission_posts";
import GetComPostDetail from "../../../domain/usecases/get_compost_detail";
import { fetchCategories, fetchCommissionPosts, isLoading, selectComPost, setSelectedCategory } from "../../reducers/compost_slice";
type ComPostsController = {
  isLoadingComPosts: boolean;
  commissionPosts: CommissionPost[];
  categories: CategoryModel[];
  getCommissionPosts: () => void;
  getCategories: () => void;
  selectedCategory: number | undefined;
  chooseCategory: (categoryId: number) => () => void;
};
function useComPostsHandler(): ComPostsController {
  const dispatch = useAppDispatch();
  const getCommissionPostsUC = new GetCommissionPosts();
  const getCategoriesUC = new GetCategories();
  const getComPostDetailUC = new GetComPostDetail();
  const { commissionPosts, isLoadingComPosts, categories, selectedCategory } = useSelector(selectComPost);
  const { error } = useSelector(selectCommon);
  const getCommissionPosts = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getCommissionPostsUC.execute({ page: 1, categoryId: selectedCategory, limit: 15 });
      const detail = await getComPostDetailUC.execute(3);
      console.log({ detail });

      dispatch(isLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCommissionPosts(value.data.data.commissionPosts));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  const getCategories = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getCategoriesUC.execute();
      dispatch(isLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCategories(value.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  const chooseCategory = (categoryId: number) => () => dispatch(setSelectedCategory(categoryId));
  return {
    isLoadingComPosts,
    commissionPosts,
    getCommissionPosts,
    categories,
    getCategories,
    selectedCategory,
    chooseCategory,
  };
}
export default useComPostsHandler;
