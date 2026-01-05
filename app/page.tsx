import Image from "next/image";
import { BirdLargeFlyouts, FlightBird } from "./_components/birds";

export default function Home() {
  return (
    <div className="h-[100svh] overflow-hidden bg-[#eaf4ff] text-slate-900">
      <main className="relative isolate flex h-[100svh] flex-col overflow-hidden">
        <div className="hero-radial pointer-events-none absolute inset-0 -z-10" />

        <Header />

        <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pt-12 sm:pt-14">
          <FloatingBirds />

          <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[12px] font-semibold tracking-tight text-[#1677ff] shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
            >
              <span className="relative inline-flex h-4 w-6 items-center justify-center rounded-full bg-[#1677ff] text-[10px] font-bold text-white">
                <span className="absolute left-1.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/90" />
                <span className="absolute right-1.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/90" />
              </span>
              <span>#1 iMessage Automation Tool</span>
              <span className="sr-only">Learn more</span>
              <span className="ml-1 inline-block translate-x-0 text-[#1677ff]/70 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <h1 className="mt-6 text-balance text-[20px] font-black leading-[1.03] tracking-tight text-slate-900 sm:text-[50px]">
              <span className="text-[#1677ff]">iMessage</span> Automation
              <br />
              for Teams and AI
              <br />
              Workflows<span className="text-slate-900">.</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-pretty text-[13px] leading-5 text-slate-600">
              Coup lets you, your team, or AI workflows send iMessages directly
              from your phone number, running securely on your Mac or Mac Mini.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#1677ff] px-6 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#0e66e9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white/75 px-6 text-[13px] font-semibold text-slate-900 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#ffd45a] text-slate-900 shadow-sm ring-1 ring-black/10">
                  <AppleIcon className="h-4 w-4" />
                </span>
                Download the Mac app
              </a>
            </div>

            <div className="mt-12 flex flex-col items-center gap-3">
              <ScrollHint />
            </div>
          </div>
        </section>

        <CloudBase />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto w-full max-w-5xl px-6 pt-6 md:w-[60%]">
      <nav className="flex items-center justify-between rounded-full bg-white/85 px-6 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm">
            <LogoMark className="h-4 w-4" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            coup<span className="text-slate-900/70">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-[11px] font-semibold text-slate-500 md:flex">
          <a className="transition hover:text-slate-900" href="#">
            How it Works
          </a>
          <a className="transition hover:text-slate-900" href="#">
            Pricing
          </a>
          <a className="transition hover:text-slate-900" href="#">
            Use Case
          </a>
          <a className="transition hover:text-slate-900" href="#">
            FAQ
          </a>
        </div>

        <a
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-full bg-[#1677ff] px-4 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#0e66e9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2"
        >
          Contact Sales
        </a>
      </nav>
    </header>
  );
}

function CloudBase() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-28px] -z-10 sm:bottom-[-40px]">
      <div className="relative h-[296px] sm:h-[332px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#cfe6ff]" />
        <Image
          src="/images/bottomcloud.svg"
          alt=""
          width={1920}
          height={594}
          className="absolute bottom-0 left-1/2 w-full max-w-[1920px] -translate-x-1/2 select-none"
          priority
        />

        <Image
          src="/images/birdLarge01.png"
          alt=""
          width={104}
          height={77}
          className="absolute bottom-10 left-16 h-auto w-[72px] select-none sm:bottom-12 sm:left-24 sm:w-[92px]"
          sizes="(min-width: 640px) 92px, 72px"
        />
        <Image
          src="/images/birdLarge02.png"
          alt=""
          width={88}
          height={57}
          className="absolute bottom-32 left-1/2 h-auto w-[60px] -translate-x-[180px] select-none sm:bottom-36 sm:w-[72px]"
          sizes="(min-width: 640px) 72px, 60px"
        />
        <Image
          src="/images/birdLarge03.png"
          alt=""
          width={129}
          height={55}
          className="absolute bottom-20 left-1/2 h-auto w-[86px] translate-x-[110px] select-none sm:bottom-24 sm:w-[108px]"
          sizes="(min-width: 640px) 108px, 86px"
        />
        <Image
          src="/images/birdLarge04.png"
          alt=""
          width={129}
          height={102}
          className="absolute bottom-14 right-16 h-auto w-[78px] select-none sm:bottom-16 sm:right-24 sm:w-[102px]"
          sizes="(min-width: 640px) 102px, 78px"
        />

        <BirdLargeFlyouts
          left={{
            src: "/images/birdLarge01.png",
            width: 104,
            height: 77,
            sizes: "(min-width: 640px) 118px, 92px",
          }}
          right={{
            src: "/images/birdLarge03.png",
            width: 129,
            height: 102,
            sizes: "(min-width: 640px) 118px, 92px",
          }}
        />
      </div>
    </div>
  );
}

function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-2 text-[14px] font-medium text-slate-500">
      <span>Scroll to learn more</span>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-500 motion-safe:animate-[scrollBounce_1.5s_ease-in-out_infinite] motion-reduce:animate-none">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
    </div>
  );
}

function FloatingBirds() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <FlightBird
        className="absolute left-10 top-24 hidden w-[34px] will-change-transform sm:block"
        src="/images/birdMini.png"
        width={43}
        height={14}
        sizes="34px"
        durationMs={2400}
        delayMs={250}
        origin="viewport"
        originX={0.84}
        originY={0.8}
        lockX
      />
      <Image
        src="/images/birdMini.png"
        alt=""
        width={43}
        height={14}
        className="absolute left-24 top-44 hidden h-auto w-[30px] select-none will-change-transform  motion-reduce:animate-none sm:block [animation-delay:-1.6s]"
        sizes="30px"
      />
      <FlightBird
        className="absolute right-12 top-28 hidden w-[34px] will-change-transform sm:block"
        src="/images/birdMini.png"
        width={43}
        height={14}
        sizes="34px"
        durationMs={2400}
        delayMs={250}
        origin="viewport"
        originX={0.84}
        originY={0.8}
        lockX
      />
      <Image
        src="/images/birdMini.png"
        alt=""
        width={43}
        height={14}
        className="absolute right-20 top-48 hidden h-auto w-[30px] select-none will-change-transform  motion-reduce:animate-none sm:block [animation-delay:-2.1s]"
        sizes="30px"
      />
    </div>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <path
        d="M7 6.5A4.5 4.5 0 0 1 11.5 2H17a2 2 0 0 1 2 2v4.5A4.5 4.5 0 0 1 14.5 13H9v6a1 1 0 0 1-1.7.7l-2.8-2.8A2.4 2.4 0 0 1 4 15.2V6.5A0 0 0 0 1 7 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M16.8 13.2c0 2.8 2.5 3.8 2.5 3.9-.1.1-.4 1.4-1.3 2.7-.8 1.1-1.7 2.3-3 2.3s-1.7-.8-3.2-.8-2 .8-3.2.8-2.1-1.2-3-2.3C4.4 20.4 3 17.3 3 14.4c0-4.2 2.8-6.4 5.6-6.4 1.5 0 2.7.9 3.2.9.6 0 1.9-1 3.5-1 0 0 2.7.1 4 2.3-.1.1-2.5 1.4-2.5 4Z" />
      <path d="M14.9 3.4c.7-.9 1.2-2.1 1.1-3.4-1 .1-2.3.7-3 1.6-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.3-.6 3-1.5Z" />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <path
        d="M12 5v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m7 14 5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
