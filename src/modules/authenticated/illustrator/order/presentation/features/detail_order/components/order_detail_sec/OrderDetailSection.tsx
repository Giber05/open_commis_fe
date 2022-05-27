import { Card, Tabs, Typography } from "antd";
import React from "react";
import CircularLoadingIndicator from "../../../../../../../../../core/common_components/CircularLoadingIndicator";
import useIllustratorDetailOrderHandler from "../../use_illustrator_detail_order_handler";
import ComPostTab from "./tabs/ComPostTab";
import OrderDetailTab from "./tabs/OrderDetailTab";
import TrackOrderTab from "./tabs/TrackOrderTab";

const { TabPane } = Tabs;

function OrderDetailSection() {
  const { orderDetail, isLoading } = useIllustratorDetailOrderHandler();
  return (
    <Card loading={isLoading} className="comic-shadow rounded-xl">
      <div className=" py-1 px-1 sm:py-2 sm:px-2 lg:px-4">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <Typography.Text className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-extrabold" strong>
                Detail Pesanan
              </Typography.Text>
            }
            key="1"
          >
            <OrderDetailTab orderDetail={orderDetail!} />
          </TabPane>
          <TabPane
            tab={
              <Typography.Text className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-extrabold" strong>
                Commission Post
              </Typography.Text>
            }
            key="2"
          >
            <ComPostTab commission={orderDetail?.commission!} />
          </TabPane>
          <TabPane
            tab={
              <Typography.Text className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-extrabold" strong>
                Lacak Pesanan
              </Typography.Text>
            }
            key="3"
          >
            <TrackOrderTab />
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
}

export default OrderDetailSection;
