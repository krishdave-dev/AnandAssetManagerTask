"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/investments", label: "Investments" },
    { href: "/strategies", label: "Strategies" },
    { href: "/diy", label: "DIY" },
  ];

  return (
    <header className="w-full bg-white px-6 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[80px] h-[80px] rounded-full bg-[#E7F7FC] flex items-center justify-center">
            <svg
              width="22.56"
              height="40"
              viewBox="0 0 22.56 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M19.7729 29.7929L2.72705 39.7514C1.51624 40.458 0 39.5747 0 38.1579V18.2372C0 16.8203 1.51624 15.9371 2.72705 16.6437L19.7729 26.6059C20.9838 27.3125 20.9838 29.0863 19.7729 29.7929Z"
                  fill="#009DD0"
                />
                <path
                  d="M2.72705 13.3941L19.7729 23.3563C20.9838 24.0629 22.5 23.1796 22.5 21.7628V1.84214C22.5 0.425281 20.9838 -0.457955 19.7729 0.248634L2.72705 10.2071C1.51624 10.9137 1.51624 12.6875 2.72705 13.3941Z"
                  fill="#45E083"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="22.56" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center justify-center"
          style={{
            width: 830,
            height: 77,
            borderRadius: 24,
            background: "#E7F7FC",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <div className="flex items-center justify-center gap-8 w-full">
            {navLinks.map(({ href, label }) => (
              <div key={label} className="relative group">
                <Link
                  href={href}
                  className="font-helvetica text-[24px] text-gray-800 hover:text-green-600 transition-colors"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {label}
                </Link>
                <span
                  className="absolute left-0 -bottom-2 h-1 w-full bg-green-600 rounded-full
                    transition-transform duration-300 origin-left
                    scale-x-0 group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>
        </nav>

        {/* Profile and Notifications */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative flex items-center">
            <button
              className="p-0 text-black hover:text-gray-600 relative"
              style={{ width: 44, height: 44 }}
            >
              <svg
                className="w-[44px] h-[44px]"
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
              <span className="absolute top-0 right-0 w-[20px] h-[20px] bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
          <button
            type="button"
            className="p-0 border-none bg-transparent focus:outline-none"
          >
            <Image
              src="/profile.png"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-800" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-blue-100/10">
          <div className="flex flex-col gap-4 px-6 py-4 font-helvetica">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-gray-800 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
