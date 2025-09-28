import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: { coords: null, permission: "prompt", status: "idle" },
  reducers: {},
});

export default locationSlice.reducer;
