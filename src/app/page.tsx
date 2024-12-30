import Image from "next/image";
import { Suspense } from "react";

import Page_Header from "../../public/Page_Header.png";
import Newsletter from "../../public/Newsletter.png";
import Products from "@/components/Products";
import { ProductsSkeleton } from "@/components/ProductsSkeleton";

export default function Home() {
  return (
    <div className="grid place-items-center bg-slate-400">
      <div className="mx-auto my-1">
        <Image src={Page_Header} alt="Header rasmi" width={1440} height={392} />
      </div>

      {/* Productss */}
      <Suspense fallback={<ProductsSkeleton />}>
        <Products/>
      </Suspense>

      <button className="m-8 py-2 px-4 bg-white text-black rounded-3xl border-2 border-black">
        Show more
      </button>

      <div className="mx-auto my-1">
        <Image
          src={Newsletter}
          alt="Newsletter rasmi"
          width={1440}
          height={392}
        />
      </div>
    </div>
  );
}
