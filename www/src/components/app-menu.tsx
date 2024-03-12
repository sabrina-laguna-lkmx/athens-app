"use client";

import athensLogo from "@/assets/images/athens-bg-logo.svg";
import logoutIcon from "@/assets/images/icon-logout--black.svg";
// import { Link } from "@/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AppMenu({ closeMenu }: { closeMenu: () => void }) {
  const router = useRouter();

  function handleLogoutClick() {
    // logout();
    closeMenu();
    router.replace("/");
  }

  return (
    <article className="fixed bottom-0 left-0 z-20 flex h-screen w-screen flex-col bg-white p-4">
      <div className="flex items-center justify-between pb-4">
        <Image
          className="block h-7 w-24"
          src={athensLogo}
          alt="Athens Services Logo"
        />
        <XMarkIcon onClick={closeMenu} className="h-6 w-6 text-black" />
      </div>
      <div className="mb-auto">
        <p className="py-2 text-sm font-semibold text-slate">(888) 336-6100</p>
        <nav className="flex flex-col text-sm font-normal text-slate">
          <Link onClick={closeMenu} className="py-3" href="/dashboard">
            Online Billing FAQ
          </Link>
          <Link onClick={closeMenu} className="py-3" href="#">
            Customer Service
          </Link>
          <Link onClick={closeMenu} className="py-3" href="#">
            Bulky Pickup
          </Link>
          <Link onClick={closeMenu} className="py-3" href="#">
            Recycling Guide
          </Link>
        </nav>
        <hr className="my-4 block h-1 w-16 bg-athens" />
        <Link className="py-3 text-sm text-slate" href="/">
          Go to AthensServices.com
        </Link>
      </div>
      <div className="flex gap-2">
        <Image
          onClick={handleLogoutClick}
          className="h-[26px] w-[26px] text-black"
          src={logoutIcon}
          alt="Log Out Icon"
        />
        <p
          onClick={handleLogoutClick}
          className="mt-[2px] text-sm font-normal text-slate"
        >
          Log Out
        </p>
      </div>
    </article>
  );
}
