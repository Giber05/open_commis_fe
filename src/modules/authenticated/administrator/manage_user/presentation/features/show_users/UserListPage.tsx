import { Typography } from "antd";
import React, { useEffect } from "react";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import UserListTable from "./components/UserListTable";
import useAdminUserListHandler from "./use_admin_user_list_handler";

function UserListPage() {
  const { getAllUser, initLoading, pagination, userList } = useAdminUserListHandler();
  useEffect(() => {
    getAllUser();
    window.scrollTo(0, 0);
  }, [pagination?.currentPage]);
  if (initLoading) return <CircularLoadingIndicator />;

  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className=" container  max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8  bg-white rounded-xl overflow-hdden shadow-md ">
          <div className="bg-gradient-to-t from-sky-400 to-[#3576a7] -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-sky-600 shadow-md undefined">
            <h2 className="text-white text-md md:text-lg lg:text-xl xl:text-2xl">Pengguna OpenCommiss</h2>
          </div>
          <UserListTable users={userList} />
        </div>
      </div>
    </>
  );
}

export default UserListPage;
