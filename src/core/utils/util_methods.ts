import moment, { Moment } from "moment";
import { OrderStatus } from "./enums";

export class UtilMethods {
  public static matchStatusColor = (status: string) => {
    switch (status) {
      case OrderStatus.Finished:
        return "success";
      case OrderStatus.Accepted:
        return "geekblue";
      case OrderStatus.Failed:
        return "red";
      case OrderStatus.OnWork:
        return "lime";
      case OrderStatus.Denied:
        return "error";
      case OrderStatus.NotPaid:
        return "yellow";
      case OrderStatus.Sent:
        return "orange";
      case OrderStatus.Created:
        return "cyan";
      default:
        return "default";
    }
  };
  public static translateOrderStatus = (status: string) => {
    switch (status) {
      case OrderStatus.Finished:
        return "SELESAI";
      case OrderStatus.Accepted:
        return "DITERIMA";
      case OrderStatus.Failed:
        return "GAGAL";
      case OrderStatus.OnWork:
        return "SEDANG DIKERJAKAN";
      case OrderStatus.Denied:
        return "DITOLAK";
      case OrderStatus.NotPaid:
        return "MENUNGGU PEMBAYARAN";
      case OrderStatus.Sent:
        return "TELAH DIKIRIM";
      case OrderStatus.Created:
        return "MENUNGGU KONFIRMASI";
      default:
        return "default";
    }
  };



  public static getDeadlineDate(orderDate: Date, durationTime: number): string {
    let deadline = moment(orderDate).add(durationTime, "days");
    return this.getIndonesianFormatDate(deadline);
  }

  public static getIndonesianFormatDate(date: Date | Moment | string): string {
    return moment(date).format("DD-MMMM-YYYY");
  }
}
