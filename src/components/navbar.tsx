"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-5 py-6 md:px-44 md:pt-24">
        {/* --- LOGO --- */}
        <div>
          <Image src="/images/logo.svg" alt="logo" width={65} height={40} />
        </div>

        {/* --- Navigation --- */}
        {/* Desktop */}
        <div className="hidden gap-6 md:flex">
          <p className="text-slate-600 hover:text-rose-500">Home</p>
          <p className="text-slate-600 hover:text-rose-500">New</p>
          <p className="text-slate-600 hover:text-rose-500">Popular</p>
          <p className="text-slate-600 hover:text-rose-500">Trending</p>
          <p className="text-slate-600 hover:text-rose-500">Categories</p>
        </div>

        {/* Mobile */}
        {!menuOpen && (
          // menu when closed
          <Image
            src="/images/icon-menu.svg"
            alt="menu"
            width={40}
            height={17}
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          />
        )}

        {menuOpen && (
          // overlay background
          <div className="absolute left-0 top-0 z-0 h-screen w-screen bg-slate-950/40 transition-all duration-500" />
        )}
        {menuOpen && (
          // menu when open
          <div className="absolute right-0 top-0 h-full w-2/3 bg-white px-5 py-6 transition-all duration-500">
            <div className="flex justify-end">
              <Image
                src="/images/icon-menu-close.svg"
                alt="close"
                width={40}
                height={40}
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-6 pt-14">
              <p>Home</p>
              <p>New</p>
              <p>Popular</p>
              <p>Trending</p>
              <p>Categories</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
