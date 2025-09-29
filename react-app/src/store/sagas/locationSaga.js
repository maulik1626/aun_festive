import { call, put, takeLatest } from "redux-saga/effects";
import {
  detectLocationRequest,
  detectLocationSuccess,
  detectLocationFailure,
  setPermission,
} from "@store/slices/locationSlice";
import { LocationPermissions } from "@services/location/LocationPermissions";
import { LocationManager } from "@services/location/LocationManager";
import { CacheManager } from "@data/datasources/local/CacheManager";

const CACHE_KEY = "location:coords";
const TTL_MS = 30 * 60 * 1000; // 30 minutes

export function* detectLocationWorker() {
  try {
    const cached = yield call([CacheManager, CacheManager.get], CACHE_KEY);
    if (cached) {
      yield put(
        detectLocationSuccess({ coords: cached, source: "cache" })
      );
      return;
    }

    const perm = yield call([LocationPermissions, LocationPermissions.query]);
    yield put(setPermission(perm));

    const detected = yield call([LocationManager, LocationManager.detect], {
      useGpsFirst: true,
    });
    const coords = {
      latitude: detected.latitude,
      longitude: detected.longitude,
      accuracy: detected.accuracy,
    };
    yield call([CacheManager, CacheManager.set], CACHE_KEY, coords, TTL_MS);
    yield put(
      detectLocationSuccess({ coords, source: detected.type || "gps" })
    );
  } catch (err) {
    yield put(detectLocationFailure(err?.message || String(err)));
  }
}

export default function* locationSaga() {
  yield takeLatest(detectLocationRequest.type, detectLocationWorker);
}
