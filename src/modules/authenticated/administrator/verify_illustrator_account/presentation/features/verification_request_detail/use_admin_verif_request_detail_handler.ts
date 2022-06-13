import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import { VerificationSubmissionDetail } from "../../../data/models/verification_submission_detail";
import { ApproveVerificationSubmission } from "../../../domain/usecases/approve_verification_submission";
import { GetVerificationSubmissionDetail } from "../../../domain/usecases/get_verification_submission_detail";
import { fetchVerifRequestDetail, selectAdminVerifRequestDetail, setIsActionLoading, setIsGetVerifRequestDetailLoading } from "../../reducers/admin_verif_request_detail_slice";

type AdminVerifRequestDetailController = {
  isGetVerifRequestDetailLoading: boolean;
  isActionLoading: boolean;
  verificationRequestDetail?: VerificationSubmissionDetail | null;
  getVerifRequestDetail: () => void;
  approveVerificationRequest: (accepted: boolean) => void;
};

function useAdminVerifRequestDetailHandler(): AdminVerifRequestDetailController {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { illustratorId } = useParams();
  let id = parseInt(illustratorId!);

  const getVerificationSubmissionDetailUC = new GetVerificationSubmissionDetail();
  const approveVerificationRequestUC = new ApproveVerificationSubmission();
  const { isActionLoading, isGetVerifRequestDetailLoading, verificationRequestDetail } = useSelector(selectAdminVerifRequestDetail);
  const { authUser } = useSelector(selectAuth);

  const getVerifRequestDetail = () => {
    dispatch(setIsGetVerifRequestDetailLoading(true));
    setTimeout(async () => {
      const resource = await getVerificationSubmissionDetailUC.execute({ token: authUser?.data.token!, illustratorId: id });

      dispatch(setIsGetVerifRequestDetailLoading(false));
      resource.whenWithResult({
        success: (value) => {

          dispatch(fetchVerifRequestDetail(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const approveVerificationRequest = (accepted: boolean) => {
    message.loading("Loading ...");
    dispatch(setIsActionLoading(true));
    setTimeout(async () => {
      const resource = await approveVerificationRequestUC.execute({ token: authUser?.data.token!, illustratorId: id, accepted: accepted });

      dispatch(setIsActionLoading(false));
      resource.whenWithResult({
        success: (value) => {
          message.success("Akun Berhasil Di Verifikasi", 2);
          navigate(0);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  return {
    isGetVerifRequestDetailLoading,
    verificationRequestDetail,
    getVerifRequestDetail,
    approveVerificationRequest,
    isActionLoading,
  };
}
export default useAdminVerifRequestDetailHandler;
