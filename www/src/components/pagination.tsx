"use client";

import arrow from "@/assets/images/Arrow.svg";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InvoiceSummary from "./invoice-summary";

export type Bill = {
  controlId: number;
  amount: number;
  date: string;
  description: string;
  invoiceNumber: number;
  dueDate: string;
  accountNumber: number;
};

type PaginationProps = {
  model: Bill[];
};

export default function SimplePagination({ model }: PaginationProps) {
  const itemsPerPage = 10;
  const [active, setActive] = React.useState(1);

  const totalPages = Math.ceil(model.length / itemsPerPage);

  const next = () => {
    if (active < totalPages) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  const startIndex = (active - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const searchParams = useSearchParams();
  const currentPageItems = model.slice(startIndex, endIndex);
  const router = useRouter();
  const pathname = usePathname();

  const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
  const [selectInvoices, setSelectInvoices] = useState(true);

  const handleInvoiceClick = (controlId: number) => {
    if (!selectedInvoices.includes(controlId)) {
      selectedInvoices.push(controlId);
    }

    setURLSearchParam("invoices", selectedInvoices);
  };

  useEffect(() => {
    const showPayInvoicesParam = searchParams?.get("pay-invoice");

    showPayInvoicesParam == "true"
      ? setSelectInvoices(true)
      : setSelectInvoices(false);

    if (!selectInvoices && showPayInvoicesParam == "true") {
      setSelectedInvoices([]);
    }
  }, [searchParams, selectInvoices]);

  function setURLSearchParam(name: string, param: number[]) {
    const current = new URLSearchParams(
      searchParams ? Array.from(searchParams.entries()) : []
    );

    if (current.has(name)) {
      current.delete(name);
    }

    current.set(name, param.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);

    return current;
  }

  return (
    <section className="mt-2 h-auto w-full">
      <div className="text-center">
        <ul className="pb-4 text-left font-sans">
          {currentPageItems.map((item) => (
            <li
              key={item?.controlId}
              className="grid gap-1 border-b border-b-gray-border py-2"
            >
              <InvoiceSummary
                item={item}
                key={item.controlId}
                handleInvoiceClick={handleInvoiceClick}
                selectInvoices={selectInvoices}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-8">
        <button
          className="cursor-pointer rounded-md border border-solid border-athens p-2"
          onClick={prev}
          disabled={active === 1}
        >
          <Image src={arrow} alt="Next Page" className="h-5 w-5 rotate-180" />
        </button>
        <div>
          <p className="font-normal">
            Page {active} of {totalPages}
          </p>
        </div>
        <button
          className="cursor-pointer rounded-md  border border-solid border-athens p-2"
          onClick={next}
          disabled={active === totalPages}
        >
          <Image src={arrow} alt="Next Page" className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
