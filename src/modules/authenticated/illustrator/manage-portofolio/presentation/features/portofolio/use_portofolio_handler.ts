import React from 'react';
import { useSelector } from 'react-redux';
import { fetchError } from '../../../../../../../core/AppRedux/reducers/common_reducer';
import { useAppDispatch } from '../../../../../../../core/utils/redux';
import { selectAuth } from '../../../../../../guest/authentication/presentation/reducers/auth_reducer';
import { ManagePortofolio } from '../../../data/models/portofolio';
import { GetProfile } from '../../../domain/usecases/get_profile';
import { fetchIllustratorProfile, selectManagePortofolio, setIsLoading } from '../../reducers/manage_portofolio_slice';


type PortofolioController = {
  isLoading: boolean;
  illustratorProfile: ManagePortofolio | null;
  getIllustratorProfile: () => void;
};
function usePortofolioHandler():PortofolioController {
  const dispatch = useAppDispatch();
  const getProfileUC = new GetProfile();
  const { isLoading, illustratorProfile } = useSelector(selectManagePortofolio);
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
  return{
    isLoading,
    illustratorProfile,
    getIllustratorProfile,
  }
}

export default usePortofolioHandler;
