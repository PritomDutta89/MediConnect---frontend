/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import SpecialtyMenu from "../components/SpecialtyMenu";

const Home = () => {
  return (
    <div className="px-[1rem] lg:px-[4rem] xl:px-[6rem] mt-4">
      <Header />
      <SpecialtyMenu />
    </div>
  );
};

export default Home;
