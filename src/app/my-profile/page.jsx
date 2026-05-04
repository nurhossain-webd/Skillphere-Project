"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function MyProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-orange-50">
                <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </section>
        );
    }

    if (!user) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-orange-50 px-5">
                <div className="max-w-md rounded-3xl bg-white p-8 text-center shadow-lg border border-orange-100">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Please login first
                    </h1>

                    <p className="text-slate-500 mt-3">
                        You need to login to view your profile information.
                    </p>

                    <Link
                        href="/login?redirectTo=/my-profile"
                        className="btn mt-6 border-none bg-orange-500 text-white hover:bg-orange-600"
                    >
                        Go to Login
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-orange-50 px-5 py-16">
            <div className="max-w-3xl mx-auto">
                <div className="rounded-3xl bg-white p-8 shadow-lg border border-orange-100">
                    <div className="text-center">
                        <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-orange-100 border-4 border-orange-200 flex items-center justify-center">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || "User"}
                                    width={128}
                                    height={128}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span className="text-5xl font-bold text-orange-500">
                                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                                </span>
                            )}
                        </div>

                        <h1 className="mt-5 text-3xl font-bold text-slate-900">
                            {user.name}
                        </h1>

                        <p className="mt-2 text-slate-500">{user.email}</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-orange-50 p-5">
                            <p className="text-sm text-slate-500">Name</p>
                            <h3 className="mt-1 font-semibold text-slate-900">
                                {user.name || "Not provided"}
                            </h3>
                        </div>

                        <div className="rounded-2xl bg-orange-50 p-5">
                            <p className="text-sm text-slate-500">Email</p>
                            <h3 className="mt-1 font-semibold text-slate-900">
                                {user.email}
                            </h3>
                        </div>

                        <div className="rounded-2xl bg-orange-50 p-5 md:col-span-2">
                            <p className="text-sm text-slate-500">Image URL</p>
                            <h3 className="mt-1 break-all font-semibold text-slate-900">
                                {user.image || "No image URL added"}
                            </h3>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/my-profile/update"
                            className="btn border-none bg-orange-500 px-8 text-white hover:bg-orange-600"
                        >
                            Update Information
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}