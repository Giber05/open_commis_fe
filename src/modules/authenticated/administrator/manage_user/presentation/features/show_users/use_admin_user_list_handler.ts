import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { UserList } from "../../../data/models/user_list/user_list";
import { DeleteUser } from "../../../domain/usecases/delete_user";
import { GetAllUser } from "../../../domain/usecases/get_all_user";
import { fetchUserList, selectAdminUserList, setInitLoading, setIsDeleteUserLoading, setIsGetUsersLoading, setPagination } from "../../reducers/user_list_slice";

type UserListController = {
  initLoading: boolean;
  isGetUsersLoading: boolean;
  userList: UserList[];
  getAllUser: () => void;
  pagination: PaginationModel | null;
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
  filterUser: string | null | undefined;
  searchText: string | undefined;
  deleteUser: (params: { userId: number; role: string }) => void;
};
function useAdminUserListHandler(): UserListController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getAllUserUC = new GetAllUser();
  const deleteUserUC = new DeleteUser();
  const { authUser } = useSelector(selectAuth);
  const { pagination, userList, initLoading, isGetUsersLoading, filterUser, searchText } = useSelector(selectAdminUserList);

  const getAllUser = () => {
    dispatch(setIsGetUsersLoading(true));
    setTimeout(async () => {
      const resource = await getAllUserUC.execute({
        page: pagination?.currentPage == undefined ? 1 : pagination?.currentPage,
        limit: 10,
        token: authUser?.data.token!,
        role: filterUser ?? undefined,
        keyword: searchText,
      });
      dispatch(setIsGetUsersLoading(false));
      dispatch(setInitLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchUserList(value.data.data.users));
          dispatch(setPagination(value.data.data.pagination));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const onChangePage = (page: number, pageSize?: number) => {
    dispatch(setPagination({ currentPage: page, pageSize: pageSize }));
  };

  const deleteUser = (params: { userId: number; role: string }) => {
    message.loading("Loading ...")
    dispatch(setIsDeleteUserLoading(true));
    setTimeout(async () => {
      const resource = await deleteUserUC.execute({ token: authUser?.data.token!, id: params.userId, role: params.role });

      dispatch(setIsDeleteUserLoading(false));
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
    isGetUsersLoading,
    userList,
    getAllUser,
    pagination,
    onChangePage,
    initLoading,
    filterUser,
    searchText,
    deleteUser,
  };
}
export default useAdminUserListHandler;
