"use client";

// import { Link, useRouter } from "@/navigation";
// import {
//   InvalidCredentialsError,
//   login,
//   logout,
// } from "@/services/auth-service";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  ArrowPathIcon,
  PhoneIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { MainNavigation } from "./main-navigation";

export default function TopNav({
  showLink = false,
  model,
}: {
  showLink?: boolean;
  model?: MainNavigation[];
}) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showNavItems, setShowNavItems] = useState(true);
  const [showIconLogout, setShowIconLogout] = useState(true);
  const [showMenuMobile, setMenuMobile] = useState(false);
  const [paramsLogin, setParamsLogin] = useState(false);

  //   const router = useRouter();

  //   const { user } = useCurrentUser();

  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   if (searchParams.get("login") === "true") {
  //     setParamsLogin(true);
  //   }
  // }, [searchParams]);

  function handleToggleMobile() {
    setMenuMobile(true);
  }

  function showMobileMenu(opened: boolean) {
    setMenuMobile(opened);
    setParamsLogin(false);
  }

  function handleFormClick() {
    setShowLoginForm(!showLoginForm);
  }

  function handleLogoutClick() {
    // logout();
    // router.replace("/");
    setShowIconLogout(false);
    window.location.reload();
  }

  function closeForm() {
    setShowLoginForm(false);
    setParamsLogin(false);
    setShowNavItems(true);
  }

  return (
    <header className="h-12 bg-slate font-sans md:relative">
      <nav className="container flex h-full items-center justify-between text-center text-xs text-white">
        <span className="hidden h-full  items-center justify-start p-2 text-xl font-bold md:flex">
          (888) 336-6100
        </span>
        {showNavItems && (
          <Link
            href="/customer-service"
            className="hidden items-center gap-2 p-3 md:flex"
          >
            <PhoneIcon className="hidden h-6 w-6 lg:block"></PhoneIcon>
            Customer Service
          </Link>
        )}
        <Link href="#" className="flex items-center gap-2 p-3">
          <TruckIcon className="hidden h-6 w-6 lg:block"></TruckIcon>
          Bulky Pickup {showNavItems}
        </Link>
        <Link href="#" className="flex items-center gap-2  p-3">
          <ArchiveBoxIcon className="hidden h-6 w-6 lg:block"></ArchiveBoxIcon>
          Rent-A-Container
        </Link>
        {showNavItems && (
          <Link
            href="/resources/recycling-guide"
            className="hidden items-center gap-2 p-3 md:flex"
          >
            <ArrowPathIcon className="hidden h-6 w-6 lg:block"></ArrowPathIcon>
            Recycling Guide
          </Link>
        )}

        {!showLink && (
          <div className="flex items-center">
            {/* {(!user || !showIconLogout) && (
              <>
                <span
                  className="mx-2 cursor-pointer rounded bg-white px-4 py-2 text-slate md:hidden"
                  onClick={handleToggleMobile}
                >
                  Pay My Bill
                </span>
                <span
                  className="mx-2 hidden cursor-pointer rounded bg-white px-4 py-2 text-slate md:block"
                  onClick={handleFormClick}
                >
                  Pay My Bill
                </span>
              </>
            )} */}

            {/* {user && showIconLogout && (
              <Link
                className="mx-2 rounded bg-white px-4 py-2 text-slate"
                href="/dashboard"
              >
                Pay My Bill
              </Link>
            )}
            {user && showIconLogout && (
              <Image
                className="hidden cursor-pointer lg:block"
                src={signOutIcon}
                alt="Sign Out Icon"
                onClick={handleLogoutClick}
              ></Image>
            )} */}
          </div>
        )}
        {showLink && (
          <Link href="/" className="rounded-md bg-white px-3 py-1 text-slate">
            Go to AthensServices.com
          </Link>
        )}
        {/* {(showLoginForm || paramsLogin) && !user && (
          <LoginForm closeForm={closeForm} />
        )}
        <div className="md:hidden">
          {(showMenuMobile || paramsLogin) && !user && (
            <MobileMenu showMobileMenu={showMobileMenu} model={model} />
          )}
        </div> */}
      </nav>
    </header>
  );
}

interface FormProps {
  closeForm: () => void;
}

export function LoginForm({ closeForm }: FormProps) {
  const [showCredentialsError, setShowCredentialsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //   const { setContractsAfterLogin } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  //   const router = useRouter();

  function handleCloseClick() {
    closeForm();
  }

  interface LoginForm extends HTMLFormElement {
    email: HTMLInputElement;
    password: HTMLInputElement;
  }

  async function handleSubmit(event: FormEvent<LoginForm>) {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    setIsLoading(true);
    // try {
    //   const user = await login(email.value, password.value);
    //   setContractsAfterLogin(user.accounts);
    //   closeForm();
    //   router.push("/dashboard");
    // } catch (error) {
    //   if (error instanceof InvalidCredentialsError) {
    //     setShowCredentialsError(true);
    //   }
    // } finally {
    //   setIsLoading(false);
    // }
  }

  function handleChange() {
    if (showCredentialsError) {
      setShowCredentialsError(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute right-0 z-10 hidden w-72 rounded-md bg-white p-4 font-sans text-black md:flex md:flex-col ${
        scrolled ? "top-24 duration-100" : "top-11 duration-100"
      }`}
    >
      <div className="mb-2 flex w-full items-baseline justify-between">
        <h3 className="text-2xl font-bold text-slate">Log In</h3>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={handleCloseClick}
        ></XMarkIcon>
      </div>
      {showCredentialsError && (
        <p className="mb-2 text-left text-xs text-athens">
          Your email or password is incorrect. <br />
          Please, try again.
        </p>
      )}
      <form onSubmit={handleSubmit} className="w-full">
        <input
          className="mb-4 w-full rounded-md border border-gray-medium p-2"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="mb-7 w-full rounded-md border border-gray-medium p-2"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <Link
          href={"/forgot-password"}
          className="flex text-left text-sm text-athens"
        >
          Forgot your password?
        </Link>
        <button
          disabled={isLoading}
          className="mt-4 w-full rounded-md bg-athens py-1 text-base font-bold text-white"
          type="submit"
        >
          {!isLoading && "Log In"}
          {isLoading && (
            <svg
              aria-hidden="true"
              role="status"
              className="text-gray-200 mr-2 inline h-4 w-4 animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              ></path>
            </svg>
          )}
        </button>
        <span className="mt-7 flex flex-row gap-2 text-sm text-gray-blue">
          Not registered yet?{" "}
          <Link href={"/sign-up"} className="text-athens">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
}
