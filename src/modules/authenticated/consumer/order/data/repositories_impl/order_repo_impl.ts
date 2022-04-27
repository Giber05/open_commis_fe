import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import OrderListModel from "../../../../../common/order/data/models/order_list_model";
import { OrderRepo } from "../../domain/repositories/order_repo";
import { OrderRemoteDS, OrderRemoteDSImpl } from "../datasources/remote/order_remote_ds";
import { ConsumerMakeOrderModel } from "../models/order/make_order/consumer_make_order_model";
import { ConsumerOrderDetailModel } from "../models/order/order_detail/consumer_order_detail_model";

export class OrderRepoImpl extends BaseRepository implements OrderRepo {
  private orderRemoteDS: OrderRemoteDS = new OrderRemoteDSImpl();

  createOrder(params: { orderForm: any; token: string }): Promise<Resource<ConsumerMakeOrderModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.orderRemoteDS.createOrder({ orderForm: params.orderForm, token: params.token });
        if (resource instanceof ConsumerMakeOrderModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }

  getOrders(params: { page: number; limit: number; token: string }): Promise<Resource<OrderListModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.orderRemoteDS.getOrders({ page: params.page, limit: params.limit, token: params.token });
        if (resource instanceof OrderListModel) return Resource.success({ data: resource });

        return Resource.error({ exception: resource });
      },
    });
  }
  getOrderDetail(params: { orderId: number; token: string }): Promise<Resource<ConsumerOrderDetailModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.orderRemoteDS.getOrderDetail({ orderId: params.orderId, token: params.token });
        if (resource instanceof ConsumerOrderDetailModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
}
