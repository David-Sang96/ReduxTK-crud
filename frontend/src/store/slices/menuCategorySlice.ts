import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MenuCategory {
  id: number;
  name: string;
  price: number;
}

interface menuCategorySlice {
  menuCategories: MenuCategory[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: menuCategorySlice = {
  menuCategories: [],
  isLoading: false,
  error: null,
};

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategories: (state, action: PayloadAction<MenuCategory[]>) => {
      state.menuCategories = action.payload;
    },
    addMenuCategories: (state, action: PayloadAction<MenuCategory>) => {
      state.menuCategories = [...state.menuCategories, action.payload];
    },
    removeMenuCategories: (state, action: PayloadAction<MenuCategory>) => {
      state.menuCategories = state.menuCategories.filter((menuCategory) =>
        menuCategory.id === action.payload.id ? false : true
      );
    },
  },
});

export const { setMenuCategories, addMenuCategories, removeMenuCategories } =
  menuCategorySlice.actions;
export default menuCategorySlice.reducer;
