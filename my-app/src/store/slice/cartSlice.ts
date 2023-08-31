import { Products } from '@/utils/mock';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Slice } from 'lucide-react'


export interface CartState {
 items: Array<any>;
 totalQuantity: number; 
  totalAmount:number;

}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, actions : PayloadAction<any>) => {
      const newProduct = actions.payload.Product;
      const alreadyProduct = state.items.find(
        (Product )=>Product.id===newProduct.id);

        if(alreadyProduct){

        }else{
          state.totalQuantity += actions.payload.quantity;
        }



     
      console.log(actions);
    },

    removeFromCart: (state, actions :PayloadAction<any>) => {
      state.totalQuantity -= actions.payload.quantity; 
     
     
     
     
      // state.value < 0 ? 0 : nextopphealth
      // state.value ? 0:-1
    },

    clearCart: (state, action: PayloadAction<number>) => {
      state=initialState;
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer 