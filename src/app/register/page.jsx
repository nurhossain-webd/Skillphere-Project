"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const image = formData.get("photo");
        const password = formData.get("password");

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "Registration failed");
            return;
        }

        toast.success("Registration successful. Please login.");
        router.push("/login");
    };

    const handleGoogleLogin = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Google login failed");
            return;
        }

        toast.success("Google login successful");
    };

    return (
        <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5 py-16">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg border border-orange-100">
                <div className="text-center mb-8">
                    <p className="text-orange-500 font-semibold">Create Account</p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-2">
                        Register to SkillSphere
                    </h1>

                    <p className="text-slate-500 mt-3 text-sm">
                        Join SkillSphere and start learning new skills today.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-slate-700">
                                Name
                            </span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full focus:outline-orange-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-slate-700">
                                Email
                            </span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full focus:outline-orange-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-slate-700">
                                Photo URL
                            </span>
                        </label>

                        <input
                            type="url"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered w-full focus:outline-orange-400"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-slate-700">
                                Password
                            </span>
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full focus:outline-orange-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn w-full border-none bg-orange-500 text-white hover:bg-orange-600"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <div className="divider text-slate-400">OR</div>

                <button
                    onClick={handleGoogleLogin}
                    className="btn w-full bg-white border border-slate-300 text-slate-700 hover:border-orange-400 hover:bg-orange-50"
                >
                    Continue with Google
                </button>

                <p className="text-center text-sm text-slate-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-orange-500 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
}