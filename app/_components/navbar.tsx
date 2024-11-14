"use client";

import { UserButton } from "@clerk/nextjs";
import { DollarSignIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-6 md:gap-10">
        <DollarSignIcon />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
      </div>
      <div>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
