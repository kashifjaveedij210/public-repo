"use client";
import { useEffect, useState } from "react";
import Products from "@/components/Products";
import Loader2 from "@/components/Loader2";
import axios from "axios";
import toast from "react-hot-toast";
import Banner from "@/components/Banner";
const products = [
    {
        id: 1,
        name: "Smartphone",
        price: 799,
        description:
            "A high-end smartphone with a sleek design, powerful processor, and excellent camera quality.",
        image: "https://images.pexels.com/photos/6632995/pexels-photo-6632995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 2,
        name: "Laptop",
        price: 1299,
        description:
            "A powerful laptop with a fast processor, ample storage, and high-resolution display, perfect for work and entertainment.",
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 3,
        name: "Wireless Headphones",
        price: 199,
        description:
            "Comfortable wireless headphones with noise-canceling features and long battery life.",
        image: "https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 249,
        description:
            "A stylish smart watch with fitness tracking, heart rate monitoring, and notification features.",
        image: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 5,
        name: "4K TV",
        price: 999,
        description:
            "A 55-inch 4K Ultra HD TV with stunning picture quality and smart TV capabilities.",
        image: "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 6,
        name: "Gaming Console",
        price: 499,
        description:
            "A popular gaming console with a vast library of games and immersive graphics.",
        image: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        price: 149,
        description:
            "A portable Bluetooth speaker with rich sound quality and a durable design.",
        image: "https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 8,
        name: "Digital Camera",
        price: 649,
        description:
            "A high-resolution digital camera with interchangeable lenses and advanced features for photography enthusiasts.",
        image: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 9,
        name: "Fitness Tracker",
        price: 99,
        description:
            "A sleek fitness tracker that monitors your activity levels, sleep patterns, and more.",
        image: "https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 10,
        name: "Tablet",
        price: 599,
        description:
            "A versatile tablet with a high-resolution display, powerful processor, and a variety of apps for work and play.",
        image: "https://images.pexels.com/photos/2320369/pexels-photo-2320369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];
const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
export default function Page() {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token_mpnit") === "undefined") {
            setLoggedIn(false);
            console.log("User is not logged in");
            return;
        }
        getProducts();
    }, []);

    async function getProducts() {
        setLoading(true);
        try {
            const response = await axios.get(apiEndpoint + "/products/get");
            const data = response.data;
            console.log(data);
        } catch (e: any) {
            console.error(e.message);
            if (e.response?.data?.message === "Unauthorized") {
                toast.error("Please login to view products");
                return;
            }
            toast.error(
                e.response?.data?.message || "Failed to fetch products"
            );
        } finally {
            setLoading(false);
        }
    }
    return (
        <main>
            <div className="grid place-items-center h-[80vh] px-20">
                {!loggedIn && (
                    <Banner
                        title="Welcome!"
                        description="Sign in to explore more and start shopping."
                    />
                )}
            </div>
            {loggedIn &&
                (loading ? <Loader2 /> : <Products products={products} />)}
        </main>
    );
}
