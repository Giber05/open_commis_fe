import { ArrowDownOutlined, ArrowUpOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import useAdminDashboardHandler from "../use_admin_dashboard_handler";

type ConsumerCountProps = {
  totalConsumer: number;
};
function ConsumerCount({ totalConsumer }: ConsumerCountProps) {
  const { isGetUserCountLoading } = useAdminDashboardHandler();

  return (
    <div className="w-3/4 md:w-3/4 lg:w-3/4 xl:w-full bg-white rounded-xl overflow-hdden shadow-md p-4 mx-auto  ">
      {isGetUserCountLoading ? (
        <Skeleton />
      ) : (
        <div>
          <div className="flex flex-wrap border-b border-gray-200 ">
            <div className="bg-gradient-to-tr from-purple-400 to-purple-900 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange">
              <UserSwitchOutlined className="text-2xl" />
            </div>
            <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right ">
              <h5 className="text-gray-700 font-light tracking-wide text-base mb-1">Konsumen</h5>
              <span className="text-3xl text-gray-900">{totalConsumer}</span>
            </div>
          </div>
          <div className="text-sm text-gray-700 pt-4 flex items-center undefined">
            <span className=" text-green-500 text-base leading-none">
              <ArrowUpOutlined />
            </span>
            <span className="text-green-500 ml-1 mr-2">2.8</span>
            <span className="font-light whitespace-nowrap">Since last week</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConsumerCount;
