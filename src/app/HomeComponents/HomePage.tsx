import Image from "next/image";
import { FC } from "react";
import HeroImage from "../../../public/Home/HeroImage.png";

import MainImage1 from "../../../public/Home/main_image_1.png";
import MainImage2 from "../../../public/Home/main_image_2.png";
import MainImage3 from "../../../public/Home/main_image_3.png";
import MainImage4 from "../../../public/Home/main_image_4.png";
import MainImage5 from "../../../public/Home/main_image_5.png";
import MainImage6 from "../../../public/Home/main_image_6.png";

import ThePrint from "../../../public/Home/the_print.png";
import Metal from "../../../public/Home/metal.png";
import Acrylic from "../../../public/Home/acrylic.png";
import AR_Preview from "../../../public/Home/ar_preview.png";
import Wood from "../../../public/Home/wood.png";
import Canvas from "../../../public/Home/canvas.png";

const HomePage: FC = () => {
  const mainImages = [
    MainImage1,
    MainImage2,
    MainImage3,
    MainImage4,
    MainImage5,
    MainImage6,
    MainImage1, // Reused to fill up to 10
    MainImage2,
    MainImage3,
    MainImage4,
    MainImage5,
    MainImage6,
    MainImage1, // Reused to fill up to 10
    MainImage2,
    MainImage3,
    MainImage4,
    MainImage5,
    MainImage6,
    MainImage1, // Reused to fill up to 10
    MainImage2,
    MainImage3,
    MainImage4,
    MainImage5,
    MainImage6,
  ];
  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh]">
        <Image
          src={HeroImage}
          alt="Metal Prints"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center z-10">
          <h2 className="text-4xl font-bold mb-2 text-white">Metal Prints</h2>
          <p className="mb-4 text-white">
            Lets Do Different - Direct Metal Prints
          </p>
          <button className="bg-white text-black px-4 py-2 rounded">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Slider */}
      <section className="bg-black py-4 overflow-x-auto whitespace-nowrap flex items-center justify-center">
        {mainImages.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`category ${i + 1}`}
            width={50}
            height={50}
            className="mx-2"
          />
        ))}
      </section>

      <section className="text-center py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-10">
            1 PRINT - 4 MATERIALS
          </h2>

          <div className="hidden md:flex justify-center gap-3 px-4">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              <div>
                <Image
                  src={ThePrint}
                  alt="The Print"
                  width={320}
                  height={300}
                />
              </div>
              <div>
                <Image
                  src={AR_Preview}
                  alt="AR Previews"
                  width={320}
                  height={300}
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-3">
              <div>
                <Image src={Metal} alt="Metal Print" width={650} height={350} />
              </div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src={Wood}
                    alt="Wood Print 1"
                    width={650}
                    height={200}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              <div>
                <Image
                  src={Acrylic}
                  alt="Acrylic Print"
                  width={320}
                  height={300}
                />
              </div>
              <div>
                <Image
                  src={Canvas}
                  alt="Canvas Print"
                  width={320}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex md:hidden flex-col items-center gap-3 px-4">
            <div>
              <Image
                src={Metal}
                alt="Metal Print"
                width={600}
                height={350}
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-center gap-3">
              {/* Left Side */}
              <div className="flex flex-col gap-3">
                <div>
                  <Image
                    src={Acrylic}
                    alt="Acrylic Print"
                    width={320}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={Canvas}
                    alt="Canvas Print"
                    width={320}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-3">
                <div>
                  <Image
                    src={ThePrint}
                    alt="The Print"
                    width={320}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={AR_Preview}
                    alt="AR Previews"
                    width={320}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
