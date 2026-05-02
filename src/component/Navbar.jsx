import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
    const user = false;

    const navLinks = (
        <>
            <li>
                <NavLink href="/">Home</NavLink>
            </li>
            <li>
                <NavLink href="/courses">Courses</NavLink>
            </li>
            <li>
                <NavLink href="/my-profile">My Profile</NavLink>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 border-b border-orange-100 bg-white shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-slate-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-3 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center ">
                        <Image
                            src="/images/skillsphere-logo.png"
                            alt="SkillSphere Logo"
                            width={82}
                            height={82}
                            className="object-contain"
                        />

                        <h1 className="text-2xl font-extrabold tracking-tight">
                            <span className="text-slate-900">Skill</span>
                            <span className="text-orange-500">Sphere</span>
                        </h1>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1">{navLinks}</ul>
                </div>

                <div className="navbar-end gap-3">
                    {user ? (
                        <>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                                U
                            </div>

                            <button className="btn border-none bg-orange-500 text-white hover:bg-orange-600">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="btn bg-white px-6 text-slate-800 border border-slate-300 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="btn border-none bg-orange-500 px-6 text-white hover:bg-orange-600"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;