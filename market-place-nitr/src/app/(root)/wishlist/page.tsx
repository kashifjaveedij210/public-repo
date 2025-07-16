"use client";
import { useAppSelector } from "../../../../hooks/redux";
import { getWishlist } from "../../../../redux/wishlistSlice";
import Wishlist from "@/components/Wishlist";
export default function Page() {
    const wishListItems = useAppSelector(getWishlist);
    return (
        <>
            <Wishlist wishlist={wishListItems} />;
        </>
    );
}
