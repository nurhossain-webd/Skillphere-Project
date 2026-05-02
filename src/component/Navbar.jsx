import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    // Temporary user condition
    // Later we will replace this with real auth user
    const user = false;

    const navLinks = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/courses">Courses</Link>
            </li>
            <li>
                <Link href="/my-profile">My Profile</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10 sticky top-0 z-50">

            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                    >
                        {navLinks}
                    </ul>
                </div>

                <Link href="/" className="btn btn-ghost text-2xl font-bold text-orange-500">
                    SkillSphere
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">{navLinks}</ul>
            </div>


            <div className="navbar-end gap-3">
                {user ? (
                    <>

                        <button className="btn bg-orange-500 text-white hover:bg-orange-600 border-none">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="btn btn-ghost">
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="btn bg-orange-500 text-white hover:bg-orange-600 border-none"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;