import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaLayerGroup, FaStar } from "react-icons/fa";

const AllCourses = async () => {
    const res = await fetch("https://skillphere-project.vercel.app/courses.json");

    const courses = await res.json();

    return (
        <section className="bg-orange-50 py-16">
            <div className="max-w-7xl mx-auto px-5">
                {/* Page Heading */}
                <div className="text-center mb-10">
                    <p className="text-orange-500 font-semibold">All Courses</p>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        Explore SkillSphere Courses
                    </h1>

                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Browse our available courses and choose the right learning path for
                        your skill development.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="card overflow-hidden bg-white shadow-md border border-orange-100 hover:shadow-xl transition duration-300"
                        >
                            {/* Image */}
                            <figure className="relative h-52 w-full overflow-hidden bg-orange-100">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition duration-300 hover:scale-105"
                                />
                            </figure>

                            {/* Card Body */}
                            <div className="card-body">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="badge bg-orange-100 text-orange-600 border-none">
                                        {course.category}
                                    </span>

                                    <span className="badge bg-slate-100 text-slate-600 border-none">
                                        {course.level}
                                    </span>
                                </div>

                                <h2 className="card-title text-slate-900 line-clamp-2">
                                    {course.title}
                                </h2>

                                <p className="text-sm text-slate-500">
                                    Instructor: {course.instructor}
                                </p>

                                <p className="text-sm text-slate-600 line-clamp-2">
                                    {course.description}
                                </p>

                                <div className="flex items-center justify-between mt-2 text-sm">
                                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                                        <FaStar />
                                        <span>{course.rating}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-500">
                                        <FaClock />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <FaLayerGroup className="text-orange-500" />
                                    <span>{course.level}</span>
                                </div>

                                <div className="card-actions justify-end mt-4">
                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="btn bg-orange-500 text-white border-none hover:bg-orange-600"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllCourses;