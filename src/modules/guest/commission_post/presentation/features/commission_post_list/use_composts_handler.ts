import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchError, selectCommon } from "../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import { CategoryModel } from "../../../../../common/commission/data/models/category_model";
import CommissionPost from "../../../data/models/compost_list/commission_posts";
import { GetCategories } from "../../../domain/usecases/get_categories";
import GetCommissionPosts from "../../../domain/usecases/get_commission_posts";
import GetComPostDetail from "../../../domain/usecases/get_compost_detail";
import SearchComPosts from "../../../domain/usecases/search_composts";
import { fetchCategories, fetchCommissionPosts, isLoading, selectComPost, setInitLoading, setPagination, setSelectedCategory } from "../../reducers/compost_slice";
type ComPostsController = {
  initLoading:boolean;
  isLoadingComPosts: boolean;
  isMobile: boolean;
  commissionPosts: CommissionPost[];
  categories: CategoryModel[];
  getCommissionPosts: () => void;
  getCategories: () => void;
  selectedCategory: number | undefined;
  chooseCategory: (categoryId: number) => () => void;
  searchComPosts: (keyword: string) => void;
  pagination: PaginationModel | null;
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
};
function useComPostsHandler(): ComPostsController {
  const dispatch = useAppDispatch();
  const getCommissionPostsUC = new GetCommissionPosts();
  const getCategoriesUC = new GetCategories();
  const searchComPostsUC = new SearchComPosts();
  const { isMobile } = useSelector(selectCommon);
  const { commissionPosts, isLoadingComPosts, categories, selectedCategory, initLoading,pagination } = useSelector(selectComPost);
  const getCommissionPosts = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getCommissionPostsUC.execute({ page: pagination?.currentPage == undefined ? 1 : pagination?.currentPage, categoryId: selectedCategory, limit: 4 });
      dispatch(isLoading(false));
      dispatch(setInitLoading(false));
      resource.whenWithResult({
        success: (value) => {
          console.log({value});
          
          dispatch(fetchCommissionPosts(value.data.data.commissionPosts));
          dispatch(setPagination(value.data.data.pagination));
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

  const searchComPosts = (keyword: string) => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await searchComPostsUC.execute({ keyword: keyword });

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

  const chooseCategory = (categoryId: number) => () => {
    dispatch(setSelectedCategory(categoryId));
    dispatch(setPagination({ currentPage: 1, pageSize: 0, totalData:0, totalPage: 0 }));
  };

  const onChangePage = (page: number, pageSize?: number) => {
    dispatch(setPagination({ currentPage: page, pageSize: pageSize }));
  };

  return {
    isLoadingComPosts,
    commissionPosts,
    getCommissionPosts,
    categories,
    getCategories,
    selectedCategory,
    chooseCategory,
    searchComPosts,
    pagination,
    onChangePage,
    isMobile,
    initLoading,
  };
}
export default useComPostsHandler;
