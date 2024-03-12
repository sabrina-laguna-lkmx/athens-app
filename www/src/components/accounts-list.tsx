"use client";

import CheckIcon from "@/assets/icons/check-icon.svg";
import { Contract, useAuth } from "@/context/auth-context";
import Image from "next/image";

export default function AccountsList({ onClose }: { onClose: () => void }) {
  const { contracts, updateContractSelectedState } = useAuth();

  function handleClick(accountId: string) {
    updateContractSelectedState(accountId, true);
    onClose();
  }

  return (
    <ul className="absolute z-10 mx-4 grid bg-white shadow-md">
      {contracts &&
        contracts.map((account: Contract) => (
          <li
            key={account.id}
            className={`grid ${
              account.selected ? "grid-cols-[_1fr,auto]" : "grid-cols-1"
            } cursor-pointer gap-3 border-x border-b border-gray-border px-4 py-3 first:rounded-t-md first:border-t last:rounded-b-md`}
            onClick={() => handleClick(account.id)}
          >
            <div>
              <h4 className="font-semibol text-xl font-bold">
                {account.company}-{account.id}
              </h4>
              <p className="text-sm">{account.address}</p>
            </div>
            <div className="grid w-full">
              {account.selected && (
                <div className="grid items-start justify-end">
                  <Image src={CheckIcon} alt="Check" />
                </div>
              )}
              {account.autopay && (
                <>
                  <span className="grid w-full items-end text-sm font-semibold text-medium-green">
                    Autopay Enrolled
                  </span>
                </>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
}
