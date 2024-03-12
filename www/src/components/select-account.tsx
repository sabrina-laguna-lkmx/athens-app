"use client";

import iconSwitch from "@/assets/images/icon-account-switch.svg";
import { useAuth } from "@/context/auth-context";
import Image from "next/image";
import { useState } from "react";
import AccountsList from "./accounts-list";

export default function SelectAccount({ title }: { title: string }) {
  const [showList, setShowList] = useState(false);
  const { selectedAccount } = useAuth();

  function handleOnClick() {
    setShowList((prev) => !prev);
  }

  return (
    <header className="border-b border-gray-border px-4 text-slate lg:container">
      <h1 className="text-ellipsis font-sans text-sm font-semibold">{title}</h1>
      <section className="mb-3 flex items-center gap-2">
        <div className="w-36 overflow-x-hidden border-r-2 border-gray-border">
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold">
            {selectedAccount?.company}-{selectedAccount?.id}
          </h2>
        </div>
        <div className="max-w-[186px] overflow-x-hidden lg:hidden">
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap">
            {selectedAccount?.address}
          </h3>
        </div>
        <div className="hidden max-w-full lg:block">
          <h3 className="text-ellipsis whitespace-nowrap">
            {selectedAccount?.address}
          </h3>
        </div>
        <Image
          src={iconSwitch}
          alt="Switch Account"
          onClick={handleOnClick}
          className="h-8 w-8 cursor-pointer"
        />
      </section>
      {showList && <AccountsList onClose={handleOnClick} />}
    </header>
  );
}
