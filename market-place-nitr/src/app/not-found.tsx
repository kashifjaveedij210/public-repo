import Navbar from "@/components/Navbar";
import NotfoundCard from "@/components/NotfoundCard";
import React from "react";

function NotFound() {
    return (
        <div>
            <Navbar />

            <main className="md:px-20 px-10 h-[80vh] grid place-items-center">
                <NotfoundCard />
            </main>
        </div>
    );
}

export default NotFound;
