import { AppleIcon } from "./_components/apple-icon";
import { CloudBase } from "./_components/cloud-base";
import { FloatingBirds } from "./_components/floating-birds";
import { Header } from "./_components/header";
import { ScrollHint } from "./_components/scroll-hint";
export default function Home() {
  return (
    <div className="h-[100svh]  bg-[#eaf4ff] text-slate-900">
      <main className="relative isolate flex flex-col overflow-x-hidden overflow-y-auto">
        <div className="hero-radial pointer-events-none absolute inset-0 -z-10" />

        <Header />

        <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
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
              
            </a>

            <h1 className="mt-6 text-balance text-[34px] font-black leading-[1.05] tracking-tight text-slate-900 sm:text-[52px]">
              <span className="text-[#1677ff]">iMessage</span> Automation
              <br />
              for Teams and AI
              <br />
              Workflows<span className="text-slate-900">.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-pretty text-[14px] leading-6 text-slate-600 sm:mt-6">
              Coup lets you, your team, or AI workflows send iMessages directly
              from your phone number, running securely on your Mac or Mac Mini.
            </p>

            <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#1677ff] px-6 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#0e66e9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2 sm:w-auto"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-white/75 px-5 text-[13px] font-semibold text-slate-900 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2 sm:w-auto sm:px-6"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center">
                  <AppleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <hr className="h-4 w-px bg-gray-600" />
                Download the Mac app
              </a>
            </div>

            <div className="mt-14 flex flex-col items-center gap-3 sm:mt-48">
              <ScrollHint />
            </div>
          </div>
        </section>

        <CloudBase />
      
      </main>
    </div>
  );
}

