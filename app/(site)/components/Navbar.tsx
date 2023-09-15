"use client"

import { DisclosureButton, DisclosurePanel, Disclosure } from "./Disclosure";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let pathname = usePathname() || "/";
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <div className="z-10 fixed top-25 right-0 left-0 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-500">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/">
                  <h1 className="text-2xl font-medium">Eric Ladelpha</h1>
                </Link>
              </div>
              {/* this is the menu visible for tablet and above */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                <ul className="flex items-center justfiy-evenly h-16 uppercase text-sm">
                  <li className="px-4">
                    <Link
                      href="/"
                      prefetch
                      className={`${
                        pathname === "/"
                          ? "border-neutral-300 border-2 rounded-lg  h-full inline-flex items-center px-2 py-1 font-bold"
                          : "border-transparent border-2 inline-flex items-center px-2 py-1 border- font-medium"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      href="/collections"
                      prefetch
                      className={`${
                        pathname === "/collections"
                          ? "border-neutral-300 border-2 rounded-lg h-full inline-flex items-center px-2 py-1 font-bold"
                          : "border-transparent border-2 inline-flex items-center px-2 py-1 border- font-medium"
                      }`}
                    >
                      Collections
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      href="/contact"
                      prefetch
                      className={`${
                        pathname === "/contact"
                          ? "border-neutral-300 border-2 rounded-lg  h-full inline-flex items-center px-2 py-1 font-bold"
                          : "border-transparent border-2 inline-flex items-center px-2 py-1 border- font-medium"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* this is the menu visible for mobile */}
          <DisclosurePanel className="sm:hidden fixed top-25 left-0 right-0 bg-neutral-50">
            <ul className="flex items-center justify-center h-16 uppercase text-sm ">
              <li className="px-4">
                <Link
                  href="/"
                  prefetch
                  className={`${
                    pathname === "/"
                      ? "border-neutral-300 border-2 rounded-lg h-full inline-flex items-center px-2 py-1 font-bold"
                      : "border-transparent border-2 inline-flex items-center px-2 py-1 border- font-medium"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="px-4">
                <Link
                  href="/collections"
                  prefetch
                  className={`${
                    pathname === "/collections"
                      ? "border-neutral-300 border-2 rounded-lg h-full inline-flex items-center px-2 py-1 font-bold"
                      : "border-transparent border-2 inline-flex items-center px-2 py-1 border- font-medium"
                  }`}
                >
                  Collections
                </Link>
              </li>
              <li className="px-4">
                <Link
                  href="/contact"
                  prefetch
                  className={`${
                    pathname === "/contact"
                      ? "border-neutral-300 border-2 rounded-lg h-full inline-flex items-center px-2 py-1 font-bold"
                      : "border-transparent border-2 inline-flex items-center px-2 py-1 border- font-medium"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </DisclosurePanel>
        </ div>
      )}
    </Disclosure>
  );
}
