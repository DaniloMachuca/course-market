"use client";

import Courses from "@/sections/Courses";
import Intro from "@/sections/Intro";
import { RootReducer } from "@/store";
import { useSelector } from "react-redux";

const Home = () => {
  const { list } = useSelector((state: RootReducer) => state.fav);
  return (
    <main className="min-h-screen">
      <Intro />
      <Courses />
      <p>{list.length}</p>
    </main>
  );
};

export default Home;
