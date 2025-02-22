import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center  gap-2 md:flex-row md:gap-2">
        <Input
          placeholder="Paste your url here"
          className="border-4 outline-none shadow-lg   text-muted-foreground border-primary rounded-none p-6"
        />
        <Button
          size={"lg"}
          className="font-semibold w-full md:w-auto p-[27px] shadow-lg  "
        >
          Download
        </Button>
      </div>
      <p className="text-muted-foreground my-2 text-sm">
        By using our service you accept our{" "}
        <span className="text-primary underline">Terms of Service</span> and{" "}
        <span className="text-primary underline">Privacy Policy</span>
      </p>

      <div className="w-full flex justify-center my-10">
        <a
          className="text-center text-muted-foreground underline"
          href="#howitwork"
        >
          How it work?
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
