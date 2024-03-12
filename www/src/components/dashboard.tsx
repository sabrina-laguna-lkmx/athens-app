"use client";

import iconBillingInquiry from "@/assets/icons/billing-inquiry.svg";
import iconTelephone from "@/assets/icons/telephone.svg";
import iconUnion from "@/assets/icons/union.svg";
import iconLock from "@/assets/images/Lock.svg";
import iconUser from "@/assets/images/UserRed.svg";
import iconSettings from "@/assets/images/Vectormanage.svg";
import IconChat from "@/assets/images/icon-tawkto.svg";
import iconTruck from "@/assets/images/icon-truck.svg";
import iconSofa from "@/assets/images/red-icon-sofa.svg";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./drawer";

// import SelectAccount from "@/components/select-account";

// import { ContactInfoModel } from "@/components/contact-info";
// import { useAuth } from "@/context/auth-context";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { Link } from "@/navigation";
// import { Balances, Bill, BillingPreferences } from "@/types/app";
// import useSWR from "swr";
// import Drawer from "../drawer";

export default function Dashboard(/* {
  contactInfo,
}: {
  contactInfo: ContactInfoModel;
} */) {
  //   const { user } = useCurrentUser();
  //   const { selectedAccount } = useAuth();

  //   const { data } = useSWR<Balances | undefined>(
  //     [
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/companies/${selectedAccount?.company}/balances`,
  //       user?.token,
  //     ]
  //     // ([url, token]) =>
  //     //   fetcher(url, {
  //     //     cache: "no-cache",
  //     //     headers: {
  //     //       Authorization: `Bearer ${token}`,
  //     //     },
  //     //   })
  //   );

  //   const { data: billsData } = useSWR<Bill[] | undefined>(
  //     [
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/bills`,
  //       user?.token,
  //     ]
  //     // ([url, token]) =>
  //     //   fetcher(url, {
  //     //     cache: "no-cache",
  //     //     headers: {
  //     //       Authorization: `Bearer ${token}`,
  //     //     },
  //     //   })
  //   );

  //   const { data: billingPreferences } = useSWR<BillingPreferences | undefined>(
  //     [
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/billing-preferences`,
  //       user?.token,
  //     ]
  //     // ([url, token]) =>
  //     //   fetcher(url, {
  //     //     cache: "no-cache",
  //     //     headers: {
  //     //       Authorization: `Bearer ${token}`,
  //     //     },
  //     //   })
  //   );

  return (
    <div className="mb-28 pb-2 font-sans">
      <section className="bg-white pt-2">
        {/* <SelectAccount title="Dashboard" /> */}
      </section>
      <div className="container lg:grid lg:grid-cols-[1fr,345px] lg:gap-[26px]">
        <div className="mt-4 lg:col-start-2">
          <section className="rounded-md border border-solid border-gray-border bg-white p-4 shadow-sm">
            <h2 className="font-sans text-sm font-bold">Balance</h2>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm font-normal text-dark-blue">
              <dt className="font-sans">Previous Balance</dt>
              <dd className="justify-self-end font-mono font-medium">
                $277.38
              </dd>
              <dt className="font-sans">Pending Payments</dt>
              <dd className="justify-self-end font-mono font-medium">
                $133.04
              </dd>
              <dt className="font-sans">Current Payments</dt>
              <dd className="justify-self-end font-mono font-medium">$0.00</dd>
              <dt className="font-sans">Current Charges</dt>
              <dd className="justify-self-end font-mono font-medium">$0.00</dd>
              <dt className="self-center font-sans text-lg text-athens">
                Balance Due
              </dt>
              <dd className="self-center justify-self-end font-mono text-2xl font-medium text-athens">
                $133.04
              </dd>
            </dl>
            <Drawer
              className={`hidden lg:mt-[25px] lg:block lg:p-0 lg:shadow-none`}
            />
          </section>
        </div>
        <div className="mt-4 lg:col-start-1 lg:row-start-1">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-[26px]">
            <Link
              href="#"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 font-sans text-base font-bold text-athens shadow-sm"
            >
              <Image
                className="h-8 w-8"
                src={iconSofa}
                alt="Bulky Pickup Service Icon"
              />
              <p className="text-base font-bold text-slate-dark">
                Bulky Pickup
              </p>
            </Link>
            <Link
              href="#"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 font-sans text-base font-bold text-athens shadow-sm"
            >
              <Image src={iconTruck} alt="Rent A Container Service Icon" />
              <p className="text-base font-bold text-slate-dark">
                Rent-A-Container
              </p>
            </Link>
            <Link
              href="#"
              className="col-span-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 font-sans text-base font-bold text-athens shadow-sm lg:col-start-3"
            >
              <Image src={iconUnion} alt="Customer Service Icon" />
              <p className="text-base font-bold text-slate-dark">
                Request Service
              </p>
            </Link>
            <Link
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 font-sans text-base font-bold text-athens shadow-sm lg:col-start-1"
              href={`tel:8883366100`}
            >
              <Image src={iconTelephone} alt="Billing Inquiry Icon" />
              <p className="text-base font-bold text-slate-dark">
                Give Us A Call
              </p>
            </Link>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 font-sans text-base font-bold text-athens shadow-sm">
              <Image src={IconChat} alt="Billing Inquiry Icon" />
              <p className="text-base font-bold text-slate-dark">Let’s Chat</p>
            </div>
            <Link
              className="col-span-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 font-sans text-base font-bold text-athens shadow-sm lg:col-start-3"
              href="mailto:cs@athensservices.com"
            >
              <Image src={iconBillingInquiry} alt="Billing Inquiry Icon" />
              <p className="text-base font-bold text-slate-dark">
                Billing Inquiry
              </p>
            </Link>
          </div>
          <div className="lg:mt-[26px] lg:grid lg:grid-cols-2 lg:gap-[26px]">
            <div className="mt-3 lg:p-0">
              <div className="rounded-md border border-gray-border bg-white p-4 text-center">
                <h2 className="mb-4 text-start text-base font-bold text-slate">
                  Invoices
                </h2>
                <ul className="pb-4 text-left font-sans">
                  {/* {billsData &&
                    billsData?.length > 0 &&
                    billsData?.slice(0, 2).map((bill) => (
                      <li
                        key={bill.controlId}
                        className="grid grid-cols-[24px_1fr_minmax(min-content,_93px)] items-center gap-2 border-b border-b-gray-border py-2"
                      >
                        <Image
                          src={iconPDF}
                          className="h-6 w-6"
                          alt="Invoice PDF Icon"
                        />
                        <div className="overflow-x-hidden text-ellipsis text-left font-sans text-sm font-normal">
                          <time className="text-dark-blue" dateTime={bill.date}>
                            {bill.date}
                          </time>
                          <p className="overflow-x-hidden whitespace-nowrap text-slate">
                            {bill.description}
                          </p>
                        </div>
                        <p className="ml-auto mt-5 justify-end font-mono text-sm font-medium text-slate">
                          ${bill.amount.toFixed(2)}
                        </p>
                      </li>
                    ))} */}
                </ul>
                <Link
                  className="py-4 text-base font-bold text-athens "
                  href="#"
                >
                  View All Invoices
                </Link>
              </div>
            </div>
            <div className="lg:p-0">
              <div className="mt-4 flex flex-col gap-4 rounded-md border border-gray-border bg-white p-4 font-sans text-sm font-normal text-slate shadow-sm lg:mt-3">
                <h2 className="font-semibold">Billing Preferences</h2>
                <div className="flex items-center gap-2">
                  <p>Autopay Enrollment</p>
                  <span className={`rounded-2xl bg-background-green `}>ON</span>
                </div>
                <div className="flex items-center gap-2">
                  <p>Printed Bill</p>
                  <span
                    className={`rounded-2xl bg-background-green  px-2 py-1 text-xs font-medium text-medium-green`}
                  >
                    ON
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p>Email Notifications</p>
                  <span
                    className={`rounded-2xl bg-background-green text-medium-green `}
                  >
                    ON
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p>Email Notifications with Bill</p>
                  <span
                    className={`rounded-2xl bg-background-green text-medium-green`}
                  >
                    ON
                  </span>
                </div>
                <Link
                  className="py-2 text-center text-base font-bold text-athens"
                  href="#"
                >
                  Manage Billing Preferences
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 lg:col-span-2 lg:mt-[26px] lg:grid-cols-3 lg:gap-[26px] lg:p-0">
            <Link
              href="#"
              className="col-span-full flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-border bg-white py-4 text-base font-bold text-athens shadow-sm lg:col-span-1"
            >
              <Image src={iconSettings} alt="Settings Service Icon" />
              <p className="text-base font-bold text-slate-dark md:ml-8 lg:ml-0">
                Manage My Accounts
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
          </div>
        </div>
      </div>
    </div>
  );
}
