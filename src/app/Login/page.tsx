"use client";

import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Replace with API call
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-white bg-[#0f172a]">
      {/* Left Form Section */}
      <div className="w-full lg:w-3/4 flex justify-center items-center px-4 py-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-2">Sign in</h2>
          <p className="text-sm text-gray-400 mb-6">
            Sign in to your account to explore our Art collections. Don’t have
            an account already?{" "}
            <Link href="/Signup" className="text-blue-400 hover:underline">
              Sign up here
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Provide your email address"
                className="w-full mt-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full mt-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition cursor-pointer"
            >
              Sign in
            </button>

            <div className="flex justify-end">
              <Link href="/ForgotPassword" className="text-blue-400 hover:underline">
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center my-3">
              <hr className="flex-grow border-gray-700" />
              <span className="mx-2 text-gray-400">OR</span>
              <hr className="flex-grow border-gray-700" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-600 text-white flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>

      {/* Right Info Section */}
      <div className="hidden lg:flex lg:flex-col justify-between items-start px-8 py-10 w-1/4 bg-black">
        <div>
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <p className="mt-6 text-lg font-medium leading-relaxed">
            Discover the world of Art. Realize the potential of Real World
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-10">
          Powered by: <span className="font-semibold">Art on All</span>
        </p>
      </div>
    </div>
  );
}
