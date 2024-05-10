import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    // Дополнительные reducers...
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// import { IUser } from "../../models/IUser";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface UserState {
//   users: IUser[];
//   isLoading: boolean;
//   error: string;
//   count: number;
// }

// const initialState: UserState = {
//   users: [],
//   isLoading: false,
//   error: "",
//   count: 0,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     increment(state, action: PayloadAction<number>) {
//       state.count += action.payload;
//     },
//   },
// });

// export default userSlice.reducer;
