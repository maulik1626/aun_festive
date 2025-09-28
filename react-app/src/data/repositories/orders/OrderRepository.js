import { OrderApiDataSource } from "@data/datasources/remote/orders/OrderApiDataSource";
import { BaseRepository } from "@data/repositories/base/BaseRepository";

export class OrderRepository extends BaseRepository {
  list() {
    return OrderApiDataSource.list();
  }
  detail(id) {
    return OrderApiDataSource.detail(id);
  }
  create(payload) {
    return OrderApiDataSource.create(payload);
  }
}
