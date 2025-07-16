import Link from "next/link";
import React from "react";

export default function ProductCard({
    product,
}: {
    product: {
        name: string;
        price: number;
        img: string;
        product_id: string;
        order_id?: string;
        date?: string;
        status?: string;
        payment?: string;
        soldOut?: boolean;
        shortDescription?: string;
        productAge?: string;
    };
}) {
    return (
        <div className="flex flex-col xl:flex-row justify-between mt-5 md:bg-blk-100 p-5 rounded-lg shadow-lg bg-blk-50 xl:w-full ">
            <div className="flex flex-col items-center">
                <img
                    src={product.img}
                    alt="Product Image"
                    className={`xl:w-52 xl:h-full w-full h-52 object-cover rounded-md ${
                        product.soldOut ? "grayscale" : ""
                    }`}
                />
            </div>
            <div className="flex flex-col mt-5 xl:mt-0 xl:ml-5 xl:w-52 xl:justify-between w-full">
                <div>
                    <p className="text-lg font-semibold text-white">
                        {product.name}
                    </p>
                    {product.order_id && (
                        <p className="text-base text-blk-20">
                            Order ID: {product.order_id}
                        </p>
                    )}
                    {product.shortDescription && (
                        <p className="text-base text-blk-20">
                            {product.shortDescription}
                        </p>
                    )}
                    {product.productAge && (
                        <p className="text-base text-blk-20">
                            Age: {product.productAge}
                        </p>
                    )}

                    {product.date && (
                        <p className="text-base text-blk-20">
                            Date: {product.date}
                        </p>
                    )}
                    {product.status && (
                        <p className="text-base text-blk-20">
                            Status: {product.status}
                        </p>
                    )}
                    <p className="text-base text-blk-20">
                        Total: ₹{product.price}
                    </p>
                    {product.payment && (
                        <p className="text-base text-blk-20">
                            Payment: {product.payment}
                        </p>
                    )}
                </div>
                <div className="mt-8">
                    {product.soldOut ? (
                        <button className="btn-secondary">Sold out</button>
                    ) : (
                        <Link
                            href={`/products?id=${product.product_id}`}
                            className="mt-2 bg-pri-100 text-black text-base px-3 py-2 rounded-md hover:bg-pri-20 transition text-center w-full font-semibold"
                        >
                            View Product
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
