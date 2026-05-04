"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";

export default function UpdateProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const [loading, setLoading] = useState(false);

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
                        You need to login before updating your profile.
                    </p>

                    <Link
                        href="/login?redirectTo=/my-profile/update"
                        className="btn mt-6 border-none bg-orange-500 text-white hover:bg-orange-600"
                    >
                        Go to Login
                    </Link>
                </div>
            </section>
        );
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const image = formData.get("image");

        const { data, error } = await authClient.updateUser({
            name,
            image,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "Profile update failed");
            return;
        }

        toast.success("Profile updated successfully");
        router.push("/my-profile");
        router.refresh();
    };

    return (
        <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5 py-16">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg border border-orange-100">
                <div className="text-center mb-8">
                    <p className="text-orange-500 font-semibold">Update Profile</p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-2">
                        Update Your Information
                    </h1>

                    <p className="text-slate-500 mt-3 text-sm">
                        Change your display name and profile image URL.
                    </p>
                </div>

                <form onSubmit={handleUpdate} className="space-y-5">
                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-slate-700">
                                Name
                            </span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            defaultValue={user.name || ""}
                            placeholder="Enter your name"
                            className="input input-bordered w-full focus:outline-orange-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-slate-700">
                                Image URL
                            </span>
                        </label>

                        <input
                            type="url"
                            name="image"
                            defaultValue={user.image || ""}
                            placeholder="Enter image URL"
                            className="input input-bordered w-full focus:outline-orange-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn w-full border-none bg-orange-500 text-white hover:bg-orange-600"
                    >
                        {loading ? "Updating..." : "Update Information"}
                    </button>
                </form>

                <p className="text-center text-sm text-slate-600 mt-6">
                    Back to{" "}
                    <Link
                        href="/my-profile"
                        className="font-semibold text-orange-500 hover:underline"
                    >
                        My Profile
                    </Link>
                </p>
            </div>
        </section>
    );
}