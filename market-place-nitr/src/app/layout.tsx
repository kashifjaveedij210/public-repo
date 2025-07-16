import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "@/components/ReduxProvider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--poppins",
});
const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--dm_sans",
});

export const metadata: Metadata = {
    title: "NITR - MarketPlace",
    description: "A marketplace for NITR students to buy and sell products.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ReduxProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <main className="bg-blk-100 text-white">
                            <Toaster
                                position="top-center"
                                toastOptions={{
                                    className: "",
                                    style: {
                                        borderRadius: "50px",
                                        padding: "16px",
                                        color: "#000",
                                        background: "#c0ef55",
                                        // border: "2px solid #c0ef55",
                                    },
                                    iconTheme: {
                                        primary: "#000",
                                        secondary: "#c0ef55",
                                    },
                                }}
                            />

                            {children}
                        </main>
                    </ThemeProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
