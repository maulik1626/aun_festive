import { ProductApiDataSource } from "@data/datasources/remote/products/ProductApiDataSource";
import { BaseRepository } from "@data/repositories/base/BaseRepository";

export class ProductRepository extends BaseRepository {
  async list(params) {
    return ProductApiDataSource.list(params);
  }
  async detail(id) {
    return ProductApiDataSource.detail(id);
  }
}
