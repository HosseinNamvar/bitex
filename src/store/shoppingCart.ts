import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "@/types/shoppingCart";
import { loadState, saveState } from "./storeLocalStorage";

export interface ICartState {
  items: TCartItem[];
  isVisible: boolean;
}

type QuantityChange = {
  productId: string;
  amount: number;
};

const initialState: ICartState = { isVisible: false, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state: ICartState, action: PayloadAction<TCartItem>) => {
      const isAvailable = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (isAvailable > -1) {
        state.items[isAvailable].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.isVisible = true;
    },
    toggleCart: (state: ICartState, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload.valueOf();
    },
    remove: (state: ICartState, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    modifyQuantity: (
      state: ICartState,
      action: PayloadAction<QuantityChange>
    ) => {
      state.items.map((item) =>
        item.productId === action.payload.productId
          ? (item.quantity += action.payload.amount)
          : ""
      );
    },
  },
});

export const shoppingCartStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState: loadState(),
});
shoppingCartStore.subscribe(() => {
  saveState(shoppingCartStore.getState());
});

export type RootState = ReturnType<typeof shoppingCartStore.getState>;
export type AppDispatch = typeof shoppingCartStore.dispatch;

export const { add, remove, modifyQuantity, toggleCart } = cartSlice.actions;
