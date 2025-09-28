export class ApiResponse {
  constructor({ data, meta, error }) {
    this.data = data;
    this.meta = meta;
    this.error = error;
  }
}
