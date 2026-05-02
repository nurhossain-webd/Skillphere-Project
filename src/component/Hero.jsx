import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay, FaStar, FaUsers } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-orange-50">
            <div className="max-w-7xl mx-auto px-5 py-10 lg:py-16">
                <div className="hero min-h-[520px] bg-base-100 rounded-3xl shadow-lg overflow-hidden">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10 p-6 lg:p-12">

                        <div className="relative w-full lg:w-1/2">
                            <Image
                                src="/images/hero-learning.png"
                                alt="Student learning online with laptop"
                                width={700}
                                height={500}
                                className="rounded-3xl shadow-md object-cover"
                                priority
                            />

                            <div className="absolute top-5 right-5 bg-white rounded-2xl shadow-md px-4 py-3 hidden sm:flex items-center gap-3">
                                <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                                    <FaUsers />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">15K+</h3>
                                    <p className="text-xs text-slate-500">Happy Students</p>
                                </div>
                            </div>
                        </div>


                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-5">
                                <FaStar />
                                Best Online Learning Platform
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                                Upgrade Your <br />
                                Skills Today 🚀
                            </h1>

                            <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mt-4">
                                Learn from Industry Experts
                            </h2>

                            <p className="py-6 text-slate-600 leading-7 max-w-xl mx-auto lg:mx-0">
                                Explore high-quality courses in web development, design,
                                marketing, data science, and more. Start learning today and
                                build the skills you need for your future career.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/courses"
                                    className="btn bg-orange-500 hover:bg-orange-600 text-white border-none"
                                >
                                    Browse Courses
                                </Link>

                                <button className="btn bg-white text-orange-600 border-orange-200 hover:bg-orange-100">
                                    <FaPlay />
                                    Watch Intro
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;