import React from 'react';
import { useSelector } from 'react-redux';
import { fetchError } from '../../../../../../../core/AppRedux/reducers/common_reducer';
import { useAppDispatch } from '../../../../../../../core/utils/redux';
import { selectAuth } from '../../../../../../guest/authentication/presentation/reducers/auth_reducer';
import IllustratorComposts from '../../../../manage_compost/data/models/illustrators_composts';
import GetIlustratorComPostList from '../../../../manage_compost/domain/usecases/get_ilustrator_compost_list';
import { ManagePortofolio } from '../../../data/models/portofolio';
import { GetProfile } from '../../../domain/usecases/get_profile';
import { fetchIllustratorComPost, fetchIllustratorProfile, selectManagePortofolio, setIsLoading } from '../../reducers/manage_portofolio_slice';


type PortofolioController = {
  isLoading: boolean;
  illustratorProfile: ManagePortofolio | null;
  illustratorComPosts: IllustratorComposts[];
  getIllustratorProfile: () => void;
  getIllustratorComPosts: () =>void;
};
function usePortofolioHandler():PortofolioController {
  const dispatch = useAppDispatch();
  const getProfileUC = new GetProfile();
  const getIllustratorComPostListUC = new GetIlustratorComPostList();
  const { isLoading, illustratorProfile, illustratorComPosts } = useSelector(selectManagePortofolio);
  const { authUser } = useSelector(selectAuth);

  const getIllustratorProfile = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getProfileUC.execute(authUser?.data.token!);

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchIllustratorProfile(value.data.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
          
        },
      });
    });
  };
  const getIllustratorComPosts = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getIllustratorComPostListUC.execute(authUser?.data.token!);

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchIllustratorComPost(value.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
          console.log({error});
          
        },
      });
    });
  };
  return{
    isLoading,
    illustratorProfile,
    getIllustratorProfile,
    getIllustratorComPosts,
    illustratorComPosts
  }
}

export default usePortofolioHandler;
