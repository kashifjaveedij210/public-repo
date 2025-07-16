"use client";
import { useState } from "react";
import Orders from "@/components/Orders";
import UserCard from "@/components/UserCard";
import { motion, AnimatePresence } from "framer-motion";
import MyListings from "@/components/MyListings";
import EditProfile from "@/components/EditProfile";
import ProfileWishlist from "./ProfileWishlist";
export default function Profile({
    products,
    wishlistedProducts,
    mylistings,
}: {
    products: any[];
    wishlistedProducts: any[];
    mylistings: any[];
}) {
    const [activeTab, setActiveTab] = useState("orders");
    return (
        <main className="grid place-items-center gap-10 md:px-20 md:py-10 p-5">
            <div className="flex flex-col xl:flex-row w-full justify-around mt-10 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, ease: [0.2, 1, 0.2, 1] }}
                    className="flex flex-col items-center justify-center"
                >
                    <h1 className="text-3xl mb-10">My Profile</h1>
                    <UserCard
                        user={{
                            name: "John Doe",
                            email: "johndoe@gmail.com",
                            phone: "9340123632",
                            img: "",
                            rollno: "123ch2324",
                        }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <button
                            className={
                                activeTab === "orders"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("orders")}
                        >
                            My Orders
                        </button>
                        <button
                            className={
                                activeTab === "wishlist"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("wishlist")}
                        >
                            My Wishlist
                        </button>
                        <button
                            className={
                                activeTab === "mylistings"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("mylistings")}
                        >
                            My Listings
                        </button>
                        <button
                            className={
                                activeTab === "profile"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("profile")}
                        >
                            Edit Profile
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.3,
                        ease: [0.2, 1, 0.2, 1],
                        delay: 0.2,
                    }}
                    className="md:bg-blk-50 rounded-xl md:px-5 md:py-5 overflow-y-scroll h-[33rem] w-full"
                >
                    <AnimatePresence>
                        {activeTab === "orders" && (
                            <Orders products={products} />
                        )}
                        {activeTab === "wishlist" && (
                            <ProfileWishlist products={wishlistedProducts} />
                        )}
                        {activeTab === "mylistings" && (
                            <MyListings products={mylistings} />
                        )}
                        {activeTab === "profile" && <EditProfile />}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
