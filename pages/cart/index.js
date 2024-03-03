import React, { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import { useSelector } from "react-redux";
import Link from "next/link";
import CartTile from "@/components/cart-tile";

export default function CartPage() {
  const [totalCart, setTotalCart] = useState(0); // 購物車金額
  const { cart } = useSelector((state) => state);

  // 當購物車改變，重新計算總金額
  useEffect(() => {
    // reduce()方法用於將陣列中的每個元素累加至單一值, 初始值設為0
    setTotalCart(cart.reduce((account, current) => account + current.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <>
      <Header />
      {cart && cart.length ? (
        <>
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map((cartItem, index) => {
              return <CartTile cartItem={cartItem} key={index}/>
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
          <h1 className="font-bold text-lg text-blue-800">Your Cart Summary</h1>
          <p>
            <span className="text-gray-800 font-bold">Total Item</span>
            <span>: {cart.length}</span>
          </p>
          <p>
          <span className="text-gray-800 font-bold">Total Amount</span>
            <span>: {totalCart}</span>
          </p>
        </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link href="/">
            <button className="bg-blue-950 text-white rounded-lg font-bold px-8 py-2">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
