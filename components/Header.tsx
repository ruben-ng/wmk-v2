"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";
import Image from "next/image";
import Logo from "./images/Logo-hitam.png";
import LogoPutih from "./images/logo.svg";

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 xl:py-2 border-b-[1px]  ${
        scroll 
        ? "bg-white text-black shadow-md" 
        : "bg-transparent text-white"
    } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <Image src={scroll ? Logo : LogoPutih} width={50} height={50} alt="ProtectSphere" />
                <h1 className="uppercase font-logoFont">ProtectSphere</h1>
            </Link>

            {/* Desktop Navbar */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>Contact Us</Button>
                </Link>
            </div>

            {/* Mobile Navbar */}
            <div className="xl:hidden">
                <div>Mobile Navbar</div>
            </div>
        </div>
    </header>
  )
}

export default Header