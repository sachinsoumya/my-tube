import { createSlice } from "@reduxjs/toolkit";

const SearchValue = createSlice({
  name: "SearchValue",
  initialState: {
    results: "",
  },

  reducers: {
    searchResullts: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { searchResullts } = SearchValue.actions;
export default SearchValue.reducer;
