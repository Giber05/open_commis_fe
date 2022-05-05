import { Typography } from "antd";
import React from "react";
import UserListTable from "./components/UserListTable";

function UserListPage() {
  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className=" container  max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8  bg-white rounded-xl overflow-hdden shadow-md ">
          <div className="bg-gradient-to-t from-sky-400 to-[#3576a7] -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-sky-600 shadow-md undefined">
            <h2 className="text-white text-md md:text-lg lg:text-xl xl:text-2xl">Pengguna OpenCommiss</h2>
          </div>
          <UserListTable />
        </div>
      </div>
    </>
  );
}

export default UserListPage;
