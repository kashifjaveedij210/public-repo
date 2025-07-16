"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
    "Loading awesome products...",
    "Just a moment, bringing you greatness...",
    "Hang tight, fetching the best deals...",
    "Your goodies are on their way...",
    "Hold on, amazing items are coming up...",
    "Preparing your exclusive offers...",
    "Almost there, stay tuned...",
    "Fetching your favorite items...",
    "Getting things ready for you...",
    "Making magic happen...",
    "Loading top-notch selections...",
    "Curating the best products for you...",
    "Just a sec, delivering excellence...",
    "Loading your personalized picks...",
    "Hold tight, wonders are incoming...",
    "Bringing you the best deals...",
    "Gathering awesomeness just for you...",
    "Your patience will be rewarded...",
    "Good things are worth the wait...",
    "Loading, please stay with us...",
];

export default function Loader2() {
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => (prevText + 1) % loadingTexts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-[80vh] w-full">
            <div className="relative w-full">
                <AnimatePresence>
                    <motion.div
                        key={currentText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center text-2xl  text-center"
                    >
                        {loadingTexts[currentText]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
