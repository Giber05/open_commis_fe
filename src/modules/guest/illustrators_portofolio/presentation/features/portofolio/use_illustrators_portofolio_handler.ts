import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchError } from "../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import { IllustratorsPortofolio } from "../../../data/models/illustrators_portofolio";
import { GetIllustratorsPortofolio } from "../../../domain/usecases/get_Illustrators_portofolio";
import { fetchIllustratorsPortofolio, selectIllustratorsPortofolio, setIsLoadingPortofolio } from "../../reducers/illustrators_portofolio_slice";

type IllustratorsPortofolioController = {
  isLoadingPortofolio: boolean;
  illustratorsPortofolio: IllustratorsPortofolio | null;
  getIllustratorsPortofolio: () => void;
};

function useIllustratorsPortofolioHandler() :IllustratorsPortofolioController{
  const { illustratorId } = useParams();
  let id = parseInt(illustratorId!);

  const dispatch = useAppDispatch();
  const getIllustratorsPortofolioUC = new GetIllustratorsPortofolio();
  const { isLoadingPortofolio, illustratorsPortofolio } = useSelector(selectIllustratorsPortofolio);

  const getIllustratorsPortofolio = () => {
    dispatch(setIsLoadingPortofolio(true));
    setTimeout(async () => {
      const resource = await getIllustratorsPortofolioUC.execute(id);

      dispatch(setIsLoadingPortofolio(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchIllustratorsPortofolio(value.data.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
          
        },
      });
    });
  };
  return{
    isLoadingPortofolio,
    illustratorsPortofolio,
    getIllustratorsPortofolio,
  }
}

export default useIllustratorsPortofolioHandler;

