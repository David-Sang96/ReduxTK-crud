import { configureStore } from "@reduxjs/toolkit";
import menuCategoryReducer from "./slices/menuCategorySlice";
import menuReducer from "./slices/menuSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    menuCategory: menuCategoryReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
