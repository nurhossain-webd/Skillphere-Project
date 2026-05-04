import Link from "next/link";
import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
    return (
        <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5 py-16">
            <div className="max-w-xl w-full rounded-3xl bg-white p-10 text-center shadow-lg border border-orange-100">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-3xl">
                    <FaSearch />
                </div>

                <h1 className="mt-6 text-6xl font-extrabold text-orange-500">404</h1>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    Page Not Found
                </h2>

                <p className="mt-4 text-slate-600 leading-7">
                    Sorry, the page you are looking for does not exist or may have been
                    moved. Please go back to the homepage and continue exploring courses.
                </p>

                <Link
                    href="/"
                    className="btn mt-8 border-none bg-orange-500 text-white hover:bg-orange-600"
                >
                    <FaHome />
                    Back to Home
                </Link>
            </div>
        </section>
    );
}