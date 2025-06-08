import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-grey shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/products" className="text-white-700 hover:text-blue">
              Products
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-white-700 hover:text-blue">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="text-white-700 hover:text-blue">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
