import React, { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import { useSelector } from "react-redux";

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
      <div>CartPage</div>
    </>
  );
}
