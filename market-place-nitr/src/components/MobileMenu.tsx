"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function MobileMenu({
    closeMenu,
    triggerModal,
    handleLogout,
    isLoggedIn,
}: {
    closeMenu: () => void;
    triggerModal: () => void;
    handleLogout: () => void;
    isLoggedIn: boolean;
}) {
    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 500 }}
            exit={{ opacity: 0, y: 500 }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.2, 1], delay: 0.1 }}
            className="h-screen absolute w-full bg-blk-100 backdrop-blur-md bg-opacity-80"
        >
            <div className="flex flex-col items-center justify-center h-[80%] gap-10 text-xl">
                {isLoggedIn ? (
                    <>
                        <button
                            className="link"
                            onClick={() => {
                                handleLogout();
                                closeMenu();
                            }}
                        >
                            Logout
                        </button>
                        <Link href="/profile" className="link">
                            Profile
                        </Link>
                    </>
                ) : (
                    <button
                        className="link"
                        onClick={() => {
                            triggerModal();
                            closeMenu();
                        }}
                    >
                        Login
                    </button>
                )}
                <Link href="/" className="link" onClick={closeMenu}>
                    Home
                </Link>
                <Link href="/about" className="link" onClick={closeMenu}>
                    About
                </Link>
                <Link href="/contact" className="link" onClick={closeMenu}>
                    Contact
                </Link>
                <Link href="/products" className="link" onClick={closeMenu}>
                    Products
                </Link>
            </div>
        </motion.div>
    );
}
