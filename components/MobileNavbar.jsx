"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "about me",
    path: "/about",
  },
];

const MobileNavbar = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open Menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"} aria-label="Home">
            <h1 className="text-4xl font-semibold font-audiowide tracking-custom uppercase flex justify-center items-baseline">
              <span className="block text-6xl md:hidden">F</span>
              <span className="hidden md:block">ISAL</span>
              <span className="text-accent text-8xl">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, idx) => {
            return (
              <Link
                href={link.path}
                key={idx}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
                aria-label={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
