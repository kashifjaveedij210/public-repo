"use client";
import React from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addToCart, getCart } from "../../redux/cartSlice";
import { addToWishlist, getWishlist } from "../../redux/wishlistSlice";
import { useState, useEffect } from "react";
import CustomLoader from "./CustomLoader";

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
}

export default function ProductCard2({ product }: { product: Product }) {
    const [state, setState] = useState({
        isAddedToCart: false,
        isAddedToWishlist: false,
    });

    const cartItems: Product[] = useAppSelector(getCart);
    const wishlistItems: Product[] = useAppSelector(getWishlist);
    useEffect(() => {
        if (cartItems.length > 0) {
            cartItems.forEach((item) => {
                if (item.id === product.id) {
                    setState({ ...state, isAddedToCart: true });
                }
            });
        }
        if (wishlistItems.length > 0) {
            wishlistItems.forEach((item) => {
                if (item.id === product.id) {
                    setState({ ...state, isAddedToWishlist: true });
                }
            });
        }
    }, []);

    const [loading, setLoading] = useState({
        cart: false,
        wishlist: false,
    });

    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        // just to simulate backend request
        setLoading({ ...loading, cart: true });

        const timer = setTimeout(() => {
            setState({ ...state, isAddedToCart: true });
            setLoading({ ...loading, cart: false });
        }, 1000);
        dispatch(addToCart(product));

        return () => clearTimeout(timer);
    };

    const handleAddToWishlist = () => {
        setLoading({ ...loading, wishlist: true });

        const timer = setTimeout(() => {
            setState({ ...state, isAddedToWishlist: true });
            setLoading({ ...loading, wishlist: false });
        }, 1000);

        dispatch(addToWishlist(product));
        return () => clearTimeout(timer);
    };

    return (
        <section className="flex flex-col p-5 outline outline-1 outline-[#5d5d5d] rounded-2xl hover:outline-pri-50 duration-300 h-auto w-full break-inside-avoid">
            <div className="relative">
                <Image
                    src={product?.image}
                    alt="product"
                    width={500}
                    height={500}
                    className="rounded-2xl w-full h-auto"
                />
                <div className="flex flex-row gap-2 absolute top-0 right-0 p-2">
                    <button
                        className="btn-wishlist"
                        onClick={handleAddToCart}
                        disabled={loading.cart}
                    >
                        {loading.cart ? (
                            <CustomLoader size={24} />
                        ) : (
                            <ShoppingCart
                                fill={state.isAddedToCart ? "#fff" : "#000"}
                            />
                        )}
                    </button>
                    <button
                        className="btn-wishlist"
                        onClick={handleAddToWishlist}
                        disabled={loading.wishlist}
                    >
                        {loading.wishlist ? (
                            <CustomLoader size={24} />
                        ) : (
                            <Heart
                                fill={state.isAddedToWishlist ? "#fff" : "#000"}
                            />
                        )}
                    </button>
                </div>
            </div>
            <article>
                <div className="flex items-center justify-between my-5">
                    <h2 className="capitalize font-semibold text-xl">
                        {product?.name}
                    </h2>
                    <div className="bg-white p-3 text-blk-100 rounded-xl font-semibold">
                        ₹&nbsp;{product?.price}
                    </div>
                </div>
                <p className="mt-3 mb-8 text-blk-10">{product?.description}</p>
                <div className="flex flex-col md:flex-row items-center gap-3 w-full justify-between">
                    <button className="btn-outline2 px-4 py-3 w-full md:w-auto">
                        View Product
                    </button>
                    <button className="btn-outline2 px-4 py-3 w-full md:w-auto">
                        Buy Product
                    </button>
                </div>
            </article>
        </section>
    );
}
