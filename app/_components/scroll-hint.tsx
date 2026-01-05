export function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-2 text-[16px] font-semibold  text-black">
      <span>Scroll to learn more</span>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-black motion-safe:animate-[scrollBounce_1.5s_ease-in-out_infinite] motion-reduce:animate-none">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
    </div>
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
