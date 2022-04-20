class PaginationModel {
  totalData?: number;
  totalPage?: number;
  pageSize?: number;
  currentPage: number;
  constructor(params: { totalData: number; totalPage: number; pageSize: number; currentPage: number }) {
    this.totalData = params.totalData;
    this.totalPage = params.totalPage;
    this.pageSize = params.pageSize;
    this.currentPage = params.currentPage;
  }
  public static fromJson(json: any): PaginationModel {
    return new PaginationModel({
      totalData: json.totalData,
      totalPage: json.totalPage,
      pageSize: json.pageSize,
      currentPage: json.currentPage,
    });
  }
}
export default PaginationModel;
