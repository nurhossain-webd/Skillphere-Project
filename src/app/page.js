import BestCourses from "@/component/BestCourses";
import Hero from "@/component/Hero";
import LearningTips from "@/component/LearningTips";
import TopInstructors from "@/component/TopInstructors";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Hero />
      <BestCourses />
      <LearningTips />
      <TopInstructors />

    </div>
  );
}
