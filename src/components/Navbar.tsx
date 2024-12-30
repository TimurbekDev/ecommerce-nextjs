"use client";
import React from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-slate-300 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-32">
            <span className="text-2xl font-bold">3legant.</span>
          </div>

          {/* Centered Navigation Links */}
          <ul className="flex items-center justify-center space-x-8 flex-1">
            <li>
              <Link
                className={`${
                  pathName === "/" ? "underline text-black" : "text-gray-500"
                }`}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathName === "/shop"
                    ? "underline text-black"
                    : "text-gray-500"
                }`}
                href={"/shop"}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathName === "/product"
                    ? "underline text-black"
                    : "text-gray-500"
                }`}
                href={"/product"}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathName === "/contactus"
                    ? "underline text-black"
                    : "text-gray-500"
                }`}
                href={"/contactus"}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 w-32 justify-end">
            <button className="text-gray-500 hover:text-black">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-black">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-black relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
