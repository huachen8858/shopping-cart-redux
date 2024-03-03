import React from "react";
import { removeFromCart } from "@/store/slices/cart-slice";

import { useDispatch } from "react-redux";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };
  return (
    <>
      <div className="lg:w-[500px] flex items-center p-5 justify-between bg-blue-300 mt-2 mb-5 rounded-xl md:w-[400px] sm:w-[300px] flex-col">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-blue-900 text-white rounded-lg font-bold px-8 py-2"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
