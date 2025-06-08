import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";
export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-wrap  gap-15 h-auto rounded-lg shadow-md ml-10 p-20">
      {products.map((product) => (
        <Link key={product.id} href={"/products/" + product.id} className="w-40 text-center border p-2 rounded hover:shadow-lg">
          <Image
            src={"/" + product.imageUrl}
            alt="Product image"
            width={250}
            height={150}
			className="object-cover rounded w-full h-36"
          />
          <h2 className="font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
