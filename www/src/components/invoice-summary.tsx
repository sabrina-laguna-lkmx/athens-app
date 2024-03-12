"use client";

import iconPDF from "@/assets/images/icon-pdf.svg";
import { Contract, useAuth } from "@/context/auth-context";
import Image from "next/image";
import { useState } from "react";
import { Bill } from "./pagination";

function getInvoicePDF(item: Bill, selectedAccount: Contract | null) {
  const Rijndael = require("rijndael-js");

  if (item && selectedAccount) {
    const today = new Date();
    const creationtime = today.toISOString().replace(/[-T:]/g, "").slice(0, 14);

    const key = "LPkeEB0H8460AqCPZ5dqIYmg7MgQtdUG";

    const client = "atadvancio";
    const account = selectedAccount.company + "0" + selectedAccount.id;
    const amount = item.amount.toString();
    const data1 = item.invoiceNumber;
    const data2 = item.date.toString();
    const data3 = item.dueDate.toString();

    const action = `getdocument&account=${account}&amount=${amount}&data1=${data1}&data2=${data2}&data3=${data3}&creationtime=${creationtime}`;

    const iv = "OFd72A6v0R3pYz9XMM7L8AEq3AIO8bs7";

    const cipher = new Rijndael(key, "cbc");
    const ciphertext = Buffer.from(cipher.encrypt(action, 256, iv));

    const finalUrl = `https://docs.onlinebiller.com/documents.php?client=${client}&action=${ciphertext.toString(
      "base64",
    )}`;

    return finalUrl;
  }
}

export default function InvoiceSummary({
  item,
  handleInvoiceClick,
  selectInvoices,
}: {
  item: Bill;
  handleInvoiceClick: (controlId: number) => void;
  selectInvoices: boolean;
}) {
  const [hasPendingPayment, setHasPendingPayment] = useState(true);
  const { selectedAccount } = useAuth();

  return (
    <>
      {selectInvoices ? (
        <label
          className="grid grid-cols-[32px,_1fr]"
          htmlFor={`invoice-control-${item.controlId}`}
          onClick={() => handleInvoiceClick(item.controlId)}
        >
          <div className="grid items-center">
            <input
              type="radio"
              id={`invoice-control-${item.controlId}`}
              value={item.controlId}
            />
          </div>
          <div className="grid grid-cols-[24px_1fr_minmax(70px,_auto)] items-center">
            <Image src={iconPDF} className="h-6 w-6" alt="Invoice PDF Icon" />
            <div className="ml-2 overflow-x-hidden text-ellipsis font-sans text-sm font-normal">
              <time className="text-dark-blue" dateTime={item.date}>
                {item?.date}
              </time>
              <p className="overflow-x-hidden truncate whitespace-nowrap text-slate">
                {item?.description}
              </p>
            </div>
            <p className="ml-auto mt-5 justify-end font-mono text-sm font-medium text-slate">
              ${item?.amount}
            </p>
          </div>
        </label>
      ) : (
        <div className="grid">
          <div className="grid grid-cols-[24px_1fr_minmax(70px,_auto)] items-center">
            <a href={getInvoicePDF(item, selectedAccount)} target="_blank">
              <Image src={iconPDF} className="h-6 w-6" alt="Invoice PDF Icon" />
            </a>
            <div className="ml-2 overflow-x-hidden text-ellipsis font-sans text-sm font-normal">
              <time className="text-dark-blue" dateTime={item.date}>
                {item?.date}
              </time>
              <p className="overflow-x-hidden truncate whitespace-nowrap text-slate">
                {item?.description}
              </p>
            </div>
            <p className="ml-auto mt-5 justify-end font-mono text-sm font-medium text-slate">
              ${item?.amount}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
