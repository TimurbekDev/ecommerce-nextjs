"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconLucideInstagram } from "@/icons/InstagramIcon";
import { IconLucideYoutube } from "@/icons/YouTubeIcon";
import { IconLucideFacebook } from "@/icons/FacebookIcon";

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="bg-[#141718] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-[#FEFEFE]">3legant.</span>
            <span className="text-[#6C7275]">|</span>
            <span className="text-[#6C7275]">Gift & Decoration Store</span>
          </div>

          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  className={`${
                    pathName === "/"
                      ? "underline text-[#FEFEFE]"
                      : "text-slate-100"
                  } text-[#FEFEFE] hover:text-[#6C7275]`}
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/shop"
                      ? "underline text-[#FEFEFE]"
                      : "text-slate-100"
                  } text-[#FEFEFE] hover:text-[#6C7275]`}
                  href={"/shop"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/product"
                      ? "underline text-[#FEFEFE]"
                      : "text-slate-100"
                  } text-[#FEFEFE] hover:text-[#6C7275]`}
                  href={"/product"}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  className={`text-[#FEFEFE] hover:text-[#6C7275] ${
                    pathName === "/contactus"
                      ? "underline text-[#FEFEFE]"
                      : "text-slate-100"
                  }`}
                  href={"/contactus"}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-[#232627]">
          <div className="flex space-x-6">
            <span className="text-[#6C7275]">
              Copyright © 2023 3legant. All rights reserved
            </span>
            <a href="#" className="text-[#6C7275] hover:text-[#FEFEFE]">
              Privacy Policy
            </a>
            <a href="#" className="text-[#6C7275] hover:text-[#FEFEFE]">
              Terms of Use
            </a>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-[#6C7275] hover:text-[#FEFEFE]">
              <IconLucideInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#6C7275] hover:text-[#FEFEFE]">
              <IconLucideFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#6C7275] hover:text-[#FEFEFE]">
              <IconLucideYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
