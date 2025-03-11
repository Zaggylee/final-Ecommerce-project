import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
/* we had to change the importation name from cartslice.reducer to 
cartreducer here, accordin to their documentation*/

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
