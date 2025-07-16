"use client";
import { motion } from "framer-motion";
import ListingCard from "./ListingCard";
export default function MyListings({
    products,
}: {
    products: {
        img: string;
        name: string;
        price: number;
        product_id: string;
        quantity: number;
    }[];
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.2, 1, 0.2, 1] }}
            exit={{ opacity: 0, y: -100 }}
            className=""
        >
            <h2 className="text-2xl capitalize">My Orders</h2>
            <div className="flex items-center gap-2 my-5">
                <button className="btn-primary2 py-1 px-2 ">Delivered</button>
                <button className="btn-outline2 py-1 px-2">Processing</button>
                <button className="btn-outline2 py-1 px-2">Cancelled</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                {products.map((product, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.3,
                            ease: [0.2, 1, 0.2, 1],
                            delay: 0.15 * index,
                        }}
                        key={index}
                    >
                        <ListingCard key={index} product={product} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
