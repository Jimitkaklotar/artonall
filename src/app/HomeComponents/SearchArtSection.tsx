"use client";

import { FC } from "react";
import Image from "next/image";

import SearchArtImage from "../../../public/Home/Section.png";

const SearchArtSection: FC = () => {
  return (
    <section className="">
      <div className="w-full flex justify-center items-center">
        <div className="max-w-8xl bg-[#241F21] my-10">
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Decorative Image */}
            <div className="w-full md:w-2/4 hidden  md:flex justify-center md:justify-start mb-6 md:mb-0">
              <Image
                src={SearchArtImage}
                alt="Decorative Art"
                width={800}
                height={200}
                className="object-contain"
                priority
              />
            </div>

            {/* Right side - Text and Button */}
            <div className="w-full md:w-3/4 flex flex-col items-center text-center p-5">
              <h2 className="text-2xl md:text-4xl xl:text-5xl leading-snug">
                <span className="bg-gradient-to-r font-bold from-[#d4af37] to-[#f1c27d] text-transparent bg-clip-text">
                  DIDN’T FIND THE ART YOU WERE
                </span>{" "}
                <br />
                <span className="bg-gradient-to-r from-[#f1c27d] to-[#d4af37] text-transparent bg-clip-text">
                  LOOKING FOR?
                </span>
              </h2>

              <button className="mt-6 flex items-center justify-center gap-2 px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchArtSection;
