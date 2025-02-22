import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="max-w-3xl px-6  mx-auto pt-24 flex flex-col gap-14">
      <h2 className="text-center  font-semibold lg:text-5xl md:text-4xl text-3xl">
        Download Instagram Videos
      </h2>
      {/* Search Bar */}
      <SearchBar />
    </div>
  );
};

export default Hero;
