"use client";

import SimplePagination from "@/components/pagination";
import SelectAccount from "@/components/select-account";
import { useAuth } from "@/context/auth-context";
import { useCurrentUser } from "@/hooks/use-current-user";
import fetcher from "@/lib/fetcher";
import { Balances, Bill } from "@/types/app";
import useSWR from "swr";
import Drawer from "./drawer";

export default function Invoices() {
  const { user } = useCurrentUser();
  const { selectedAccount } = useAuth();

  const { data } = useSWR<Bill[] | undefined>(
    [
      `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/bills`,
      user?.token,
    ],
    ([url, token]) =>
      fetcher(url, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  );

  const { data: currentAmount } = useSWR<Balances | undefined>(
    [
      `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/companies/${selectedAccount?.company}/balances`,
      user?.token,
    ],
    ([url, token]) =>
      fetcher(url, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  );

  return (
    <div className="mb-28 grid py-2 font-sans">
      <section className="mb-2">
        <SelectAccount title="Invoices" />
      </section>
      <section className="container grid gap-10 lg:mx-auto lg:max-w-[1280px] lg:grid-cols-[_2fr,_1fr]">
        {data && <SimplePagination model={data} />}
        <div className="mt-4 hidden md:block">
          <section className="rounded-md border border-solid border-gray-border p-4 shadow-sm">
            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm font-normal text-dark-blue">
              <dt className="font-sans">Previous Balance</dt>
              <dd className="justify-self-end font-mono font-medium">
                ${currentAmount?.previousBalance.toFixed(2)}
              </dd>
              <dt className="font-sans">Pending Payments</dt>
              <dd className="justify-self-end font-mono font-medium">
                ${currentAmount?.pendingPayments.toFixed(2)}
              </dd>
              <dt className="font-sans">Current Payments</dt>
              <dd className="justify-self-end font-mono font-medium">
                ${currentAmount?.currentPayments.toFixed(2)}
              </dd>
              <dt className="font-sans">Current Charges</dt>
              <dd className="justify-self-end font-mono font-medium">
                ${currentAmount?.currentCharges.toFixed(2)}
              </dd>
              <dt className="self-center font-sans text-lg text-athens">
                Balance Due
              </dt>
              <dd className="self-center justify-self-end font-mono text-2xl font-medium text-athens">
                ${currentAmount?.balanceDue.toFixed(2)}
              </dd>
            </dl>
            <Drawer
              className={`hidden lg:mt-6 lg:block lg:bg-transparent lg:p-0 lg:shadow-none ${
                currentAmount?.balanceDue && currentAmount?.balanceDue <= 0
                  ? "md:hidden"
                  : ""
              }`}
            />
          </section>
        </div>
      </section>
    </div>
  );
}
