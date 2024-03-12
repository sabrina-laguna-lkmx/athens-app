"use client";

import iconLeft from "@/assets/images/icon-chevron-left.svg";
import iconEyeClosed from "@/assets/images/icon-eye-closed.svg";
import iconEye from "@/assets/images/icon-eye.svg";
import ReturnPage from "@/components/return-page";
import Successfull from "@/components/successfull";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { Link } from "@/navigation";
import { validationsPassword } from "@/types/strapi";
// import { passwordSchema } from "@/validations/userValidation";
// import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export default function Page() {
  const [showModifyPassword, setShowModifyPassword] = useState(false);
  const [inputCurrentPassword, setInputCurrentPassword] = useState<string>("");
  const [inputNewPassword, setInputNewPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [currentPasswordUnmatched, setCurrentPasswordUnmatched] =
    useState(false);
  const { user } = useCurrentUser();
  const route = useRouter();

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function passwordVisibility() {
    setShowPassword((prevState) => !prevState);
  }

  const handleCancel = () => {
    setShowModifyPassword(false);
  };

  const {
    register,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<validationsPassword>({
    // resolver: zodResolver(passwordSchema),
  });

  const { trigger, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_API_URL}/api/me/password`,
    changePassword
  );

  const onSubmit = async (data: validationsPassword) => {
    const response = await trigger({
      token: user?.token,
      newPassword: data.newPassword,
      currentPassword: data.currentPassword,
    });

    if (!response.ok) {
      setCurrentPasswordUnmatched(true);
    } else {
      reset();
      setShowSuccessMessage(true);
      setCurrentPasswordUnmatched(false);
    }
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

  const newPassword = watch("newPassword");

  const isPasswordValid = () => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/.test(newPassword)) {
      return false;
    }
    return true;
  };

  function returnSettings() {
    if (inputCurrentPassword != "" || inputNewPassword != "") {
      setShowModifyPassword(true);
    } else {
      route.push("/settings");
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="font-sans">
      {showModifyPassword && <ReturnPage onClose={handleCancel} />}
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
        <h3 className="text-xl font-bold">Password</h3>
        <p className="text-sm font-normal">
          Please, enter your current password before entering your new one.
        </p>
        <div className="flex flex-col gap-1 lg:w-[500px]">
          <div className="relative mb-3">
            <label className="font-normal">Current Password</label>
            <div className="relative w-full">
              <input
                type={isPasswordVisible ? "text" : "password"}
                {...register("currentPassword")}
                onChange={(e) => setInputCurrentPassword(e.target.value)}
                className="w-full rounded-md border border-light-gray bg-white p-2 px-3 text-sm focus:outline-athens"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
              >
                <Image
                  src={isPasswordVisible ? iconEyeClosed : iconEye}
                  alt={isPasswordVisible ? "Show Password" : "Hide Password "}
                />
              </button>
            </div>
            {currentPasswordUnmatched && (
              <span className="mt-1 text-xs text-athens">
                Your password does not match
              </span>
            )}
          </div>
          <div className="relative mb-3">
            <label className="font-normal">New Password</label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                {...register("newPassword")}
                onChange={(e) => setInputNewPassword(e.target.value)}
                className={`w-full rounded-md border ${
                  !passwordsMatch ? "border-athens" : "border-light-gray"
                } bg-white p-2 px-3 text-sm focus:outline-athens`}
              />
              <button
                type="button"
                onClick={passwordVisibility}
                className="absolute right-3 transform cursor-pointer"
              >
                <Image
                  src={showPassword ? iconEyeClosed : iconEye}
                  alt={showPassword ? "Show Password" : "Hide Password "}
                />
              </button>
            </div>
            <p
              className={`text-xs font-normal ${
                isPasswordValid() ? "text-athens" : "text-gray-blue"
              }`}
            >
              Must be 6 characters or more and contain at least 1 uppercase and
              1 number.
            </p>
            <button
              type="button"
              // disabled={!isPasswordValid()}
              disabled
              onClick={handleReturnWithoutSaving}
              className="float-right mt-4 hidden rounded-md border border-athens bg-athens p-2 px-4 text-base font-bold leading-6 text-white disabled:border-dark-red disabled:bg-dark-red lg:block"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
      <div className="container fixed bottom-20 left-0 right-0 mb-4 flex w-full flex-col lg:hidden">
        <button
          type="button"
          // disabled={!isPasswordValid()}
          disabled
          onClick={handleReturnWithoutSaving}
          className="rounded-md border border-athens bg-athens p-2 px-4 text-base font-bold leading-6 text-white disabled:border-dark-red disabled:bg-dark-red"
        >
          Update Password
        </button>
      </div>
    </form>
  );
}

async function changePassword(
  url: string,
  {
    arg,
  }: {
    arg: {
      token: string | undefined;
      currentPassword: string;
      newPassword: string;
    };
  }
) {
  return fetch(url, {
    method: "PUT",
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${arg.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      currentPassword: arg.currentPassword,
      newPassword: arg.newPassword,
    }),
  });
}
