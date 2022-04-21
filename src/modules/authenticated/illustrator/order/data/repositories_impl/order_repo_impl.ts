import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { OrderRepo } from "../../domain/repositories/order_repo";
import { OrderRemoteDS, OrderRemoteDSImpl } from "../datasources/remote/order_remote_ds";
import { IllustratorOrderDetailModel } from "../models/illustrator_order_detail_model";
import OrderListModel from "../models/order_list_model";

export class OrderRepoImpl extends BaseRepository implements OrderRepo {
  private orderRemoteDS: OrderRemoteDS = new OrderRemoteDSImpl();
  getOrders(params: { page: number; limit: number; token: string; compostId?: number }): Promise<Resource<OrderListModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.orderRemoteDS.getOrders({ page: params.page, limit: params.limit, token: params.token, compostId: params.compostId });
        if (resource instanceof OrderListModel) return Resource.success({ data: resource });

        return Resource.error({ exception: resource });
      },
    });
  }
  getOrderDetail(params: { orderId: number; token: string }): Promise<Resource<IllustratorOrderDetailModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.orderRemoteDS.getOrderDetail({ orderId: params.orderId, token: params.token });
        if (resource instanceof IllustratorOrderDetailModel) return Resource.success({ data: resource });

        return Resource.error({ exception: resource });
      },
    });
  }
}
