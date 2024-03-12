"use client";

// import { useAuth } from "@/context/auth-context";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import fetcher from "@/lib/fetcher";
// import { Link } from "@/navigation";
// import { Balances, Bill, BillingPreferences, PaymentMethod } from "@/types/app";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter /* useSearchParams */ } from "next/navigation";
import { ChangeEvent, useState } from "react";
// import { toast } from "sonner";
// import useSWR from "swr";
// import useSWRMutation from "swr/mutation";

type DrawerProps = {
  className?: string;
  route?: string;
};

export default function Drawer({ className, route }: DrawerProps) {
  // const { user } = useCurrentUser();
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  // const { selectedAccount } = useAuth();
  const [invoiceDue, setInvoiceDue] = useState(true);
  const [payInvoice, setPayInvoice] = useState(false);
  const [enableContinueToPay, setEnableContinueToPay] = useState(false);
  const [goToPayment, setGoToPayment] = useState(false);
  const [invoicesSelected, setInvoicesSelected] = useState<
    string[] | undefined
  >([]);
  // const [invoicesToPay, setInvoicesToPay] = useState<Bill[] | undefined>([]);

  // const { data } = useSWR<PaymentMethod[] | undefined>(
  //   [`${process.env.NEXT_PUBLIC_API_URL}/api/payment-methods`, user?.token],
  //   ([url, token]) =>
  //     fetcher(url, {
  //       cache: "no-cache",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }),
  // );

  // const { data: balances } = useSWR<Balances | undefined>(
  //   [
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/companies/${selectedAccount?.company}/balances`,
  //     user?.token,
  //   ],
  //   ([url, token]) =>
  //     fetcher(url, {
  //       cache: "no-cache",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }),
  // );

  // const { data: billingPreferences } = useSWR<BillingPreferences | undefined>(
  //   [
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/billing-preferences`,
  //     user?.token,
  //   ],
  //   ([url, token]) =>
  //     fetcher(url, {
  //       cache: "no-cache",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }),
  // );

  // const { data: invoicesList } = useSWR<Bill[] | undefined>(
  //   [
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${selectedAccount?.id}/bills`,
  //     user?.token,
  //   ],
  //   ([url, token]) =>
  //     fetcher(url, {
  //       cache: "no-cache",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }),
  // );

  // const { trigger } = useSWRMutation(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/payments`,
  //   makePayment,
  // );

  // function handleShowPaymentMethods() {
  //   setShowPaymentMethods(true);
  //   setURLSearchParam("show-payment-methods", "true");
  // }

  // function handleHidePaymentMethods() {
  //   setShowPaymentMethods(false);
  //   setGoToPayment(false);
  //   setURLSearchParam("show-payment-methods", "false");
  // }

  // async function handleMakePayment() {
  //   try {
  //     let response = await trigger({
  //       paymentMethodId: selectedPaymentMethod,
  //       amount: balances?.balanceDue,
  //       token: user?.token,
  //     });

  //     if (response.status != 201) {
  //       handleHidePaymentMethods();
  //       setPayInvoice(false);
  //       router.replace("pay-invoice", undefined);
  //       router.replace("invoices", undefined);
  //       toast.warning("Something went wrong. Please try again", {
  //         style: {
  //           background: "#1A2736",
  //           border: "#1A2736",
  //           color: "white",
  //           fontSize: "14px",
  //           fontFamily: "Roboto, sans-serif",
  //           fontWeight: 600,
  //         },
  //       });
  //     } else {
  //       handleHidePaymentMethods();
  //       setPayInvoice(false);
  //       router.replace("pay-invoice", undefined);
  //       router.replace("invoices", undefined);
  //       setShowConfirmation(true);
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async function handleMakeInvoicesPayment() {
  //   try {
  //     let response = await trigger({
  //       paymentMethodId: selectedPaymentMethod,
  //       amount: getInvoicesAmountDue(),
  //       token: user?.token,
  //     });

  //     handleHidePaymentMethods();
  //     setShowConfirmation(true);
  //     setGoToPayment(false);
  //     router.replace("invoices", undefined);
  //     if (response.status != 201) {
  //       handleHidePaymentMethods();
  //       setPayInvoice(false);
  //       router.replace("pay-invoice", undefined);
  //       router.replace("invoices", undefined);
  //       toast.warning("Something went wrong. Please try again", {
  //         style: {
  //           background: "#1A2736",
  //           border: "#1A2736",
  //           color: "white",
  //           fontSize: "14px",
  //           fontFamily: "Roboto, sans-serif",
  //           fontWeight: 600,
  //         },
  //       });
  //     } else {
  //       handleHidePaymentMethods();
  //       setPayInvoice(false);
  //       router.replace("pay-invoice", undefined);
  //       router.replace("invoices", undefined);
  //       setShowConfirmation(true);
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // function handleCloseConfirmation() {
  //   setShowConfirmation(false);
  //   setURLSearchParam("show-confirmation", "false");
  // }

  function handleOptionChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedPaymentMethod(e.target.id);
  }

  // function setURLSearchParam(name: string, param: string) {
  //   const current = new URLSearchParams(
  //     searchParams ? Array.from(searchParams.entries()) : []
  //   );

  //   if (current.has(name)) {
  //     current.delete(name);
  //   }

  //   current.set(name, param);
  //   const search = current.toString();
  //   const query = search ? `?${search}` : "";

  //   router.push(`${pathname}${query}`);

  //   return current;
  // }

  // useEffect(() => {
  //   const showPaymentMethodParam = searchParams?.get("show-payment-methods");
  //   const showFormParam = searchParams?.get("show-form");
  //   const showConfirmationParam = searchParams?.get("show-confirmation");
  //   const disableContinueToPayment = searchParams?.get("invoices");

  //   if (searchParams?.get("ssl_result_message")) {
  //     const result = searchParams?.get("ssl_result_message");
  //     if (result === "APPROVAL" && showConfirmationParam !== "false") {
  //       setShowConfirmation(true);
  //     } else {
  //       setShowConfirmation(false);
  //     }
  //   }

  //   disableContinueToPayment != null
  //     ? setEnableContinueToPay(true)
  //     : setEnableContinueToPay(false);

  //   if (showPaymentMethodParam === "true" && showFormParam !== "true") {
  //     setShowPaymentMethods(true);
  //   } else {
  //     setShowPaymentMethods(false);
  //   }
  // }, [searchParams, enableContinueToPay]);

  // useEffect(() => {
  //   let toPay: Bill[] | undefined = [];
  //   if (invoicesSelected) {
  //     for (let invoice of invoicesSelected) {
  //       let toAdd = invoicesList?.filter((item) => {
  //         return item.controlId == Number(invoice);
  //       });

  //       if (toAdd) toPay.push(toAdd[0]);
  //     }
  //   }

  //   setInvoicesToPay(toPay);
  // }, [invoicesList, invoicesSelected]);

  // function handlePayDue() {
  //   setGoToPayment(true);
  //   getInvoicesAmountDue();
  // }

  // function getInvoicesAmountDue() {
  //   let amount = 0;
  //   if (invoicesToPay) {
  //     for (let invoice in invoicesToPay) {
  //       amount += invoicesToPay[invoice].amount;
  //     }
  //   }

  //   return Number(parseFloat(amount.toString()).toFixed(2));
  // }

  // function handlePayInvoice() {
  //   setPayInvoice(true);
  //   setURLSearchParam("pay-invoice", "true");
  // }

  function handleCancelPayInvoice() {
    setPayInvoice(false);
    router.replace("pay-invoice", undefined);
    router.replace("invoices", undefined);
  }

  // useEffect(() => {
  //   const selected = searchParams.get("invoices");
  //   const invoices = selected?.split(",");
  //   setInvoicesSelected(invoices);
  // }, [searchParams]);

  // const totalDue = invoicesList?.reduce(
  //   (accumulator, quantity) => accumulator + quantity?.amount,
  //   0
  // );

  // window.onload = function () {
  //   const currentLocation = new URL(window.location.href);
  //   const newLocation = new URL(window.location.href.split("?")[0]);
  //   if (currentLocation.search != "") {
  //     window.location.assign(newLocation.href);
  //   }
  // };

  const formatAmount = (amount?: number | undefined) => {
    if (amount === undefined || amount === null) {
      return "0.00";
    }

    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // const formattedAmount = formatAmount(balances?.balanceDue);

  return (
    <div
      className={`sticky bottom-[67px] w-full rounded-2xl bg-white p-4 shadow-2xl ${
        className ? className : ""
      }`}
    >
      {!showPaymentMethods &&
        !showConfirmation &&
        !pathname.includes("/invoices") && (
          <button
            disabled
            // onClick={handleShowPaymentMethods}
            className="w-full rounded-md bg-athens py-2 text-base font-bold text-white disabled:bg-dark-red"
          >
            Pay My Bill
          </button>
        )}
      {invoiceDue &&
        !payInvoice &&
        !goToPayment &&
        !showConfirmation &&
        pathname.includes("/invoices") && (
          <>
            <div className="mb-4 flex items-center justify-between text-slate">
              <span className="text-xl font-semibold">Total Due</span>
              {/* <span className="text-2xl font-medium">${formattedAmount}</span> */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                // onClick={handlePayInvoice}
                className="rounded-md border border-athens font-bold text-athens"
              >
                Pay An Invoice
              </button>
              <button
                // onClick={handleMakePayment}
                className="rounded-md bg-athens px-4 py-2 font-bold text-white"
              >
                Pay Total Due
              </button>
            </div>
          </>
        )}
      {invoiceDue && payInvoice && !goToPayment && !showConfirmation && (
        <div className="grid grid-cols-[82px,_1fr] gap-4">
          <button
            onClick={handleCancelPayInvoice}
            className="rounded-md border border-dark-blue font-bold text-dark-blue"
          >
            Cancel
          </button>
          <button
            // onClick={handlePayDue}
            className="rounded-md bg-athens px-4 py-2 font-bold text-white disabled:bg-dark-red"
            disabled={!enableContinueToPay}
          >
            Continue to Payment
          </button>
        </div>
      )}
      {goToPayment && (
        <>
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-xl font-bold text-slate">Pay Invoice</h4>
            <XMarkIcon
              // onClick={handleHidePaymentMethods}
              className="h-8 w-8"
            ></XMarkIcon>
          </div>
          {/* {data && data.length > 0 && (
            <>
              <p className="mb-4 text-sm font-semibold text-slate-medium">
                Choose your payment method
              </p>
              <PaymentList
                handleOptionChange={handleOptionChange}
                payments={data}
              />
            </>
          )}
          <Link
            href="/app/payments-methods/add"
            className="mb-6 block text-athens"
          >
            <PlusIcon className="mr-1 inline h-6 w-6"></PlusIcon>
            Add Payment Method
          </Link> */}
          <div className="mb-4 flex items-center justify-between text-slate">
            <span className="text-xl font-semibold">Amount Due</span>
            <span className="text-2xl font-medium">
              {/* ${getInvoicesAmountDue()} */}
            </span>
          </div>
          <button
            disabled={!selectedPaymentMethod}
            // onClick={handleMakeInvoicesPayment}
            className="w-full rounded-md bg-athens py-2 font-bold text-white disabled:bg-dark-red"
          >
            Make Payment
          </button>
        </>
      )}
      {showPaymentMethods && (
        <>
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-xl font-bold text-slate">Pay My Bill</h4>
            <XMarkIcon
              // onClick={handleHidePaymentMethods}
              className="h-8 w-8"
            ></XMarkIcon>
          </div>
          {/* {data && data.length > 0 && (
            <>
              <p className="mb-4 text-sm font-semibold text-slate-medium">
                Choose your payment method
              </p>
              <PaymentList
                handleOptionChange={handleOptionChange}
                payments={data}
              />
            </>
          )} */}
          {/* <Link
            href="/app/payments-methods/add"
            className="mb-6 block text-athens"
          >
            <PlusIcon className="mr-1 inline h-6 w-6"></PlusIcon>
            Add Payment Method
          </Link> */}
          <div className="mb-4 flex items-center justify-between text-slate">
            <span className="text-xl font-semibold">Total Due</span>
            {/* <span className="text-2xl font-medium">${formattedAmount}</span> */}
          </div>
          {/* {balances?.balanceDue && balances.balanceDue > 0 && (
            <button
              disabled={!selectedPaymentMethod}
              onClick={handleMakePayment}
              className="w-full rounded-md bg-athens py-2 font-bold text-white"
            >
              Make Payment
            </button>
          )} */}
        </>
      )}
      {showConfirmation && (
        <div className="font-sans text-slate">
          <div className="mb-6 flex justify-between">
            <p className="text-xl font-bold">Thank You!</p>
            <XMarkIcon
              // onClick={handleCloseConfirmation}
              className="h-8 w-8"
            ></XMarkIcon>
          </div>
          <div className="mb-6 flex flex-col gap-4">
            <p>
              We have successfully received your payment, and your bill has been
              settled.
            </p>
            <p>
              If you have any questions or need further assistance, please do
              not hesitate to contact us. We&apos;re here to assist you in any
              way we can.
            </p>
            <p>Thank you again for trusting in Athens Services.</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Total Paid</p>
            {/* <p className="text-2xl font-medium">{balances?.balanceDue}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

// function PaymentList({
//   payments,
//   handleOptionChange,
// }: {
//   payments: PaymentMethod[];
//   handleOptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }) {
//   const [checked, setChecked] = useState("");

//   function handleChecked(e: ChangeEvent<HTMLInputElement>) {
//     setChecked(e.target.id);
//     handleOptionChange(e);
//   }

//   return (
//     payments &&
//     payments.map((payment) => (
//       <div
//         className={`mb-6 flex items-center gap-2 rounded-md border p-2 ${
//           checked === payment.id ? "border-slate" : "border-gray-border"
//         }`}
//         key={payment.id}
//       >
//         <input
//           className="block"
//           type="radio"
//           name="payment-method"
//           id={payment.id}
//           onChange={handleChecked}
//         />
//         <div className="text-slate">
//           <label className="text-sm" htmlFor={payment.id}>
//             {payment.firstName} {payment.lastName}
//           </label>
//           <div className="flex gap-2 text-sm text-slate">
//             <span>*** {payment.creditCard.slice(-4)}</span>
//             <span className="text-slate-medium">
//               Expires {payment.month}/{payment.year}
//             </span>
//           </div>
//         </div>
//       </div>
//     ))
//   );
// }

async function makePayment(
  url: string,
  {
    arg,
  }: {
    arg: {
      paymentMethodId: string;
      amount: number | undefined;
      token: string | undefined;
    };
  }
) {
  return fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${arg.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      paymentMethodId: arg.paymentMethodId,
      amount: arg.amount,
    }),
  });
}
