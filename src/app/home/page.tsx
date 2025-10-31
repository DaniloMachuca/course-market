"use client";

import Courses from "@/sections/Courses";
import Intro from "@/sections/Intro";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Intro />
      <Courses />
    </main>
  );
};

export default Home;
