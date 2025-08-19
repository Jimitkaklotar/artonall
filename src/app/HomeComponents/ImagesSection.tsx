"use client";

import { FC } from "react";
import Image from "next/image";

import SearchArtImage from "../../../public/Home/HomeBackImage.png";

const ImagesSection: FC = () => {
  return (
    <section className="">
      <div className="relative w-full h-[500px]"> {/* Adjust height as needed */}
        <Image
          src={SearchArtImage}
          alt="Wall Photo"
          fill
          priority
          className="object-cover" // Fills while keeping aspect ratio
        />
      </div>
    </section>
  );
};

export default ImagesSection;
