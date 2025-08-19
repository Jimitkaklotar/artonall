"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Visa from "../../../public/Product/visa.png";
import Rupay from "../../../public/Product/rupay.png";
import PayPal from "../../../public/Product/paypal.png";
import Ipay from "../../../public/Product/ipay.png";
import Gpay from "../../../public/Product/gpay.png";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 border-b border-gray-700">
        {/* Logo */}
        <div>
          <Image
            src="/logo.png" // replace with your footer logo
            alt="Art on All Logo"
            width={120}
            height={120}
            className="mb-4"
          />
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            {["All Prints", "Materials", "Sizes", "Custom Prints", "AR Features", "3D Models"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            {["FAQs", "Contact us", "Shipping info", "AR Help"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-4">About us</h3>
          <ul className="space-y-2">
            {["Search", "Our Story", "Blog", "Press", "Wholesale", "Customer Support"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="mb-3">Subscribe for exclusive offers and art inspiration</p>
          <div className="flex mb-4 gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 w-full bg-white rounded-md outline-none"
            />
            <button className="bg-indigo-600 px-4 rounded-md hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-white text-black px-3 py-1 rounded flex items-center gap-2 text-xs">
              <FaApple /> AppleStore
            </button>
            <button className="bg-white text-black px-3 py-1 rounded flex items-center gap-2 text-xs">
              <FaGooglePlay /> Playstore
            </button>
          </div>
          <div className="flex gap-2">
            <Image src={Visa} alt="Visa" width={40} height={25} />
            <Image src={Rupay} alt="Rupay" width={40} height={25} />
            <Image src={PayPal} alt="PayPal" width={40} height={25} />
            <Image src={Ipay} alt="Apple Pay" width={40} height={25} />
            <Image src={Gpay} alt="Google Pay" width={40} height={25} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs gap-3">
        <p>2025, Art on All</p>
        <div className="flex items-center gap-4">
          <FaEnvelope /> info@artonall.com
          <FaPhoneAlt /> (028) 302 68623
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {["Privacy policy", "Terms & Conditions", "Refund Policy", "Shipping Policy", "Contact information", "Cookie Policy"].map((item) => (
            <Link href="#" key={item} className="hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
