import map from "./../assets/mapPin.svg";
import mail from "./../assets/mail.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import whtsapp from "./../assets/whatsapp.svg";
import ellipse from "./../assets/ellipse.svg";
export default function Footer() {
    return (
        <footer className="relative">
            <div className="flex items-center justify-center w-screen">
                <Image
                    src={ellipse}
                    alt="ellipse"
                    width={1000}
                    className="-z-0 top-16 md:top-10 absolute"
                />
            </div>
            <section className="px-5 md:px-16 lg:px-32 py-14  z-10">
                <main className="bg-[#16161b] rounded-3xl pt-20 pb-10">
                    <div className=" bg-opacity-96 grid place-items-center ">
                        <h1 className="text-2xl">LOGO</h1>
                        <div className="mt-10 grid grid-cols-2 md:flex gap-5 text-sm text-blk-20 *:text-center">
                            <Link
                                href={"/about"}
                                className="mb-5 hover:text-white duration-500"
                            >
                                About Us
                            </Link>
                            <Link
                                href={"/contact"}
                                className="mb-5 hover:text-white duration-500"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/privacy"
                                className="mb-5 hover:text-white duration-500"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="mb-5 hover:text-white duration-500"
                            >
                                Terms of Service
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-5 *:text-sm ">
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={map}
                                    alt="map"
                                    width={20}
                                    height={20}
                                />
                                <p>NIT Rourkela</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={mail}
                                    alt="mail"
                                    width={20}
                                    height={20}
                                />
                                <p>mail@mail.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={whtsapp}
                                    alt="mail"
                                    width={20}
                                    height={20}
                                />
                                <p>Join us!</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 ">
                        <p className="text-sm text-center">
                            © 2021 NITR MarketPlace
                        </p>
                    </div>
                </main>
            </section>
        </footer>
    );
}
