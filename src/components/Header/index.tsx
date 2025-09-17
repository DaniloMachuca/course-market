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
      <div className="container mx-auto sm:flex justify-between items-center text-center">
        <Link href="/" className="text-2xl font-bold">
          Marketplace
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/cursos" className="hover:underline">
            Cursos
          </Link>
          <Link href="/meus-cursos" className="hover:underline">
            Meus Cursos
          </Link>
          <Link href="/favoritos" className="hover:underline">
            Favoritos
          </Link>
        </nav>

        {/* Botão para Menu Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden block text-center mx-auto"
        >
          <Menu />{" "}
        </button>
      </div>

      {/* Menu Mobile (visível apenas quando o estado 'menuOpen' for true) */}
      <nav className={`sm:hidden ${menuOpen ? "block" : "hidden"} mt-4`}>
        <ul className="flex flex-col space-y-4 items-center">
          <li>
            <Link href="/cursos" onClick={toggleMenu} className="block text-xl">
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="/meus-cursos"
              onClick={toggleMenu}
              className="block text-xl"
            >
              Meus Cursos
            </Link>
          </li>
          <li>
            <Link
              href="/favoritos"
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
