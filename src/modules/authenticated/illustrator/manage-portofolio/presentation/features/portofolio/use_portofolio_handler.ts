import { message } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchError } from '../../../../../../../core/AppRedux/reducers/common_reducer';
import { useAppDispatch } from '../../../../../../../core/utils/redux';
import { selectAuth } from '../../../../../../guest/authentication/presentation/reducers/auth_reducer';
import IllustratorComposts from '../../../../manage_compost/data/models/illustrators_composts';
import GetIlustratorComPostList from '../../../../manage_compost/domain/usecases/get_ilustrator_compost_list';
import { setIsLoadingChangeStatus } from '../../../../manage_compost/presentation/reducers/illustrators_compost_slice';
import { ManagePortofolio } from '../../../data/models/manage_portfolio/portofolio';
import { ChangeAvailabilityStatus } from '../../../domain/usecases/changeAvailabilityStatus';
import { GetProfile } from '../../../domain/usecases/get_profile';
import { fetchIllustratorProfile, selectManagePortofolio, setIsLoading } from '../../reducers/manage_portofolio_slice';


type PortofolioController = {
  isLoading: boolean;
  isLoadingUpdateProfile:boolean;
  illustratorProfile: ManagePortofolio | null;
  getIllustratorProfile: () => void;
  changeAvailabilityStatus:()=>void;
};
function usePortofolioHandler():PortofolioController {
  const dispatch = useAppDispatch();
  const getProfileUC = new GetProfile();
  const getIllustratorComPostListUC = new GetIlustratorComPostList();
  const changeAvailabilityStatusUC = new ChangeAvailabilityStatus();
  const { isLoading, illustratorProfile,  isLoadingUpdateProfile } = useSelector(selectManagePortofolio);
  const { authUser } = useSelector(selectAuth);

  const getIllustratorProfile = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getProfileUC.execute(authUser?.data.token!);

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchIllustratorProfile(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message, 2)
        },
      });
    });
  };
  const changeAvailabilityStatus = () => {
    dispatch(setIsLoadingChangeStatus(true));
    setTimeout(async () => {
      const resource = await changeAvailabilityStatusUC.execute({token:authUser?.data.token!, status:!illustratorProfile?.available!});
      
      dispatch(setIsLoadingChangeStatus(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchIllustratorProfile(value.data.data));
          message.success(value.data.message, 2)
        },
        error: (error) => {
          message.error(error.exception.message, 2)
          
        },
      });
    });
  };

  return{
    isLoading,
    illustratorProfile,
    getIllustratorProfile,
    changeAvailabilityStatus,
    isLoadingUpdateProfile
  }
}

export default usePortofolioHandler;
