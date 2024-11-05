"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Products",
        path: "/products",
    },
    {
        name: "Services",
        path: "/services",
        dropdown: [
            { name: "Red Teaming", path: "/services/red-teaming" },
            { name: "Blue Teaming", path: "/services/blue-teaming" },
        ],
    },
    {
        name: "Blog",
        path: "/blog",
    },
    {
        name: "About Us",
        path: "/about",
    },
]


const Nav = () => {
    const pathname = usePathname();
    return ( 
        <nav className="flex gap-8 stext-[#362d59] ">
            {links.map((link, index)=>{
                const isServices = link.name === "Services";

                return (
                    <div className="">
                        <Link 
                        key={index} 
                        href={link.path} 
                        className={`${
                            link.path === pathname 
                            && "border-yellow-400 border-b-2"
                            || index === 2  } uppercase font-medium hover:text-red-400 transition-all`}>
                        {link.name}
                        </Link>
                    </div>
                )
            })}
        </nav>
    )
}

export default Nav