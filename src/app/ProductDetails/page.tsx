"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ImageBaseUrl } from "../Api";

import First3dIcon from "../../../public/Product/tabler_rotate_3d.png";
import Livingroom from "../../../public/Product/livingroom.jpg";
import Sofaroom from "../../../public/Product/sofa.jpg";
import Hallroom from "../../../public/Product/hall.jpg";
import Studyroom from "../../../public/Product/studyroom.jpg";

import { AiOutlineHeart } from "react-icons/ai";
import { FiZoomIn, FiPlus, FiMinus } from "react-icons/fi";
import { TbAugmentedReality } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

import Shopify from "../../../public/Product/shopify.png";
import Visa from "../../../public/Product/visa.png";
import Rupay from "../../../public/Product/rupay.png";
import PayPal from "../../../public/Product/paypal.png";
import Ipay from "../../../public/Product/ipay.png";
import Gpay from "../../../public/Product/gpay.png";

import Links from "../../../public/Product/link.png";
import Meta from "../../../public/Product/meta.png";
import Twitter from "../../../public/Product/twitter.png";
import Pintrest from "../../../public/Product/social.png";
import LinkedIn from "../../../public/Product/linkedin.png";
import ARVIEW from "../../../public/Product/ar_view.png";

import Image from "next/image";
import dynamic from "next/dynamic";
const ThreeImageViewer = dynamic(
  () => import("../HomeComponents/ThreeImageViewer"),
  { ssr: false }
);

export default function ProductDetails() {
  /* ------------------------------------------------------------------ */
  /* 1. hooks & basic state                                             */
  /* ------------------------------------------------------------------ */
  const searchParams = useSearchParams();
  const [product, setProduct] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState("");
  const [showCanvas, setShowCanvas] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#E5CFC6");
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState("Wood");
  const [selectedSize, setSelectedSize] = useState("Small 200 x 300mm");
  const [imageShape, setImageShape] = useState("Square");

  const imageRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 500 });

  const [showQRModal, setShowQRModal] = useState(false);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  /* ------------------------------------------------------------------ */
  /* 2. fetch product                                                   */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      try {
        setProduct(JSON.parse(decodeURIComponent(productParam)));
      } catch (err) {
        console.error("Invalid product data:", err);
      }
    }
  }, [searchParams]);

  /* ------------------------------------------------------------------ */
  /* 3. resize canvas                                                   */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!canvasContainerRef.current) return;
    const obs = new ResizeObserver((entries) => {
      for (let e of entries) {
        const w = e.contentRect.width;
        setCanvasSize({ width: w, height: (w * 3) / 4 });
      }
    });
    obs.observe(canvasContainerRef.current);
    return () => obs.disconnect();
  }, []);

  /* ------------------------------------------------------------------ */
  /* 4. helpers                                                         */
  /* ------------------------------------------------------------------ */
  const handleZoomClick = () => setIsFullViewOpen(true);
  const handleMouseDown = () => setIsGrabbing(true);
  const handleMouseUp = () => setIsGrabbing(false);

  const backgroundImages = [
    { label: "Living Room", src: Livingroom.src },
    { label: "Sofa Room", src: Sofaroom.src },
    { label: "Hall Room", src: Hallroom.src },
    { label: "Study Room", src: Studyroom.src },
  ];

  /* ------------------------------------------------------------------ */
  /* 5. constants                                                       */
  /* ------------------------------------------------------------------ */
  const frameColors = [
    "#E5CFC6",
    "#E5E5E5",
    "#000000",
    "#FFFFFF",
    "#F3D7CA",
    "#FAF1E4",
  ];
  const materials = ["Wood", "Metal", "Canvas"];
  const sizes = [
    "Small 200 x 300mm",
    "Medium 400 x 600mm",
    "Large 600 x 900mm",
    "XLarge 800 x 1200mm",
  ];
  const shapes = [
    { label: "Square", value: "Square" },
    { label: "Column", value: "Column" },
    { label: "Landscape", value: "Landscape" },
    { label: "Panoramic", value: "Panoramic" },
    { label: "Portrait", value: "Portrait" },
  ];

  /* ------------------------------------------------------------------ */
  /* 6. AR deep-link (for QR & copy-link)                               */
  /* ------------------------------------------------------------------ */
  const arDeepLink = "https://ar-view-seven.vercel.app/";

  /* ------------------------------------------------------------------ */
  /* 7. render                                                          */
  /* ------------------------------------------------------------------ */
  if (!product)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading product details...
      </div>
    );

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-12 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT ---------------------------------------------------------- */}
        <div
          ref={imageRef}
          className="w-full h-full lg:min-w-4xl flex-1 flex xl:justify-center xl:items-start flex-col-reverse xl:flex-row relative bg-[#10111a] rounded-md p-4 gap-6"
        >
          {/* thumbnails */}
          <div className="flex xl:flex-col gap-2 overflow-x-auto sm:overflow-visible">
            <div
              onClick={() => {
                setShowCanvas(false);
                setSelectedBackground("");
              }}
              className={`w-16 h-16 border-2 rounded-xl overflow-hidden cursor-pointer p-1 relative ${
                !showCanvas ? "border-blue-600" : "border-transparent"
              }`}
            >
              <img
                src={`${ImageBaseUrl}${product.product_image_1}`}
                alt="Product"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Image src={First3dIcon} alt="3D Icon" width={40} height={40} />
              </div>
            </div>

            {backgroundImages.map((bg, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setShowCanvas(true);
                  setSelectedBackground(bg.src);
                }}
                className={`w-16 h-16 border-2 rounded-xl overflow-hidden cursor-pointer p-1 ${
                  selectedBackground === bg.src
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
              >
                <img
                  src={bg.src}
                  alt={bg.label}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* main viewer */}
          <div
            ref={canvasContainerRef}
            className="w-full md:max-w-[800px] flex justify-center items-center"
          >
            {showCanvas ? (
              selectedBackground && (
                <Image
                  src={selectedBackground}
                  alt="2D Image"
                  width={canvasSize.width}
                  height={canvasSize.height}
                  className="rounded-md object-contain"
                />
              )
            ) : (
              <div
                className={`w-full h-[400px] md:h-[500px] rounded-md overflow-hidden ${
                  isGrabbing ? "cursor-grabbing" : "cursor-grab"
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <ThreeImageViewer
                  imageUrl={`${ImageBaseUrl}${product.product_image_1}`}
                  selectedMaterial={selectedMaterial}
                  imageShape={imageShape}
                  frameColor={selectedColor}
                />
              </div>
            )}
          </div>

          {/* desktop icons */}
          <div className="hidden md:flex absolute top-4 right-4 flex-col gap-3 z-10">
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
              <AiOutlineHeart className="text-xl text-black" />
            </button>
            <button
              onClick={handleZoomClick}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer"
            >
              <FiZoomIn className="text-xl text-black" />
            </button>
            <button
              onClick={() => setShowQRModal(true)}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer"
            >
              <TbAugmentedReality className="text-xl text-black" />
            </button>
          </div>

          {/* mobile icons */}
          <div className="flex md:hidden gap-3 z-50">
            <button className="w-10 h-10 rounded-full bg-white text-black shadow flex items-center justify-center">
              <AiOutlineHeart className="text-xl" />
            </button>
            <button
              onClick={handleZoomClick}
              className="w-10 h-10 rounded-full bg-white text-black shadow flex items-center justify-center"
            >
              <FiZoomIn className="text-xl" />
            </button>
            <button
              onClick={() => setShowQRModal(true)}
              className="w-10 h-10 rounded-full bg-white text-black shadow flex items-center justify-center"
            >
              <TbAugmentedReality className="text-xl" />
            </button>
          </div>
        </div>

        {/* RIGHT --------------------------------------------------------- */}
        <div className="w-full lg:max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            {product.product_name}
          </h1>

          <div className="bg-[#0502F1] text-white p-5 rounded-md mb-5">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl font-semibold">Priority Production</h1>
                <button className="mt-2 bg-white text-black px-6 py-2 rounded-full font-semibold">
                  BUY NOW
                </button>
              </div>
              <div className="text-right">
                <p className="text-sm">Be Smart Skip the Wait</p>
                <h1 className="text-3xl font-bold my-1">03H : 00M</h1>
                <p className="text-sm">Priority Production Ends in...</p>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="text-2xl font-bold mb-1">
              £ {product.product_price}
            </div>
            <span className="text-md">Tax included.</span>
          </div>

          <div className="mb-5">
            <p className="text-md mb-4">
              Add a pop of colour to your kitchen or café with this bold and
              quirky fried egg acrylic print. Printed on premium 5mm acrylic,
              this artwork offers a crystal-clear, high-gloss...
            </p>
            <hr />
          </div>

          {/* material */}
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">
              Material:{" "}
              <span className="font-medium text-[#828388]">
                {selectedMaterial}
              </span>
            </h1>
            <div className="flex gap-2 flex-wrap mb-5">
              {materials.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMaterial(m)}
                  className={`px-4 py-1 rounded border cursor-pointer text-sm ${
                    selectedMaterial === m
                      ? "bg-[#403C3C] text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <hr />
          </div>

          {/* size */}
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">
              Size:{" "}
              <span className="font-medium text-[#828388]">{selectedSize}</span>
            </h1>
            <div className="flex gap-2 flex-wrap mb-4">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-1 rounded border cursor-pointer text-sm ${
                    selectedSize === s
                      ? "bg-[#403C3C] text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <hr />
          </div>

          {/* shape */}
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">
              Image Shape:{" "}
              <span className="font-medium text-[#828388]">{imageShape}</span>
            </h1>
            <div className="flex gap-2 flex-wrap mb-4">
              {shapes.map((sh) => (
                <button
                  key={sh.value}
                  onClick={() => setImageShape(sh.value)}
                  className={`px-4 py-1 rounded border cursor-pointer text-sm ${
                    imageShape === sh.value
                      ? "bg-[#403C3C] text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {sh.label}
                </button>
              ))}
            </div>
            <hr />
          </div>

          {/* frame color */}
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">Frame Border:</h1>
            <div className="flex flex-wrap gap-2">
              {frameColors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  style={{ backgroundColor: c }}
                  className={`w-10 h-10 rounded border-2 cursor-pointer ${
                    selectedColor === c ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* quantity */}
          <div className="mb-6">
            <h1 className="text-lg font-bold mb-2">Quantity:</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-[#828388] rounded p-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1"
                >
                  <FiMinus className="text-[#828388]" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-20 text-center outline-none"
                />
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1"
                >
                  <FiPlus className="text-[#828388]" />
                </button>
              </div>
            </div>
          </div>

          {/* actions */}
          <button className="w-full border-2 border-[#5C37E7] bg-white text-[#5C37E7] font-bold py-3 rounded-md mb-3 cursor-pointer hover:bg-[#5C37E7] hover:text-white transition">
            Add to Cart
          </button>
          <button className="w-full font-semibold bg-[#5C37E7] text-white py-3 rounded-md cursor-pointer hover:bg-indigo-700 transition">
            Buy with Shop{" "}
            <span className="bg-white text-[#5C37E7] mx-1 px-1 rounded">
              Pay
            </span>
          </button>

          {/* payment icons */}
          <div className="mt-6">
            <h1 className="text-lg font-bold mb-2">Payment and security:</h1>
            <img
              src={Shopify.src}
              alt="Shopify"
              className="w-24 object-cover"
            />
            <div className="mt-2 text-sm text-gray-600 flex gap-2">
              {[Visa, Rupay, PayPal, Ipay, Gpay].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt="pay"
                  className="w-16 object-cover"
                />
              ))}
            </div>
            <div className="mt-10 text-sm text-gray-600 flex items-center gap-2">
              {[Links, Meta, Twitter, Pintrest, LinkedIn].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt="social"
                  className="w-10 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* full-screen zoom */}
      {isFullViewOpen && (
        <div className="fixed inset-0 z-[999] bg-[#111] flex items-center justify-center">
          <div className="flex items-start justify-center gap-6">
            <img
              src={`${ImageBaseUrl}${product.product_image_1}`}
              alt="Full View"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md border border-blue-500"
            />
            <div className="flex flex-col gap-2 z-10">
              <button className="w-12 h-12 rounded-full bg-white text-black shadow cursor-pointer flex justify-center items-center">
                <AiOutlineHeart className="text-2xl" />
              </button>
              <button
                onClick={() => setIsFullViewOpen(false)}
                className="w-12 h-12 rounded-full bg-white text-black shadow cursor-pointer flex justify-center items-center"
              >
                <IoCloseSharp className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AR QR modal – now points to /arview?… */}
      {showQRModal && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-60 flex items-center justify-center px-4">
          <div className="relative bg-white max-w-md w-full rounded-xl shadow-lg p-10 flex flex-col items-center gap-4">
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-2 right-2 cursor-pointer"
            >
              <IoCloseSharp className="text-3xl" />
            </button>

            <img src={ARVIEW.src} alt="AR Preview" className="w-full rounded" />
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-1">
                See it in your space
              </h2>
              <p className="text-sm text-gray-600">
                Scan the code with your phone
              </p>
            </div>

            {/* QR code */}
            <div className="border rounded-md p-2">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  arDeepLink
                )}`}
                alt="QR"
              />
            </div>

            {/* copy link */}
            <div className="w-full">
              <p className="text-sm text-center text-gray-600 mb-1">
                Or copy link
              </p>
              <div className="flex items-center border rounded-md overflow-hidden">
                <input
                  type="text"
                  readOnly
                  value={arDeepLink}
                  className="w-full px-3 py-2 text-sm text-gray-700 outline-none"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(arDeepLink)}
                  className="bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
                >
                  📋
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
