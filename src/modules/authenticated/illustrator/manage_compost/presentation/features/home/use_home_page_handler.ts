import { message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import IllustratorComposts from "../../../data/models/illustrators_composts";
import GetIlustratorComPostList from "../../../domain/usecases/get_ilustrator_compost_list";
import { fetchCommissionPosts, isLoading, selectIllustratorsComPosts,  } from "../../reducers/illustrators_compost_slice";

type HomePageController = {
  isLoadingComPost: boolean;
  commissionPosts: IllustratorComposts[] | null;
  getCommissionPosts: () => void;
  isMobile:boolean
};

function useHomePageHandler(): HomePageController {
  const dispatch = useAppDispatch();
  const getIlustratorComPosts = new GetIlustratorComPostList();
  const { isLoadingComPost, commissionPosts } = useSelector(selectIllustratorsComPosts);
  const { authUser } = useSelector(selectAuth);
  const { isMobile } = useSelector(selectCommon);

  const getCommissionPosts = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getIlustratorComPosts.execute(authUser?.data.token!);
      dispatch(isLoading(false));

      resource.whenWithResult({
        success: async (value) => {

          dispatch(fetchCommissionPosts(value.data));
        },
        error:  (error) => {
          message.error(error.exception.message)
        },
      });
    });
  };

  return {
    isLoadingComPost,
    commissionPosts,
    getCommissionPosts,
    isMobile
  };
}

export default useHomePageHandler;
