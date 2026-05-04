"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import {
    FaArrowLeft,
    FaBookOpen,
    FaClock,
    FaLayerGroup,
    FaStar,
    FaUserTie,
} from "react-icons/fa";

export default function CourseDetailsPage() {
    const { id } = useParams();
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [course, setCourse] = useState(null);
    const [courseLoading, setCourseLoading] = useState(true);

    useEffect(() => {
        const loadCourse = async () => {
            const res = await fetch("/courses.json");
            const courses = await res.json();

            const selectedCourse = courses.find(
                (course) => course.id === Number(id)
            );

            setCourse(selectedCourse);
            setCourseLoading(false);
        };

        loadCourse();
    }, [id]);

    useEffect(() => {
        if (!isPending && !user) {
            router.push(`/login?redirectTo=/courses/${id}`);
        }
    }, [isPending, user, router, id]);

    if (isPending || courseLoading) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-orange-50">
                <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </section>
        );
    }

    if (!user) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-orange-50">
                <p className="text-slate-600">Redirecting to login...</p>
            </section>
        );
    }

    if (!course) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-orange-50 px-5">
                <div className="rounded-3xl bg-white p-8 text-center shadow-lg border border-orange-100">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Course Not Found
                    </h1>
                    <p className="text-slate-500 mt-3">
                        The course you are looking for does not exist.
                    </p>
                    <Link
                        href="/courses"
                        className="btn mt-6 border-none bg-orange-500 text-white hover:bg-orange-600"
                    >
                        Back to Courses
                    </Link>
                </div>
            </section>
        );
    }

    const curriculum = [
        "Introduction to the course and learning goals",
        "Core concepts and beginner-friendly explanation",
        "Practical project setup and guided practice",
        "Real-world examples and best practices",
        "Final project and skill assessment",
    ];

    return (
        <section className="min-h-screen bg-orange-50 px-5 py-16">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:underline mb-6"
                >
                    <FaArrowLeft />
                    Back to Courses
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Course Image */}
                    <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-orange-100 shadow-lg">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Course Info */}
                    <div className="rounded-3xl bg-white p-8 shadow-lg border border-orange-100">
                        <div className="flex flex-wrap gap-3 mb-5">
                            <span className="badge bg-orange-100 text-orange-600 border-none">
                                {course.category}
                            </span>

                            <span className="badge bg-slate-100 text-slate-600 border-none">
                                {course.level}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-slate-600 mt-5 leading-7">
                            {course.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                                <FaUserTie className="text-orange-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Instructor</p>
                                    <h3 className="font-semibold text-slate-900">
                                        {course.instructor}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                                <FaClock className="text-orange-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Duration</p>
                                    <h3 className="font-semibold text-slate-900">
                                        {course.duration}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                                <FaStar className="text-orange-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Rating</p>
                                    <h3 className="font-semibold text-slate-900">
                                        {course.rating}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                                <FaLayerGroup className="text-orange-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Level</p>
                                    <h3 className="font-semibold text-slate-900">
                                        {course.level}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <button className="btn mt-8 w-full border-none bg-orange-500 text-white hover:bg-orange-600">
                            Enroll Now
                        </button>
                    </div>
                </div>

                {/* Curriculum */}
                <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg border border-orange-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
                            <FaBookOpen />
                        </div>

                        <div>
                            <p className="text-orange-500 font-semibold">
                                Course Curriculum
                            </p>
                            <h2 className="text-2xl font-bold text-slate-900">
                                What You Will Learn
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {curriculum.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-2xl bg-orange-50 p-4"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                                    {index + 1}
                                </span>

                                <p className="text-slate-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}