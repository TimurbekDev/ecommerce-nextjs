import { IProduct } from "@/types/ProductType";
import Product from "./Product";

const Products = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();

  return (
    <div className="grid grid-cols-3 gap-2 my-2">
      {products.map((product: IProduct) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
