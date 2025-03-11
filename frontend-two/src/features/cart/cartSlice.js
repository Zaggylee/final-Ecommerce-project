import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //array to store items we add to the cart
    cartItems: [],
    //to store the total cost of items in the cart
    totalCost: 0,
  },
  reducers: {
    //function to add items to cart
    addItemToCart: (state, action) => {
      //this checks if an item already exists in the cart
      const productAlreadyInCart = state.cartItems.find(
        (item) => item.product_id === action.payload.product_id
      );
      //if it exists in the cart then do not go any further
      if (productAlreadyInCart !== undefined) {
        return;
      }
      //this runs if the product doesnt exist in the cart
      state.cartItems = [action.payload, ...state.cartItems];
      console.log("user has added item ", state.cartItems);
      //the action.payload is the task to be performed on the cart items while the ...state.cartitems is the initial stae of the cartitems before the action

      //calculate the total cost of all iems in the cartItems array
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });
      state.totalCost = tempTotal;
      //calculating ends here
    },

    //function to increase items in cart
    increaseProductQty: (state, action) => {
      const updatedProducts = state.cartItems.map((item) => {
        if (item.product_id === action.payload) {
          item.product_quantity += 1;
        }
        return item;
      });
      state.cartItems = updatedProducts;

      //calculate the total cost of all iems in the cartItems array
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });
      state.totalCost = tempTotal;
      //calculating ends here
    },

    //function to decrease items in cart
    decreaseProductQty: (state, action) => {
      const updatedProducts = state.cartItems.map((item) => {
        if (item.product_id === action.payload && item.product_quantity > 1) {
          item.product_quantity -= 1;
        }
        return item;
      });
      state.cartItems = updatedProducts;
      //calculate the total cost of all iems in the cartItems array
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });
      state.totalCost = tempTotal;
      //calculating ends here
    },
    //function to delete item from cart
    deleteCartItem: (state, action) => {
      const updatedProducts = state.cartItems.filter(
        (item) => item.product_id !== action.payload
      );
      state.cartItems = updatedProducts;

      //calculate the total cost of all iems in the cartItems array
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });
      state.totalCost = tempTotal;
      //calculating ends here
    },
  },
});

export const {
  addItemToCart,
  increaseProductQty,
  decreaseProductQty,
  deleteCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
