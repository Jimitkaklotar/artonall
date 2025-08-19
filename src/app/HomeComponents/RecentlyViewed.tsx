"use client";

import Image from "next/image";
import { FC } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  swatches: string[];
}

const products: Product[] = [
  {
    id: 1,
    title: "Captian America Shield print",
    price: 30.0,
    image: "/home/product1.png", // replace with your image path
    swatches: ["#d4c4b1", "#d2cbc1", "#b49d8d", "#dbc9b7"],
  },
  {
    id: 2,
    title: "Captian America Shield print",
    price: 30.0,
    image: "/home/product2.png",
    swatches: ["#cfcac1", "#b6a494", "#e5d2c1", "#e7d7c7"],
  },
  {
    id: 3,
    title: "Captian America Shield print",
    price: 30.0,
    image: "/home/product3.png",
    swatches: ["#cfcac1", "#b6a494", "#e5d2c1", "#e7d7c7"],
  },
  {
    id: 4,
    title: "Abstract print sun and pink",
    price: 30.0,
    image: "/home/product4.png",
    swatches: ["#cfcac1", "#b6a494", "#e5d2c1", "#e7d7c7"],
  },
  {
    id: 5,
    title: "Lazy river ring ride",
    price: 30.0,
    image: "/home/product5.png",
    swatches: ["#cfcac1", "#b6a494", "#e5d2c1", "#e7d7c7"],
  },
  {
    id: 6,
    title: "Space chick headphones",
    price: 30.0,
    image: "/home/product6.png",
    swatches: ["#cfcac1", "#b6a494", "#e5d2c1", "#e7d7c7"],
  },
  {
    id: 7,
    title: "Colour child",
    price: 30.0,
    image: "/home/product7.png",
    swatches: ["#cfcac1", "#b6a494", "#e5d2c1", "#e7d7c7"],
  },
];

const RecentlyViewed: FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center uppercase tracking-wider">
          Recently Viewed Items
        </h2>

        {/* First Row - Two Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {products.slice(0, 2).map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm">{product.title}</h3>
                <p className="text-sm font-semibold">
                  From £{product.price.toFixed(2)}
                </p>
                <div className="flex mt-2 space-x-2">
                  {product.swatches.map((color, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Remaining Items */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.slice(2).map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm">{product.title}</h3>
                <p className="text-sm font-semibold">
                  From £{product.price.toFixed(2)}
                </p>
                <div className="flex mt-2 space-x-2">
                  {product.swatches.map((color, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
