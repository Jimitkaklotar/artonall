"use client";

import Image from "next/image";
import MainImg from "../../../public/Home/main_image.png";

const MainImage = () => {
  return (
    <section className="w-full">
      {/* Image Section */}
        <Image
          src={MainImg} // replace with your actual image path
          alt="Camera"
          className="w-full"
        />
    </section>
  );
};

export default MainImage;
