"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { GetAllProductAPI, ImageBaseUrl } from "../Api"; // adjust if needed

interface Product {
  _id: number | string;
  product_name: string;
  product_price: number | string;
  product_image_1: string;
}

const TopProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Ensures client-only rendering

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

  // Avoid SSR hydration issues
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="py-10 px-4 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>

        {!products ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                href={{
                  pathname: "/ProductDetails",
                  query: { product: JSON.stringify(product) },
                }}
                className="block"
              >
                <div className="p-4 rounded-lg cursor-pointer transition duration-300">
                  <div className="overflow-hidden rounded-md shadow-xl shadow-gray-400 mb-4">
                    <img
                      src={`${ImageBaseUrl}${product.product_image_1}`}
                      alt={product.product_name}
                      className="w-full object-cover h-60 transform transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.product_name}
                    </h3>
                    <p className="text-lg font-bold mb-4">
                      From ₹{product.product_price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default TopProduct;
