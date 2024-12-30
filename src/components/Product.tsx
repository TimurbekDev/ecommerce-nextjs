import { IProduct } from "@/types/ProductType";

// components/Product.js
export default function Product({ product }: { product: IProduct }) {
  const { title, price, stock, meta, brand, images } = product;
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border p-4 bg-white">
      <img className="w-full h-48 object-cover" src={images[0]} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-black">{title}</h2>
        <p className="text-gray-700">
          Brand: <span className="font-medium">{brand}</span>
        </p>
        <p className="text-gray-700">
          Price: <span className="font-medium">${price}</span>
        </p>
        <p className="text-gray-700">
          Quantity: <span className="font-medium">{stock}</span>
        </p>
        <p className="text-gray-700">
          Date Added: <span className="font-medium">{meta.createdAt}</span>
        </p>
      </div>
    </div>
  );
}
