"use client";

// import { useAuth } from "@/context/auth-context";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { Link, useRouter } from "@/navigation";
// import {
//   InvalidCredentialsError,
//   login,
//   logout,
// } from "@/services/auth-service";
// import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import logo from "../assets/images/athens-bg-logo.svg";
import close from "../assets/images/close-icon.svg";
// import SearchBar from "./searchbar";

interface MobileMenuProps {
  showMobileMenu: (opened: boolean) => void;
  model?: MainNavigation[];
}

type MainNavigation = {
  id: number;
  title: string;
  menu_links: MainLink[];
};

type MainLink = {
  id: number;
  label: string;
  url: string;
  description: string;
  icon: object;
};

export default function MobileMenu({ showMobileMenu, model }: MobileMenuProps) {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showCredentialsError, setShowCredentialsError] = useState(false);
  //   const { setContractsAfterLogin } = useAuth();

  //   const { user } = useCurrentUser();

  //   const router = useRouter();

  function handleClickClose() {
    showMobileMenu(false);
  }

  function handleShowLoginForm() {
    setShowLoginForm(!showLoginForm);
  }

  interface LoginForm extends HTMLFormElement {
    email: HTMLInputElement;
    password: HTMLInputElement;
  }

  function handleLogoutClick() {
    // logout();
    handleClickClose();
    // router.replace("/");
  }

  async function handleSubmit(event: FormEvent<LoginForm>) {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    setIsLoading(true);
    try {
      //   const user = await login(email.value, password.value);
      //   setContractsAfterLogin(user.accounts);
      handleClickClose();
      //   router.push("/dashboard");
    } catch (error) {
      //   if (error instanceof InvalidCredentialsError) {
      //     setShowCredentialsError(true);
      //   }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="absolute left-0 top-0 z-10 h-screen w-full self-end bg-white text-slate">
      <nav id="menu" className="mb-7">
        <div
          id="header"
          className="flex h-14 items-center justify-between bg-white"
        >
          <Image
            src={logo}
            height={40}
            alt="Athens Services Logo"
            className="mx-4"
          />
          <button className="h-10 w-10" onClick={handleClickClose}>
            <Image src={close} alt="Close button" />
          </button>
        </div>
        <div
          id="search"
          className="min-h-14 flex flex-col items-center gap-4 px-4 py-3"
        >
          {/* <SearchBar /> */}
          Aqui va el search bar
        </div>
        <div className="w-full px-4 py-3 text-left text-2xl font-semibold">
          (888) 336-6100
        </div>
        <nav
          id="navbar"
          className="mb-14 flex flex-col items-start font-sans text-sm"
        >
          {/* {model &&
            model?.map((nav) => (
              <Popover key={nav.id} className="w-full">
                <Popover.Button className="flex w-full items-center justify-between px-4 py-3 text-sm capitalize focus:text-athens focus:outline-none">
                  {nav.title}
                  <ChevronDownIcon className="h-4 w-4 flex-none focus:hidden"></ChevronDownIcon>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                >
                  <Popover.Panel className="relative flex-col justify-start rounded-md bg-slate-light text-start">
                    {nav.menu_links.map((link: any) => (
                      <Link
                        key={link.id}
                        href={link.url ?? "/"}
                        onClick={handleClickClose}
                        className="relative grid grid-cols-[auto,_1fr] gap-4 p-4 text-sm"
                      >
                        {link?.icon?.data?.attributes?.icon?.data
                          ?.attributes && (
                          <Image
                            className="flex h-8 w-8 items-center justify-center rounded-md "
                            src={`${link?.icon?.data?.attributes?.icon?.data?.attributes?.url}`}
                            alt=""
                            width={`${link?.icon?.data?.attributes?.icon?.data?.attributes?.width}`}
                            height={`${link?.icon?.data?.attributes?.icon?.data?.attributes?.height}`}
                          />
                        )}
                        <div className="flex flex-col justify-start text-left">
                          <h3 className="font-semibold capitalize text-slate">
                            {link.label}
                          </h3>
                          <p className="text-slate-medium">
                            {link.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </Popover.Panel>
                </Transition>
              </Popover>
            ))} */}

          <div className="ml-4 flex h-10 items-center">
            <hr className="w-16 border-t-4 border-athens bg-athens" />
          </div>
        </nav>
      </nav>
      {/* {!user && (
        <div
          id="login"
          className="bordeer-solid fixed bottom-0 flex w-full flex-col items-start justify-end border-t border-slate-light bg-white"
        >
          <div
            onClick={handleShowLoginForm}
            className="flex w-full items-center gap-2 p-4"
          >
            <div id="user-icon" className="flex h-6 w-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="flex w-full cursor-pointer items-center justify-between">
              <span className="text-sm capitalize">Log In</span>
              <ChevronDownIcon className="h-4 w-4 focus:hidden"></ChevronDownIcon>
            </div>
          </div>
          {showLoginForm && (
            <form
              onSubmit={handleSubmit}
              className="w-full px-4 pb-4 text-left"
            >
              <input
                className="mb-2 w-full rounded-md border border-slate-medium p-2"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                required
              />
              <input
                className="mb-4 w-full rounded-md border border-slate-medium p-2"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                required
              />
              <Link
                className="text-sm font-normal text-athens"
                href={"/forgot-password"}
              >
                Forgot your password?
              </Link>
              <button className="mb-4 mt-4 w-full rounded-md bg-athens p-2 text-base font-bold text-white">
                Log In
              </button>
              <p className="text-sm text-gray-blue">
                Not registered yet?{" "}
                <Link className="text-[14px] text-athens" href={"/sign-up"}>
                  Sign Up
                </Link>
              </p>
            </form>
          )}
        </div>
      )} */}
      {/* {user && (
        <div
          onClick={handleLogoutClick}
          className="fixed bottom-0 flex w-full gap-2 p-4"
        >
          <Image
            className="cursor-pointer lg:hidden"
            src={signOutIcon}
            alt="Sign Out Icon"
            onClick={handleLogoutClick}
          ></Image>
          <span>Log Out</span>
        </div>
      )} */}
    </div>
  );
}
