import { Route } from "react-router-dom";
import ProductListView from "@presentation/views/products/ProductListView";
import ProductDetailView from "@presentation/views/products/ProductDetailView";
import CategoryView from "@presentation/views/products/CategoryView";
import SearchView from "@presentation/views/products/SearchView";

export function ProductRoutes() {
  return (
    <Route path="/products">
      <Route index element={<ProductListView />} />
      <Route path=":productId" element={<ProductDetailView />} />
      <Route path="category/:categoryId" element={<CategoryView />} />
      <Route path="search" element={<SearchView />} />
    </Route>
  );
}
