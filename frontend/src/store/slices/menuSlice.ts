import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Menu, MenuSlice, NewMenu } from "../../types/menu";

const initialState: MenuSlice = {
  menus: [],
  isLoading: false,
  error: null,
};

export const createMenu = createAsyncThunk(
  "menu/createMenu",
  async (newMenu: NewMenu) => {
    try {
      const response = await fetch("http://localhost:5000/menu", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newMenu),
      });
      const { menus } = await response.json();
      return menus;
    } catch (error) {
      console.log(error);
    }
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<Menu[]>) => {
      state.menus = action.payload;
    },
    addMenu: (state, action: PayloadAction<Menu>) => {
      state.menus = [...state.menus, action.payload];
    },
    removeMenu: (state, action: PayloadAction<Menu>) => {
      state.menus = state.menus.filter((menu) =>
        menu.id === action.payload.id ? false : true
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createMenu.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createMenu.fulfilled, (state, action) => {
        state.menus = action.payload;
        state.isLoading = false;
      })
      .addCase(createMenu.rejected, (state) => {
        state.isLoading = false;
        const error = new Error("failed to create menu.");
        state.error = error.message;
      });
  },
});

export const { addMenu, setMenu, removeMenu } = menuSlice.actions;

export default menuSlice.reducer;
