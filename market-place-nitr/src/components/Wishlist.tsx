"use client";
import { motion } from "framer-motion";
import React from "react";
import ProductCard2 from "./ProductCard2";
import Banner from "./Banner";
interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
}
export default function Wishlist({ wishlist }: { wishlist: Product[] }) {
    return (
        <motion.main
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.2, 1, 0.2, 1],
            }}
            className="p-5 md:p-10 lg:p-20 h-full"
        >
            <h1 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-10">
                My WishList
            </h1>
            {wishlist.length > 0 ? (
                <div className="columns-1 mtb:columns-2 lg:columns-3 gap-5 space-y-5 w-full">
                    {wishlist.map((product) => (
                        <ProductCard2 key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <Banner
                    title="Your wishlist is empty"
                    description="Looks like you haven't added anything to your wishlist yet."
                    buttonLink="/products"
                    buttonText="Continue shopping"
                />
            )}
        </motion.main>
    );
}
