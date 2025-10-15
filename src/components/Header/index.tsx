"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "@geist-ui/icons";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-white p-4">
      <div className="container max-w-6xl mx-auto sm:flex justify-between items-center text-center">
        <Link href="/home" className="text-3xl font-bold">
          Marketplace
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden sm:flex space-x-6 font-bold">
          <Link href="/home/courses" className="hover:underline">
            Cursos
          </Link>
          <Link href="/home/meus-cursos" className="hover:underline">
            Meus Cursos
          </Link>
          <Link href="/home/favorites" className="hover:underline">
            Favoritos
          </Link>
        </nav>

        {/* Botão para Menu Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden block text-center mx-auto hover:cursor-pointer mt-0.5"
        >
          <Menu />{" "}
        </button>
      </div>

      {/* Menu Mobile (visível apenas quando o estado 'menuOpen' for true) */}
      <nav className={`sm:hidden ${menuOpen ? "block" : "hidden"} mt-4`}>
        <ul className="flex flex-col space-y-4 items-center">
          <li>
            <Link
              href="/home/cursos"
              onClick={toggleMenu}
              className="block text-xl"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="/home/meus-cursos"
              onClick={toggleMenu}
              className="block text-xl"
            >
              Meus Cursos
            </Link>
          </li>
          <li>
            <Link
              href="/home/favoritos"
              onClick={toggleMenu}
              className="block text-xl"
            >
              Favoritos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
