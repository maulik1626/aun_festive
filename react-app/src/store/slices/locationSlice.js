import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    coords: null,
    permission: "prompt",
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    source: null, // 'gps' | 'ip' | 'cache' | 'manual'
    error: null,
    lastDetectedAt: null,
  },
  reducers: {
    detectLocationRequest(state) {
      state.status = "loading";
      state.error = null;
    },
    detectLocationSuccess(state, action) {
      state.status = "succeeded";
      state.coords = action.payload.coords;
      state.source = action.payload.source;
      state.lastDetectedAt = Date.now();
    },
    detectLocationFailure(state, action) {
      state.status = "failed";
      state.error = action.payload || "Failed to detect location";
    },
    setPermission(state, action) {
      state.permission = action.payload;
    },
    setManualLocation(state, action) {
      state.coords = action.payload;
      state.source = "manual";
      state.status = "succeeded";
      state.lastDetectedAt = Date.now();
    },
    clearLocation(state) {
      state.coords = null;
      state.source = null;
      state.status = "idle";
      state.error = null;
    },
  },
});

export const {
  detectLocationRequest,
  detectLocationSuccess,
  detectLocationFailure,
  setPermission,
  setManualLocation,
  clearLocation,
} = locationSlice.actions;

export default locationSlice.reducer;
