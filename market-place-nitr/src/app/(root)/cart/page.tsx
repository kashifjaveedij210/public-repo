"use client";
import Cart from "@/components/Cart";
import { useAppSelector } from "../../../../hooks/redux";
import { getCart } from "../../../../redux/cartSlice";

const Page = () => {
    const cart = useAppSelector(getCart);

    return (
        <>
            <Cart cart={cart} />
        </>
    );
};

export default Page;
