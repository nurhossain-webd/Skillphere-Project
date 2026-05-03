import Form from "next/form";
import Link from "next/link";

export default function LoginPage() {
    return (
        <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5 py-16">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg border border-orange-100">
                <div className="text-center mb-8">
                    <p className="text-orange-500 font-semibold">Welcome Back</p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-2">
                        Login to SkillSphere
                    </h1>

                    <p className="text-slate-500 mt-3 text-sm">
                        Access your courses and continue your learning journey.
                    </p>
                </div>

                <Form action="/login" className="space-y-5">
                    {/* Email */}
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

                    {/* Password */}
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
                        className="btn w-full border-none bg-orange-500 text-white hover:bg-orange-600"
                    >
                        Login
                    </button>
                </Form>

                <div className="divider text-slate-400">OR</div>

                <button className="btn w-full bg-white border border-slate-300 text-slate-700 hover:border-orange-400 hover:bg-orange-50">
                    Continue with Google
                </button>

                <p className="text-center text-sm text-slate-600 mt-6">
                    New to SkillSphere?{" "}
                    <Link
                        href="/register"
                        className="font-semibold text-orange-500 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </section>
    );
}