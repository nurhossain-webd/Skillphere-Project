import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div>
                    <h2 className="text-2xl font-bold text-orange-400">SkillSphere</h2>
                    <p className="mt-3 text-sm leading-6">
                        A modern online learning platform where students can explore
                        courses, learn new skills, and grow their career.
                    </p>
                </div>


                <div>
                    <h3 className="footer-title text-orange-300">Contact Info</h3>
                    <div className="space-y-2 text-sm">
                        <p>Email: support@skillsphere.com</p>
                        <p>Phone: +49 123 456 789</p>
                        <p>Address: Cologne, Germany</p>
                    </div>
                </div>


                <div>
                    <h3 className="footer-title text-orange-300">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-orange-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses" className="hover:text-orange-300">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-orange-300">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-orange-300">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="footer-title text-orange-300">Follow Us</h3>
                    <div className="flex gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="btn btn-circle btn-sm bg-orange-500 border-none text-white hover:bg-orange-600"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            className="btn btn-circle btn-sm bg-orange-500 border-none text-white hover:bg-orange-600"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="btn btn-circle btn-sm bg-orange-500 border-none text-white hover:bg-orange-600"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            className="btn btn-circle btn-sm bg-orange-500 border-none text-white hover:bg-orange-600"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 py-5 text-center text-sm">
                <p>
                    Copyright © {new Date().getFullYear()} SkillSphere. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;