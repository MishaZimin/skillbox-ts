import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    // Другие reducers, если они будут
  },
});

export default store;
export type RootState = typeof store.getState;

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../../features/counter/counterSlice";
// import { useReducer } from "react";

// const rootReducer = combineReducers({
//   useReducer,
// });

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//   });
// };

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore["dispatch"];

// export let searchText = "";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
