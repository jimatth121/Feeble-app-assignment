"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

export function Header() {
  const menuId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  const links = [
    { label: "How it Works", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Use Case", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <header className="relative z-50 mx-auto w-full max-w-5xl px-4 pt-5 sm:px-6 sm:pt-6">
      {isMenuOpen ? (
        <button
          type="button"
          aria-hidden="true"
          className="fixed inset-0 z-40 cursor-default bg-black/20 backdrop-blur-[2px]"
          onClick={() => setIsMenuOpen(false)}
          tabIndex={-1}
        />
      ) : null}

      <nav className="relative z-50 flex items-center justify-between rounded-full bg-white/85 px-4 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur sm:px-6">
        <a href="#" className="inline-flex items-center">
          <Image
            src="/images/app-logo.png"
            alt="Coup"
            width={107}
            height={34}
            className="h-7 w-auto select-none sm:h-8"
            priority
          />
        </a>

        <div className="hidden items-center gap-7 text-[11px] font-semibold text-slate-500 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className="transition hover:text-slate-900"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>

          <a
            href="#"
            className="relative hidden h-9 items-center justify-center overflow-hidden rounded-full bg-[#1677ff] px-4 text-[11px] font-semibold text-white shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2 before:absolute before:-inset-px before:rounded-full before:translate-x-[-110%] before:bg-white before:transition-transform before:duration-300 before:ease-out hover:bg-white hover:shadow-2xl hover:text-[#1677ff] hover:before:translate-x-0 md:inline-flex"
          >
            <span className="relative z-10">Contact Sales</span>
          </a>
        </div>

        <div
          id={menuId}
          className={[
            "absolute inset-x-0 top-full z-50 mt-3 origin-top rounded-2xl bg-white/95 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur md:hidden",
            isMenuOpen ? "block" : "hidden",
          ].join(" ")}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col overflow-hidden rounded-xl bg-white">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-[13px] font-semibold text-slate-800 transition hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-100 p-2">
              <a
                href="#"
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#1677ff] px-5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#0e66e9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <path
        d="M4 7h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <path
        d="M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

