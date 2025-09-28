import { describe, it, expect, vi } from "vitest";
import * as ProductDS from "@data/datasources/remote/products/ProductApiDataSource";
import { ProductRepository } from "./ProductRepository";

describe("ProductRepository", () => {
  it("delegates list to datasource", async () => {
    const spy = vi.spyOn(ProductDS, "ProductApiDataSource", "get");
    spy.mockReturnValue({ list: vi.fn().mockResolvedValue([{}]) });
    const repo = new ProductRepository();
    const res = await repo.list();
    expect(Array.isArray(res)).toBe(true);
    spy.mockRestore();
  });
});
