import { CartApiDataSource } from "@data/datasources/remote/cart/CartApiDataSource";
import { BaseRepository } from "@data/repositories/base/BaseRepository";

export class CartRepository extends BaseRepository {
  get() {
    return CartApiDataSource.get();
  }
  addItem(productId, quantity) {
    return CartApiDataSource.addItem(productId, quantity);
  }
  removeItem(productId) {
    return CartApiDataSource.removeItem(productId);
  }
  updateItem(productId, quantity) {
    return CartApiDataSource.updateItem(productId, quantity);
  }
  clear() {
    return CartApiDataSource.clear();
  }
}
