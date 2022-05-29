import { message } from "antd";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { City } from "../../../data/models/manage_account/city";
import { Province } from "../../../data/models/manage_account/province";
import { GetCities } from "../../../domain/usecases/get_cities";
import { GetProvinces } from "../../../domain/usecases/get_provinces";
import { fetchCities, fetchProvinces, selectManageAccount, setIsGetCitiesLoading, setIsGetProvincesLoading, setSelectedProvince } from "../../reducers/manage_account_slice";

type BeVerifiedIllustratorController = {
  isGetProvincesLoading: boolean;
  isGetCitiesLoading: boolean;
  cities: City[];
  provinces: Province[];
  getProvinces: () => void;
  getCities: () => void;
  selectedProvince: number | null;
  onSelectedProvince: (provinceId: number) => void;
};
function useBeVerifiedIllustratorHandler(): BeVerifiedIllustratorController {
  const dispatch = useAppDispatch();
  const getProvincesUC = new GetProvinces();
  const getCitiesUC = new GetCities();
  const { cities, provinces, isGetCitiesLoading, isGetProvincesLoading, selectedProvince } = useSelector(selectManageAccount);
  const { authUser } = useSelector(selectAuth);

  const getProvinces = () => {
    dispatch(setIsGetProvincesLoading(true));
    setTimeout(async () => {
      const resource = await getProvincesUC.execute();

      dispatch(setIsGetProvincesLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchProvinces(value.data.provinces));
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  const getCities = () => {
    dispatch(setIsGetCitiesLoading(true));
    setTimeout(async () => {
      const resource = await getCitiesUC.execute(selectedProvince == null ? undefined : selectedProvince);

      dispatch(setIsGetCitiesLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCities(value.data.cities));
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  const onSelectedProvince = (provinceId: number) => {
    dispatch(setSelectedProvince(provinceId));
  };

  return {
    provinces,
    cities,
    getCities,
    isGetCitiesLoading,
    isGetProvincesLoading,
    getProvinces,
    selectedProvince,
    onSelectedProvince,
  };
}

export default useBeVerifiedIllustratorHandler;
