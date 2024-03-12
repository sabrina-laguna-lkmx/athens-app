"use client";

import logo from "@/assets/images/athens-bg-white-logo.svg";
import userIcon from "@/assets/images/icon-user.svg";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { Link, usePathname } from "@/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AppMenu from "./app-menu";

export default function AppHeader() {
  const { user } = useCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="flex items-center bg-athens p-3 text-white lg:p-0">
      <nav className="grid w-full grid-cols-[106px_1fr_24px] items-center gap-2 lg:container lg:grid-cols-[106px_1fr_auto] lg:gap-6">
        <Link className="mr-auto block" href="/">
          <Image
            className="h-8 w-auto"
            src={logo}
            alt="Athens Services Logo"
          ></Image>
        </Link>
        <div className="hidden lg:flex lg:items-center">
          <Link
            className={`px-4 py-5 ${
              pathname === "/dashboard"
                ? "border-b-4 border-b-white"
                : "border-b-4 border-b-athens"
            }`}
            href="/dashboard"
          >
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link
            className={`px-4 py-5 ${
              pathname === "/invoices"
                ? "border-b-4 border-b-white"
                : "border-b-4 border-b-athens"
            }`}
            href="/invoices"
          >
            <span className="text-sm">Invoices</span>
          </Link>
          <Link
            className={`px-4 py-5 ${
              pathname === "/settings"
                ? "border-b-4 border-b-white"
                : "border-b-4 border-b-athens"
            }`}
            href="/settings"
          >
            <span className="text-sm">Settings</span>
          </Link>
        </div>
        <span className="justify-self-center truncate text-sm font-bold">
          <Image
            className="inline-block h-6 w-6 align-middle"
            src={userIcon}
            alt="User Icon"
          ></Image>
          <span className="align-middle text-base">{user?.email}</span>
        </span>
        <Bars3Icon
          onClick={handleOpenMenu}
          className="h-6 w-6 lg:hidden"
        ></Bars3Icon>
      </nav>
      {isMenuOpen && <AppMenu closeMenu={closeMenu} />}
    </header>
  );
}
