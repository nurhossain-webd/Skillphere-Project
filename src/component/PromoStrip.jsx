"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { FaBolt, FaFire, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const PromoStrip = () => {
    const promoItems = [
        "New Learning Challenge Available!",
        "Upgrade Your Skills Today 🚀",
        "Explore Trending Courses",
        "Learn from Industry Experts",
        "Start Your Career Growth with SkillSphere",
    ];

    return (
        <section className="bg-white border-b border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white">
                <div className="relative flex overflow-hidden py-4">
                    <motion.div
                        className="flex min-w-max items-center gap-10 pr-10"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...promoItems, ...promoItems].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 whitespace-nowrap">
                                {index % 3 === 0 && <FaBolt className="text-white" />}
                                {index % 3 === 1 && <FaFire className="text-white" />}
                                {index % 3 === 2 && <FaGraduationCap className="text-white" />}

                                <span className="font-semibold">{item}</span>

                                <Link
                                    href="/courses"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-500 hover:bg-orange-50"
                                >
                                    Explore
                                    <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PromoStrip;