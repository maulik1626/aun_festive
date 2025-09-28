export class PaginationModel {
  constructor({ page = 1, pageSize = 20, total = 0 }) {
    this.page = page;
    this.pageSize = pageSize;
    this.total = total;
  }
}
