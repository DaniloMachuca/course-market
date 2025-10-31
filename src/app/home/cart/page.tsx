"use client";

import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { RootReducer } from "@/store";

const CartPage = () => {
  const { list } = useSelector((state: RootReducer) => state.cart);

  return (
    <div className="container mx-auto p-8 max-w-6xl min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8">
      <main className="min-h-screen col-span-2 p-2">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">
          Carrinho de compras
        </h3>
        <div className="flex flex-col">
          {list.map((course) => (
            <CartItem key={course.id} course={course} />
          ))}
        </div>
      </main>
      <aside>
        <h3 className="text-3xl font-bold col-span-1 mb-8 text-gray-800">
          Resumo da compra
        </h3>
      </aside>
    </div>
  );
};

export default CartPage;
