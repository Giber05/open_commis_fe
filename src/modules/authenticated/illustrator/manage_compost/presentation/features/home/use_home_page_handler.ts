import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import IllustratorComposts from "../../../data/models/illustrators_composts";
import GetIlustratorComPostList from "../../../domain/usecases/get_ilustrator_compost_list";
import { fetchCommissionPosts, isLoading, selectManageComPosts } from "../../reducers/manage_compost_slice";

type HomePageController = {
  isLoadingComPost: boolean;
  commissionPosts: IllustratorComposts[] | null;
  getCommissionPosts: () => void;
};

function useHomePageHandler(): HomePageController {
  const dispatch = useAppDispatch();
  const getIlustratorComPosts = new GetIlustratorComPostList();
  const { isLoadingComPost, commissionPosts } = useSelector(selectManageComPosts);
  const { authUser } = useSelector(selectAuth);

  const getCommissionPosts = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getIlustratorComPosts.execute(authUser?.data.token!);
      dispatch(isLoading(false));

      resource.whenWithResult({
        success: async (value) => {

          dispatch(fetchCommissionPosts(value.data));
        },
        error: async (error) => {
          console.log({ error });
        },
      });
    });
  };

  // useEffect(() => {
  //   console.log("useeffect called");

  //   getCommissionPosts("ilustratorId");
  // }, []);

  return {
    isLoadingComPost,
    commissionPosts,
    getCommissionPosts,
  };
}

export default useHomePageHandler;
