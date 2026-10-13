import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Order = {
  id: string;
  date: string;
  total: number;
  status: string;
  itemsCount: number;
  items: any[];
};

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('orders', JSON.stringify(state.orders));
      }
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    }
  }
});

export const { addOrder, setOrders } = orderSlice.actions;
export default orderSlice.reducer;
