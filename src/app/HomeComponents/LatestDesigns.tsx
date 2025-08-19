"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { GetAllProductAPI, ImageBaseUrl } from "../Api";
import ArtWork from "../../../public/Home/art_work.png";

interface Product {
  _id: number | string;
  product_name: string;
  product_price: number | string;
  product_image_1: string;
}

const LatestDesigns: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const fetchProducts = async () => {
      try {
        const response = await axios.get(GetAllProductAPI());
        const data = response.data?.data || response.data;
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-10">LATEST DESIGNS</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
        {/* Left Banner - only visible on lg and above */}
        <div className="hidden lg:block bg-gradient-to-b from-blue-500 to-purple-600 rounded-lg overflow-hidden text-center">
          <Image
            src={ArtWork}
            alt="Braille Artwork"
            width={300}
            height={600}
            className="w-full object-cover"
          />
          <div className="p-4 text-yellow-300 font-bold text-lg leading-tight">
            Braille Artwork: <br />
            <span className="text-2xl">Feel Your Image</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product._id}
                href={{
                  pathname: "/ProductDetails",
                  query: { product: JSON.stringify(product) },
                }}
                className=""
              >
                <div className="overflow-hidden cursor-pointer transition">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={`${ImageBaseUrl}${product.product_image_1}`}
                      alt={product.product_name}
                      className="w-full h-65 object-cover  transform transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="text-center py-2">
                    <h3 className="text-sm font-semibold mb-1">
                      {product.product_name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      From ₹{product.product_price}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No products found.
            </p>
          )}
        </div>
      </div>
      {/* Button */}
      <div className="text-right mt-10">
        <button className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-2 rounded-full transition">
          Shop More <FaArrowRight />
        </button>
      </div>

    </section>
  );
};

export default LatestDesigns;
