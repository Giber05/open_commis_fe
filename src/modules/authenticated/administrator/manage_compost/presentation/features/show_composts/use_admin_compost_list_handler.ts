import { message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { CommissionPost } from "../../../../../../common/commission/data/models/commission_post";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import CommissionPosts from "../../../../../../guest/commission_post/data/models/compost_list/commission_posts";
import SearchComPosts from "../../../../../../guest/commission_post/domain/usecases/search_composts";
import { AdminDeleteComPost } from "../../../domain/usecases/admin_delete_compost";
import AdminGetComPostList from "../../../domain/usecases/admin_get_compost_list";
import { fetchCommissionPosts, selectAdminComPostList, setInitLoading, setIsLoadingComPosts, setPagination } from "../../reducers/admin_compost_list_slice";

type AdminComPostsController = {
  initLoading: boolean;
  isLoadingComPosts: boolean;
  isMobile: boolean;
  commissionPosts: CommissionPosts[];
  getCommissionPosts: () => void;
  searchComPosts: (keyword: string) => void;
  pagination: PaginationModel | null;
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
  deleteComPost:(compostId:number)=>void
};
function useAdminComPostListHandler(): AdminComPostsController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const adminGetComPosttListUC = new AdminGetComPostList();
  const AdminDeleteComPostUC = new AdminDeleteComPost();
  const searchComPostsUC = new SearchComPosts();
  const { isMobile } = useSelector(selectCommon);
  const { authUser } = useSelector(selectAuth);
  const { pagination, commissionPosts, initLoading, isLoadingComPosts } = useSelector(selectAdminComPostList);
  const getCommissionPosts = () => {
    dispatch(setIsLoadingComPosts(true));
    setTimeout(async () => {
      const resource = await adminGetComPosttListUC.execute({ page: pagination?.currentPage == undefined ? 1 : pagination?.currentPage, limit: 10 });
      dispatch(setIsLoadingComPosts(false));
      dispatch(setInitLoading(false));
      resource.whenWithResult({
        success: (value) => {

          dispatch(fetchCommissionPosts(value.data.data.commissionPosts));
          dispatch(setPagination(value.data.data.pagination));
          dispatch(fetchError(""));
        },
        error: (error) => {
          message.error(error.exception.message)
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };

  const searchComPosts = (keyword: string) => {
    dispatch(setIsLoadingComPosts(true));
    setTimeout(async () => {
      const resource = await searchComPostsUC.execute({ keyword: keyword });

      dispatch(setIsLoadingComPosts(false));
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

  const onChangePage = (page: number, pageSize?: number) => {
    dispatch(setPagination({ currentPage: page, pageSize: pageSize }));
  };
  
  const deleteComPost = (compostId: number) => {
    message.loading("Menghapus Commission ...")
    dispatch(setIsLoadingComPosts(true));
    setTimeout(async () => {
      const resource = await AdminDeleteComPostUC.execute({ token: authUser?.data.token!, compostId: compostId });

      dispatch(setIsLoadingComPosts(false));
      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message, 2);
          navigate(0);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  return {
    isLoadingComPosts,
    commissionPosts,
    getCommissionPosts,
    searchComPosts,
    pagination,
    onChangePage,
    isMobile,
    initLoading,
    deleteComPost
  };
}
export default useAdminComPostListHandler;
