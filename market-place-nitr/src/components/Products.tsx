"use client";
import ProductCard2 from "@/components/ProductCard2";
import { Input } from "@/components/ui/input";
import React from "react";
import { motion } from "framer-motion";

export default function Products({ products = [] }: { products?: any[] }) {
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
            <div className="flex flex-col mtb:flex-row xl:items-center justify-between w-full">
                <h1 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-0">
                    Products
                </h1>
                <Input
                    placeholder="Search.."
                    className="w-full mtb:w-96 rounded-2xl outline outline-1 outline-[#5d5d5d] py-2 lg:py-5"
                />
            </div>
            <p className="my-5 text-lg">Showing 10 results for query</p>
            <div className="columns-1 mtb:columns-2 lg:columns-3 gap-5 space-y-5 w-full">
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductCard2 key={product.id} product={product} />
                    ))}
            </div>
        </motion.main>
    );
}
