import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import IlustratorModel from "../../../../../../common/authentication/data/model/ilustrator_model";
import IllustratorCount from "../../../../dashboard/presentation/features/dashboard/components/IllustratorCount";
import RequestItem from "./components/RequestItem";
import useAccountVerificationRequestsHandler from "./components/use_account_verif_req_handler";

const list = [
  {
    id: 1,
    name: "Gilang Liberty",
  },
  {
    id: 2,
    name: "Ifaldzi Alwi Hudhori",
  },
  {
    id: 3,
    name: "Mohammad Ichwan",
  },
  {
    id: 4,
    name: "Yordy Wirasatwika",
  },
  {
    id: 5,
    name: "Akbar Subagja",
  },
];
function AccountVerificationRequests() {
  const { getVerificationSubmissions, initLoading, isLoadingVerifRequests, submittedIllustrators } = useAccountVerificationRequestsHandler();
  useEffect(() => {
    getVerificationSubmissions();
  }, []);

  if (isLoadingVerifRequests) return <CircularLoadingIndicator />;
  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {submittedIllustrators.map((illustrator: IlustratorModel) => (
              <div className="px-4 mb-10  hover-scale-up cursor-pointer ">
                <Link to={`/admin/verify-illustrator/${illustrator.id}`}>
                  <RequestItem illustrator={illustrator} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountVerificationRequests;
