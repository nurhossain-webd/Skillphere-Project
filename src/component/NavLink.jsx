"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive =
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={`relative px-4 py-2 font-medium transition ${isActive
                    ? "text-orange-500"
                    : "text-slate-700 hover:text-orange-500"
                }`}
        >
            {children}

            {isActive && (
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-10 -translate-x-1/2 rounded-full bg-orange-500"></span>
            )}
        </Link>
    );
};

export default NavLink;