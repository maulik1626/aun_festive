import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
});

export default ordersSlice.reducer;
