"use client";

import { FC, useState } from "react";
import Image from "next/image";
import FeatureImage from "../../../public/Home/feature.png";

const HighlightFeatures: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("METAL");
  const tabs: string[] = ["METAL", "ACRYLIC", "WOOD", "CANVAS"];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
            Highlight Features
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-sm md:text-base">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-sm tracking-wide pb-1 border-b-2 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "text-blue-400 border-blue-400"
                  : "border-transparent "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 relative">
          {/* Left text (desktop only) */}
          <div className="space-y-48 flex-1 hidden lg:block">
            <div className="relative flex items-center">
              <div className="absolute right-[-70px] top-[95%] w-[80%] h-[2px] bg-gray-500"></div>
              <div>
                <h3 className="text-lg font-semibold">Feature One</h3>
                <p className="text-sm max-w-xs">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute right-[-70px] top-[95%] w-[80%] h-[2px] bg-gray-500"></div>
              <div>
                <h3 className="text-lg font-semibold">Feature Three</h3>
                <p className="text-sm max-w-xs">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>

          {/* Center image with highlights */}
          <div className="md:hidden lg:block relative flex-1 max-w-sm lg:max-w-sm w-full">
            <Image
              src={FeatureImage}
              alt="Feature"
              className="rounded-lg w-full h-auto"
              priority
            />

            {/* Highlight area 1 */}
            <div className="absolute top-[25%] left-[40px] w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-800 border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-lg">1</span>
            </div>

            {/* Highlight area 2 */}
            <div className="absolute top-[55%] right-[10%] w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-800 border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-lg">2</span>
            </div>

            {/* Highlight area 3 */}
            <div className="absolute bottom-[8%] left-[10%] w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-800 border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-lg">3</span>
            </div>
          </div>

          {/* Right text (desktop only) */}
          <div className="space-y-48 flex-1 hidden lg:block">
            <div className="relative flex items-center justify-center">
              <div className="absolute left-[-70px] top-[90%] w-[70%] h-[2px] bg-gray-500"></div>
              <div>
                <h3 className="text-lg font-semibold text-right">Feature Two</h3>
                <p className="text-sm max-w-xs text-right">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet view */}
        <div className="hidden md:flex lg:hidden mt-10 flex-col md:flex-row gap-8 items-start">
          <div className="relative flex-1 max-w-xs w-full mx-auto">
            <Image
              src={FeatureImage}
              alt="Feature"
              className="rounded-lg w-full h-auto"
              priority
            />
            <div className="absolute top-[20%] left-[12%] w-8 h-8 rounded-full bg-blue-800 border-2 border-blue-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div className="absolute top-[50%] right-[12%] w-8 h-8 rounded-full bg-blue-800 border-2 border-blue-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div className="absolute bottom-[15%] left-[12%] w-8 h-8 rounded-full bg-blue-800 border-2 border-blue-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">3</span>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-start space-x-4">
                <span className="text-2xl font-bold">{num}</span>
                <div>
                  <h3 className="text-base font-semibold">Featured Title</h3>
                  <p className="text-sm">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view */}
        <div className="mt-8 space-y-8 md:hidden">
          {[1, 2, 3].map((num) => (
            <div key={num}>
              <h3 className="text-lg font-semibold">{num} Featured Title</h3>
              <p className="text-sm">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightFeatures;
