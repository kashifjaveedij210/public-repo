import React from "react";
import Link from "next/link";
export default function ListingCard({
    product,
}: {
    product: {
        img: string;
        name: string;
        price: number;
        product_id: string;
        quantity: number;
    };
}) {
    return (
        <div className="flex flex-col xl:flex-row justify-between mt-5 md:bg-blk-100 p-5 rounded-lg shadow-lg bg-blk-50 xl:w-full">
            <div className="flex flex-col items-center">
                <img
                    src={product.img}
                    alt="Product Image"
                    className={`xl:w-52 xl:h-full w-full h-60 object-cover rounded-md`}
                />
                {/* <Image
                    src={product.img}
                    alt="Product Image"
                    width={208} 
                    height={240}
                    className="xl:w-52 xl:h-full w-full h-60 object-cover rounded-md"
                /> */}
            </div>
            <div className="flex flex-col mt-5 xl:mt-0 xl:ml-5 xl:w-52 xl:justify-between w-full">
                <div>
                    <p className="text-lg font-semibold text-white">
                        {product.name}
                    </p>

                    <p className="text-base text-blk-20">
                        Quantity: {product.quantity}
                    </p>
                    <p className="text-base text-blk-20">
                        Total: ₹{product.price}
                    </p>
                </div>
                <div className="mt-8 flex flex-col">
                    <Link
                        href={`/products?id=${product.product_id}`}
                        className="mt-2 bg-pri-100 text-black text-base px-3 py-2 rounded-md hover:bg-pri-20 transition text-center w-full font-semibold"
                    >
                        View Product
                    </Link>

                    <Link
                        href={`/products?id=${product.product_id}`}
                        className="mt-2 bg-rd-50 text-white text-base px-3 py-2 rounded-md hover:bg-rd-100 transition text-center w-full font-semibold"
                    >
                        Unlist Product
                    </Link>
                </div>
            </div>
        </div>
    );
}
