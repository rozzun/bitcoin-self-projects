"use client";

import { links } from "@/content/data";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LearnDropDown } from "./learn-dropdown";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const hideDrawer = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <div className="hidden sm:flex">
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setIsOpen((value) => !value)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-grey bg-opacity-75 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={clsx(
          `flex flex-col fixed inset-y-0 right-0 w-2/3 bg-white z-50 transform p-6 gap-4  transition-transform`,
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <button type="button" onClick={() => setIsOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col flex-1 gap-4 bg-white h-full">
          <LearnDropDown.Mobile hideDrawer={hideDrawer} />
          {links.map((link) => (
            <Link
              onClick={hideDrawer}
              className="font-semibold text-lg"
              key={link.text}
              href={link.linkTo}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
