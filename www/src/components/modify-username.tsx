"use client";

import iconLeft from "@/assets/images/icon-chevron-left.svg";
import Successfull from "@/components/successfull";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { Link } from "@/navigation";
import { validationsForm } from "@/types/strapi";
// import { emailSchema } from "@/validations/userValidation";
// import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import ReturnPage from "./return-page";

export default function ModifyUsername() {
  const [showModifyUsername, setShowModifyUsername] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [inputEmail, setInputEmail] = useState<string>("");
  const { user } = useCurrentUser();
  const route = useRouter();

  const {
    register,
    watch,
    reset,
    formState: { isValid },
  } = useForm<validationsForm>({
    // resolver: zodResolver(emailSchema),
  });

  const { trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_API_URL}/api/me/email`,
    changeUsername
  );

  const onSubmit = async (data: validationsForm) => {
    await trigger({ email: data.email, token: user?.token });
    reset();
    setShowSuccessMessage(true);
  };

  const handleReturnWithoutSaving = () => {
    onSubmit(watch());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showSuccessMessage]);

  const handleCancel = () => {
    setShowModifyUsername(false);
  };

  function returnSettings() {
    if (inputEmail != "") {
      setShowModifyUsername(true);
    } else {
      route.push("/settings");
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="font-sans">
      {showModifyUsername && <ReturnPage onClose={handleCancel} />}
      {showSuccessMessage && <Successfull />}
      <section className="container border-b border-gray-border py-2 text-sm font-normal">
        <button
          onClick={returnSettings}
          className="flex items-center gap-1 text-athens"
        >
          <Image src={iconLeft} alt="Go Back Settings" />
          Go Back To Settings
        </button>
      </section>
      <div className="container mb-6 mt-4 flex flex-col gap-4 text-slate">
        <h3 className="text-xl font-bold">Username</h3>
        <div className="overflow-wrap break-word">
          <p className="break-before-auto text-sm font-normal">
            Please, enter your new username below using a valid email address.
          </p>
        </div>
        <div className="lg:w-[500px]">
          <h3 className="text-[14px]">Username</h3>
          <input
            type="email"
            {...register("email")}
            onChange={(e) => setInputEmail(e.target.value)}
            className="w-full rounded-md border border-light-gray bg-white p-2 px-2 text-sm font-normal focus:outline-athens lg:w-[500px]"
          />
          <button
            type="button"
            // disabled={!isValid}
            disabled
            onClick={handleReturnWithoutSaving}
            className="float-right mt-4 hidden rounded-md border border-athens bg-athens p-2 px-4 text-base font-bold leading-6 text-white disabled:border-dark-red disabled:bg-dark-red lg:block"
          >
            Update Username
          </button>
        </div>
      </div>
      <div className="container fixed bottom-20 left-0 right-0 mb-4 w-full pr-4 lg:hidden">
        <button
          type="button"
          //   disabled={!isValid}
          disabled
          onClick={handleReturnWithoutSaving}
          className="w-full rounded-md border border-athens bg-athens p-2 px-4 text-base font-bold leading-6 text-white disabled:border-dark-red disabled:bg-dark-red"
        >
          Update Username
        </button>
      </div>
    </form>
  );
}

async function changeUsername(
  url: string,
  { arg }: { arg: { token: string | undefined; email: string } }
) {
  return fetch(url, {
    method: "PUT",
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${arg.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: arg.email }),
  });
}
