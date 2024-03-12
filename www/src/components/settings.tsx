"use client";

import iconPaymentCard from "@/assets/icons/home-page/icon-payment-card.svg";
import iconLock from "@/assets/images/Lock.svg";
import iconUser from "@/assets/images/UserRed.svg";
import iconSettings from "@/assets/images/icon-account-settings.svg";
import iconBill from "@/assets/images/icon-bill-wettings.svg";
import iconPhone from "@/assets/images/icon-phoneRed.svg";
// import { Link } from "@/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Setting() {
  return (
    <div>
      <section className="border-b-2 border-gray-border p-4 font-sans text-sm font-bold text-slate">
        Settings
      </section>
      <section className="container mb-28 mt-4">
        <div className="grid grid-cols-2 gap-4 py-4">
          <Link
            href="#"
            className="col-span-full flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 text-base font-bold text-athens shadow-sm"
          >
            <Image src={iconBill} alt="Settings Service Icon" />
            <p className="text-base font-bold text-slate-dark">Billing</p>
          </Link>
          <Link
            href="#"
            className="col-span-full flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 text-base font-bold text-athens shadow-sm"
          >
            <Image
              height={48}
              width={48}
              src={iconPaymentCard}
              alt="Settings Service Icon"
            />
            <p className="text-base font-bold text-slate-dark">
              Payment Methods
            </p>
          </Link>
          <Link
            href="#"
            className="col-span-full flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 text-base font-bold text-athens shadow-sm"
          >
            <Image src={iconSettings} alt="Settings Service Icon" />
            <p className="text-base font-bold text-slate-dark">
              Manage Accounts
            </p>
          </Link>
          <Link
            href="/modify-username"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 text-base font-bold text-athens shadow-sm"
          >
            <Image className="h-8 w-8" src={iconUser} alt="User Icon" />
            <p className="text-base font-bold text-slate-dark">Username</p>
          </Link>
          <Link
            href="/modify-password"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 text-base font-bold text-athens shadow-sm"
          >
            <Image src={iconLock} alt="Lock Icon" />
            <p className="text-base font-bold text-slate-dark">Password</p>
          </Link>
          <Link
            href="/contact-information"
            className="col-span-full flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 text-base font-bold text-athens shadow-sm"
          >
            <Image src={iconPhone} alt="Phone Service Icon" />
            <p className="text-base font-bold text-slate-dark">
              Contact Information
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
