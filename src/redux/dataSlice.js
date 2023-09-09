import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 101,
      name: "Shirts",
      parent_id: null,
    },
    {
      id: 102,
      name: "Scarves",
      parent_id: null,
    },
    {
      id: 103,
      name: "Jeans",
      parent_id: null,
    },
    {
      id: 1011,
      name: "Long Sleeve",
      parent_id: 101,
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
    },
    deleteData(state, action) {
      state.data = state.data.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addData, deleteData } = dataSlice.actions;

export default dataSlice.reducer;
