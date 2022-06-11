import { message } from "antd";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../../../core/utils/redux";
import IlustratorModel from "../../../../../../../common/authentication/data/model/ilustrator_model";
import { selectAuth } from "../../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { GetVerificationSubmissions } from "../../../../domain/usecases/get_verification_submissions";
import { fetchsSubmittedIllustrators, selectAdminVerifRequestList, setInitLoading, setIsLoadingVerifRequests } from "../../../reducers/admin_verif_request_list_slice";

type AdminVerificationRequestsController = {
  initLoading: boolean;
  isLoadingVerifRequests: boolean;
  submittedIllustrators: IlustratorModel[];
  getVerificationSubmissions: () => void;
};
function useAccountVerificationRequestsHandler(): AdminVerificationRequestsController {
  const dispatch = useAppDispatch();
  const getVerificationSubmissionsUC = new GetVerificationSubmissions();
  const { authUser } = useSelector(selectAuth);
  const { submittedIllustrators, isLoadingVerifRequests, initLoading } = useSelector(selectAdminVerifRequestList);
  const getVerificationSubmissions = () => {
    dispatch(setIsLoadingVerifRequests(true));
    setTimeout(async () => {
      const resource = await getVerificationSubmissionsUC.execute(authUser?.data.token!);
      dispatch(setIsLoadingVerifRequests(false));
      dispatch(setInitLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchsSubmittedIllustrators(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  return {
    getVerificationSubmissions,
    submittedIllustrators,
    isLoadingVerifRequests,
    initLoading,
  };
}
export default useAccountVerificationRequestsHandler;
