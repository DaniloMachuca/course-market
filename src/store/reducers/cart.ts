import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "@/data/data";

type Cart = {
  list: Course[];
};

const initialState: Cart = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Course>) => {
      const ExistingCourse = state.list.find((c) => c.id === action.payload.id);
      if (!ExistingCourse) {
        state.list.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
