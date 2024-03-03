"use client";

import { Button } from "@/components/ui/button";
import { Cross, MenuIcon, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Links = [
  { name: "Home", href: "/" },
  { name: "Hero", href: "/Hero" },
  { name: "Honda", href: "/Honda" },
  { name: "TVS", href: "/TVS" },
  { name: "Yamaha", href: "/Yamaha" },
  { name: "Bajaj", href: "/Bajaj" },
  { name: "Mahindra", href: "/Mahindra" },
  { name: "Suzuki", href: "/Suzuki" },
  { name: "KTM", href: "/KTM" },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className="border-b-2 flex flex-col items-center justify-between z-50 sticky top-0 bg-white"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between lg:justify-center  mx-auto md:max-w-2xl lg:max-w-7xl px-3 py-1 sm:w-full w-full">
        <Link href="/">
          <div>
            <h1 className="text-xl md:text-5xl font-bold  md:my-1 ">
              ALPHABET VISOR GLASS
            </h1>
          </div>
        </Link>
        <div className="flex divide-x border-r sm:border-l lg:hidden">
          <Button
            variant={"outline"}
            onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}
            className="flex flex-col gap-y-1.5 h-15 w-15 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            {!showNav ? <MenuIcon /> : <X />}

            {/* <MenuIcon /> */}
          </Button>
        </div>
      </div>
      {showNav && (
        <nav className="bg-black p-5 gap-1 flex flex-col lg:flex ease-in transition duration-500 items-center absolute top-12 left-0 w-full justify-center items-center text-center md:hidden z-50">
          {Links.map((link, idx) => (
            <div key={idx} className="my-3" onClick={() => setShowNav(false)}>
              {pathname === link.href ? (
                <Link
                  className="text-2xl font-bold text-primary my-1 py-2"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-xl font-semibold text-white transition duration-100 hover:text-primary my-1 py-2"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            className="text-2xl font-bold text-white transition duration-100 hover:text-primary my-1 py-2"
            href="https://forms.visme.co/formsPlayer/vdnoqj43-contact-form"
            target="_blank"
            onClick={() => setShowNav(false)}
          >
            Contact Us
          </Link>
          <Link
            className="text-2xl font-bold text-white transition duration-100 hover:text-primary my-1 py-2"
            href={"/aboutUs"}
            onClick={() => setShowNav(false)}
          >
            About Us
          </Link>
        </nav>
      )}

      <nav className="hidden gap-10 lg:flex 2xl:ml-16 mb-3 items-center">
        {Links.map((link, idx) => (
          <div key={idx}>
            {pathname === link.href ? (
              <Link className="text-xl font-bold text-primary" href={link.href}>
                {link.name}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <Link
          className="text-lg text-white font-bold dark bg-secondary p-2 rounded transition duration-200 hover:bg-primary"
          href="https://forms.visme.co/formsPlayer/vdnoqj43-contact-form"
          target="_blank"
        >
          Contact Us
        </Link>
        <Link className="text-xl font-bold " href={"/aboutUs"}>
          About Us
        </Link>
      </nav>
    </header>
  );
}
