"use client";

import { navLinks } from "@/app/data";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-5 py-6 lg:pb-3">
        {/* --- LOGO --- */}
        <div>
          <Image src="/images/logo.svg" alt="logo" width={65} height={40} />
        </div>

        {/* --- Navigation --- */}
        {/* Desktop */}
        <div className="hidden gap-6 md:flex md:gap-8">
          {navLinks.map(({ title }) => (
            <p
              key={title}
              className="cursor-pointer text-neutral-30 hover:text-primary-20"
            >
              {title}
            </p>
          ))}
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
              {navLinks.map(({ title }) => (
                <p key={title}>{title}</p>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
