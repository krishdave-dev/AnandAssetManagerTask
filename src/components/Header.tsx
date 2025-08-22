"use client";
import { useState } from "react";
import Link from "next/link";
import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent px-4 lg:px-24 py-4 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-[#E7F7FC] flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex bg-[#E7F7FC] rounded-2xl px-30 py-3 font-helvetica">
          <div className="flex items-center gap-10">
            {
              [
                { href: "/", label: "Dashboard" },
                { href: "/investments", label: "Investments" },
                { href: "/strategies", label: "Strategies" },
                { href: "/diy", label: "DIY" },
              ].map(({ href, label }) => (
                <div key={label} className="relative group">
                  <Link
                    href={href}
                    className="text-gray-800 text-md hover:text-green-600 transition-colors"
                  >
                    {label}
                  </Link>
                  <span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </div>
              ))
            }
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6 text-gray-800" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blue-100/10">
            <div className="flex flex-col gap-4 px-10 py-4 font-helvetica">
              <Link
                href="/"
                className="text-gray-800 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/investments"
                className="text-green-600 text-xl hover:text-green-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investments
              </Link>
              <Link
                href="/strategies"
                className="text-gray-800 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Strategies
              </Link>
              <Link
                href="/diy"
                className="text-gray-800 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DIY
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Profile and Notifications */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <button className="p-2 text-black hover:text-gray-600 relative">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
          <Button
            variant="ghost"
            className="w-12 h-12 rounded-full bg-gray-200/40 hover:bg-gray-200/60 transition-colors flex items-center justify-center"
          >
            <User className="w-8 h-8 text-black" />
          </Button>
        </div>
      </div>
    </header>
  );
}
