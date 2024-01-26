import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products : [] ,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const item = state.products.find((item) => item.id === action.payload.id)
        if(item) {
            item.quantity += action.payload.quantity
        } else {
            state.products.push(action.payload)
        }
    },
    deleteProduct: (state,action) => {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
    increaseQuantity: (state,action) => {
      const item = state.products.find((item) => item.id === action.payload)
      item.quantity +=1 
    },
    decreaseQuantity: (state,action) => {
      const item = state.products.find((item) => item.id === action.payload)
      if (item.quantity > 0 ) {
        item.quantity -=1
      } else {
        item.quantity = 0
      }
    },
    clearCart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteProduct, clearCart , increaseQuantity , decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer