import BestCourses from "@/component/BestCourses";
import Hero from "@/component/Hero";
import LearningTips from "@/component/LearningTips";
import PromoStrip from "@/component/PromoStrip";
import TopInstructors from "@/component/TopInstructors";
import TrendingCourses from "@/component/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PromoStrip />
      <Hero />
      <BestCourses />
      <LearningTips />
      <TrendingCourses />
      <TopInstructors />

    </div>
  );
}
