"use client";
import React from "react";
import BranchesHome from "./BranchesHome/BranchesHome";
import HomeHeader from "./HomeHeader/HomeHeader";
import MatgersHome from "./MatgersHome/MatgersHome";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <MatgersHome />
      <BranchesHome />
    </div>
  );
};

export default Home;
