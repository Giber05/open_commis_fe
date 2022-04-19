import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import ComPostModel from "../../../data/models/ComPostModel";
import GetIlustratorComPostList from "../../../domain/usecases/get_ilustrator_compost_list";
import { fetchCommissionPosts, isLoading, selectManageComPosts } from "../../reducers/manage_compost_slice";

type HomePageController = {
  isLoadingComPost: boolean;
  commissionPosts: ComPostModel[] | null;
  getCommissionPosts: (ilustrator: string) => void;
};

function useHomePageHandler(): HomePageController {
  const dispatch = useAppDispatch();
  const getIlustratorComPosts = new GetIlustratorComPostList();
  const { isLoadingComPost, commissionPosts } = useSelector(selectManageComPosts);

  const getCommissionPosts = (ilustratorId: string) => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getIlustratorComPosts.execute(ilustratorId);
      dispatch(isLoading(false));

      resource.whenWithResult({
        success: async (value) => {
          dispatch(fetchCommissionPosts(value.data));
        },
      });
    }, );
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
