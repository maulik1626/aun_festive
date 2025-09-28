import { all, fork } from "redux-saga/effects";
import authSaga from "@store/sagas/authSaga";
import productSaga from "@store/sagas/productSaga";
import cartSaga from "@store/sagas/cartSaga";
import orderSaga from "@store/sagas/orderSaga";
import locationSaga from "@store/sagas/locationSaga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(productSaga),
    fork(cartSaga),
    fork(orderSaga),
    fork(locationSaga),
  ]);
}
