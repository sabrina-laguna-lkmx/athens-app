"use client";

import dashboardIcon from "@/assets/images/icon-dashboard.svg";
import invoicesIcon from "@/assets/images/icon-receipt-bill.svg";
import settingsIcon from "@/assets/images/icon-settings.svg";
// import { Link, usePathname } from "@/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppToolbar() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 grid w-full grid-cols-3 rounded-t-2xl bg-slate pb-2 pt-3 text-center">
      <Link
        href="/dashboard"
        className={`flex flex-col items-center justify-center ${
          pathname === "/dashboard" ? "text-white" : "text-gray-blue"
        }`}
      >
        <Image
          className="mb-1 h-7 w-7"
          src={dashboardIcon}
          alt="Dashboard Icon"
        ></Image>
        <span className="text-xs">Dashboard</span>
      </Link>
      <Link
        href="#"
        className={`flex flex-col items-center justify-center  ${
          pathname === "/invoices" ? "text-white" : "text-gray-blue"
        }`}
      >
        <Image
          className="mb-1 h-7 w-7"
          src={invoicesIcon}
          alt="Invoices Icon"
        ></Image>
        <span className="text-xs">Invoices</span>
      </Link>
      <Link
        href="/settings"
        className={`flex flex-col items-center justify-center ${
          pathname === "/settings" ? "text-white" : "text-gray-blue"
        }`}
      >
        <Image
          className="mb-1 h-7 w-7"
          src={settingsIcon}
          alt="User Settings Icon"
        ></Image>
        <span className="text-xs">Settings</span>
      </Link>
    </footer>
  );
}
