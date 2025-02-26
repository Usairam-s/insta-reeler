import React from "react";
import SearchBar from "./SearchBar";
import { MessageCircle } from "lucide-react"; // Importing icon

const Hero = () => {
  return (
    <>
      {/* Circular feedback button fixed to bottom-right */}
      <a
        href="#footer"
        className="fixed bottom-4 right-4 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg  transition"
      >
        <MessageCircle size={24} />
      </a>

      <div className="max-w-3xl px-6 mx-auto pt-24 flex flex-col gap-14">
        <h2 className="text-center font-semibold lg:text-5xl md:text-4xl text-3xl">
          Download Instagram Videos
        </h2>
        {/* Search Bar */}
        <SearchBar />
      </div>
    </>
  );
};

export default Hero;
