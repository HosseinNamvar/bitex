import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "@/types/shoppingCart";

interface CartState {
  items: TCartItem[];
  isVisible: boolean;
}

type QuantityChange = {
  productId: number;
  amount: number;
};

const initialState: CartState = { isVisible: false, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state: CartState, action: PayloadAction<TCartItem>) => {
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
    toggleCart: (state: CartState, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload.valueOf();
    },
    remove: (state: CartState, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    modifyQuantity: (
      state: CartState,
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

export const { add, remove, modifyQuantity, toggleCart } = cartSlice.actions;

export const shoppingCartStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof shoppingCartStore.getState>;
export type AppDispatch = typeof shoppingCartStore.dispatch;
