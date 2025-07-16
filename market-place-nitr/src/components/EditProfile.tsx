import React from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import user from "../assets/user.jpg";
import { motion } from "framer-motion";
const EditProfile = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.2, 1, 0.2, 1] }}
            exit={{ opacity: 0, y: -100 }}
            className="max-w-xl mx-auto p-6 shadow-md rounded-lg"
        >
            <h1 className="text-3xl  mb-10 text-center">Edit Profile</h1>
            <div className="flex justify-center mb-6">
                <Image
                    src={user}
                    alt="user"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>
            <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                <Input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border rounded-md"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-md"
                />
                <Input
                    type="text"
                    placeholder="Phone"
                    className="w-full p-3 border rounded-md"
                />
                <Input
                    type="text"
                    placeholder="Roll No"
                    className="w-full p-3 border rounded-md"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border rounded-md"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-3 border rounded-md"
                />
            </div>
            <Button className="btn-primary w-full mt-5">Update</Button>
        </motion.div>
    );
};

export default EditProfile;
