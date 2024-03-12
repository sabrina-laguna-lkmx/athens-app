"use client";

// import { Link } from "@/navigation";
import Image from "next/image";
import logo from "../assets/images/athens-bg-white-logo.svg";
import MobileMenu from "./mobile-menu";

import { IconModel } from "@/types/strapi";
// import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
// import SearchBar from "./searchbar";

type MainProps = {
  model: MainNavigation[];
};

export type MainNavigation = {
  id: number;
  title: string;
  menu_links: MainLink[];
};

type MainLink = {
  id: number;
  label: string;
  url: string;
  description: string;
  icon: IconModel;
};

export default function MainNav({ model }: MainProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setSetshowSearchBar] = useState(false);
  const mainNavInfo = model;

  function handleMenuClick() {
    setShowMenu(true);
  }

  function showMobileMenu(opened: boolean) {
    setShowMenu(opened);
  }

  const DesktopMenu = () => {
    return (
      <>
        <div className="relative hidden w-full gap-5 px-4 lg:ml-6 lg:flex lg:items-center">
          {/*{model?.length > 1 &&
            model?.map((nav) => (
              <Popover
                className={`${showSearchBar ? "hidden lg:flex" : "md:flex"}`}
                key={nav.id}
              >
                {
                  <>
                    <Popover.Button className="flex items-center gap-x-1 font-medium leading-5 focus:font-black focus:text-white focus:outline-none">
                      {nav.title}
                      <ChevronDownIcon className="h-4 w-4 flex-none focus:hidden"></ChevronDownIcon>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-4"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-4"
                    >
                      <Popover.Panel className="absolute top-12 w-80 flex-col rounded-md bg-white shadow-md">
                        {
                          <>
                            {nav.menu_links.map((link: MainLink) => (
                              <Link
                                href={`${link.url}`}
                                key={link.id}
                                onClick={() => close()}
                                className="relative grid grid-cols-[auto,_1fr] gap-4 p-4 font-sans text-sm"
                              >
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-blue-light">
                                  {link.icon.data && (
                                    <Image
                                      src={`${link?.icon?.data?.attributes?.icon?.data?.attributes?.url}`}
                                      width={
                                        link.icon.data.attributes.icon.data
                                          .attributes.width
                                      }
                                      height={
                                        link.icon.data.attributes.icon.data
                                          .attributes.height
                                      }
                                      alt={`${link?.icon?.data?.attributes?.key}`}
                                    />
                                  )}
                                </div>
                                <div>
                                  <h3 className=" font-semibold capitalize text-slate">
                                    {link.label}
                                  </h3>
                                  <p className="text-[#485C72]">
                                    {link.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </>
                        }
                      </Popover.Panel>
                    </Transition>
                  </>
                }
              </Popover>
              ))}*/}

          {showSearchBar ? (
            <div className="ml-auto grid place-items-center">
              {/* <SearchBar onClose={() => setSetshowSearchBar(false)} /> */}
              aqui va el search bar
            </div>
          ) : (
            <div className="ml-auto grid place-items-center">
              <button
                className="mr-0 h-5 w-5"
                onClick={() => setSetshowSearchBar(true)}
              >
                <MagnifyingGlassIcon />
              </button>
            </div>
          )}
        </div>
        <div className="mx-4 flex items-center gap-6 lg:hidden">
          <span className="text-right text-sm font-semibold">
            (888) 336-6100
          </span>
          <button
            className="block h-6 w-6"
            type="button"
            onClick={handleMenuClick}
          >
            <Bars3Icon></Bars3Icon>
          </button>
        </div>
      </>
    );
  };

  return (
    <header className="h-12 bg-athens font-sans text-white shadow-sm">
      <nav className="container flex h-full justify-between">
        <Link href="/" className="flex h-full">
          <Image src={logo} height={36} alt="Athens Services Logo" />
        </Link>
        <DesktopMenu />
        {showMenu && (
          <MobileMenu
            showMobileMenu={showMobileMenu}
            model={mainNavInfo}
          ></MobileMenu>
        )}
      </nav>
    </header>
  );
}
