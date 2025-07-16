"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenu";
import { Heart, LogOut, ShoppingCart, User } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";
export default function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const userToken = localStorage.getItem("token_mpnit");
        if (userToken !== "undefined") {
            setIsLoggedIn(true);
            // console.log("User is logged in");
        }
        // console.log(userToken);
    }, []);
    function triggerModal() {
        const trigger = document.getElementById("triggerLoginModal");
        trigger?.click();
    }

    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    async function handleLogout() {
        try {
            await axios.get(apiEndpoint + "/users/signout");
            localStorage.removeItem("token_mpnit");
            setIsLoggedIn(false);
            toast.success("Logged out successfully");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            className="sticky top-0 z-50"
        >
            <nav className="lg:px-24 px-5 md:px-14 py-8 flex flex-row items-center justify-between  bg-blk-100 backdrop-blur-3xl bg-opacity-85">
                <Link
                    href={"/"}
                    id="logo"
                    className={`text-3xl ${
                        isLoggedIn ? "" : "md:hidden"
                    } lg:block`}
                >
                    Logo
                </Link>
                {!isLoggedIn && (
                    <div id="center" className="md:flex flex-row gap-10 hidden">
                        <Link href={"/"} className="active-link">
                            Home
                        </Link>
                        <Link href={"/about"} className="link">
                            About
                        </Link>
                        <Link href={"/contact"} className="link">
                            Contact
                        </Link>
                        <Link href={"/products"} className="link">
                            Products
                        </Link>
                    </div>
                )}
                <div className="">
                    {isLoggedIn ? (
                        <div className="items-center hidden md:flex gap-5">
                            <Link
                                href={"/profile"}
                                className="btn-outline-icon"
                            >
                                <User size={22} />
                            </Link>
                            <Link href="/cart" className="btn-outline-icon">
                                <ShoppingCart size={22} />
                            </Link>
                            <Link
                                href={"/wishlist"}
                                className="btn-outline-icon"
                            >
                                <Heart size={22} />
                            </Link>
                            <button
                                className="btn-outline-icon"
                                onClick={handleLogout}
                            >
                                <LogOut size={22} />
                            </button>
                        </div>
                    ) : (
                        <button
                            className="btn-primary hidden md:block"
                            onClick={triggerModal}
                        >
                            Login
                        </button>
                    )}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                    >
                        <Hamburger size={24} toggled={menuIsOpen} />
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {menuIsOpen && (
                    <MobileMenu
                        closeMenu={() => setMenuIsOpen(false)}
                        triggerModal={triggerModal}
                        handleLogout={handleLogout}
                        isLoggedIn={isLoggedIn}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}
