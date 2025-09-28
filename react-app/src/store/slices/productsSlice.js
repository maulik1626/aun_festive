import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
});

export default productsSlice.reducer;
