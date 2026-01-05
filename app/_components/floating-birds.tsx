import Image from "next/image";
import { FlightBird } from "./birds";

export function FloatingBirds() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <FlightBird
        className="absolute left-[-70px] top-36 hidden w-[34px] will-change-transform sm:block"
        src="/images/birdMini.png"
        width={43}
        height={14}
        sizes="34px"
        durationMs={2400}
        delayMs={250}
        origin="viewport"
        originX={0.84}
        originY={0.9}
        lockX
      />
      <Image
        src="/images/birdMini.png"
        alt=""
        width={43}
        height={14}
        className="absolute left-24 top-48 hidden h-auto w-[30px] select-none will-change-transform motion-reduce:animate-none sm:block [animation-delay:-1.6s]"
        sizes="30px"
      />
      <FlightBird
        className="absolute right-28 top-36 hidden w-[34px] will-change-transform sm:block"
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
        className="absolute right-20 top-72 hidden h-auto w-[30px] select-none will-change-transform motion-reduce:animate-none sm:block [animation-delay:-2.1s]"
        sizes="30px"
      />
    </div>
  );
}
