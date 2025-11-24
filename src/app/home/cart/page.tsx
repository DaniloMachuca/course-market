"use client";

import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { RootReducer } from "@/store";
import Link from "next/link";
import { parseToBRL } from "@/utils";
import { redirect } from "next/navigation";

const CartPage = () => {
  const { list } = useSelector((state: RootReducer) => state.cart);
  const total = list.reduce((acc, course) => acc + course.price, 0);

  return (
    <div className="container mx-auto p-8 max-w-6xl min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8">
      <main className="min-h-screen col-span-2 p-2">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">
          Carrinho de compras
        </h3>
        {list.length === 0 ? (
          <>
            <p className="text-2xl mb-8">
              Você não possui cursos no carrinho no momento
            </p>
            <Link
              href="/home/courses"
              className="text-2x1 bg-primary text-white py-2 px-3 rounded hover:bg-primary-dark transition-colors hover:cursor-pointer"
            >
              Procurar por Cursos
            </Link>
          </>
        ) : (
          <>
            <div className="flex flex-col">
              {list.map((course) => (
                <CartItem key={course.id} course={course} />
              ))}
            </div>
          </>
        )}
      </main>
      {list.length === 0 ? null : (
        <aside>
          <h3 className="text-3xl font-bold col-span-1 mb-8 text-gray-800">
            Resumo da compra
          </h3>
          <p className="text-2xl mb-8">Valor total: {parseToBRL(total)}</p>
          <button
            onClick={() => redirect("/home/cart/checkout")}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark cursor-pointer hover:cursor-pointer transition-colors duration-300"
          >
            Ir para o checkout
          </button>
        </aside>
      )}
    </div>
  );
};

export default CartPage;
