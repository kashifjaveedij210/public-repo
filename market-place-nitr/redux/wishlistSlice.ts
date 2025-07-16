import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface WishlistState {
    wishlist: any[];
}

const initialState: WishlistState = {
    wishlist: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        },
    },
});

export const { addToWishlist } = wishlistSlice.actions;

export const getWishlist = (state: RootState) => state.wishlist.wishlist

export default wishlistSlice.reducer;