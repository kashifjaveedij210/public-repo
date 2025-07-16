import Profile from "@/components/Profile";
import React from "react";
const product = {
    name: "Camera",
    price: 200,
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    order_id: "1234",
    product_id: "500",
    date: "12 January 2024",
    status: "Delivered",
    payment: "Paid",
};
const products = [product, product, product, product];

const wishlistedProduct = {
    name: "Camera",
    price: 200,
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    product_id: "500",
    soldOut: false,
    shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam assumenda, pariatur ",
    productAge: "2 years",
};

const wishlistedProducts = [
    wishlistedProduct,
    wishlistedProduct,
    wishlistedProduct,
    wishlistedProduct,
];

const mylisting = {
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Camera",
    price: 200,
    product_id: "500",
    quantity: 2,
};

const mylistings = [mylisting, mylisting, mylisting, mylisting];
export default function Page() {
    return (
        <div>
            <Profile
                products={products}
                wishlistedProducts={wishlistedProducts}
                mylistings={mylistings}
            />
            ;
        </div>
    );
}
