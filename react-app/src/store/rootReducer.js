import { combineReducers } from "@reduxjs/toolkit";
import auth from "@store/slices/authSlice";
import products from "@store/slices/productsSlice";
import cart from "@store/slices/cartSlice";
import orders from "@store/slices/ordersSlice";
import user from "@store/slices/userSlice";
import location from "@store/slices/locationSlice";
import ui from "@store/slices/uiSlice";

export const rootReducer = combineReducers({
  auth,
  products,
  cart,
  orders,
  user,
  location,
  ui,
});
