"use client";

import iconLeft from "@/assets/images/icon-chevron-left.svg";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "@/navigation";

export default function ContactInformation() {
  return (
    <div>
      <section className="container border-b border-gray-border py-2 text-sm font-normal">
        <Link
          href={"/settings"}
          className="flex items-center gap-1 text-athens"
        >
          <Image src={iconLeft} alt="Go Back Settings" />
          Go Back Settings
        </Link>
      </section>
      <section className="container flex flex-col gap-4 font-sans text-sm text-slate">
        <h3 className="mt-4 text-xl font-bold">Contact Information</h3>
        <div>
          <p className="font-semibold text-gray-blue">Office Address</p>
          <span className="font-normal">
            West Covina-410PO Box 60009 City Of Industry, CA 91716-0009
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-blue">Mailing Address</p>
          <span className="font-normal">
            West Covina-410PO Box 60009 City Of Industry, CA 91716-0009
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-blue">Email</p>
          <span className="font-normal">cs@athensservices.com</span>
        </div>
      </section>
    </div>
  );
}
