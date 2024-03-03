import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-around h-20 max-w-6xl mx-auto">
        <Link href="/">
          <div className="ml-5">
            <h1 className="text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link href="/">
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          <Link href="/cart">
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
