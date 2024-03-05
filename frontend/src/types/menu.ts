interface BaseMenu {
  name: string;
  price: number;
}

export interface Menu extends BaseMenu {
  id: number;
}

export interface NewMenu extends BaseMenu {}

export interface MenuSlice {
  menus: Menu[];
  isLoading: boolean;
  error: string | null;
}
