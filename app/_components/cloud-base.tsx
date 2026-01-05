import Image from "next/image";
import { BirdLargeFlyouts } from "./birds";

export function CloudBase() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 sm:absolute">
      <div className="relative h-[260px] sm:h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#cfe6ff]" />
        <Image
          src="/images/bottomcloud.svg"
          alt=""
          width={1920}
          height={594}
          className="absolute inset-x-0 bottom-0 h-full w-full select-none object-cover"
          sizes="100vw"
          priority
        />

        <Image
          src="/images/birdLarge01.png"
          alt=""
          width={104}
          height={77}
          className="absolute bottom-6 left-6 h-auto w-[64px] select-none sm:bottom-12 sm:left-56 sm:w-[92px]"
          sizes="(min-width: 640px) 92px, 72px"
        />
        <Image
          src="/images/birdLarge02.png"
          alt=""
          width={88}
          height={57}
          className="absolute bottom-28 left-1/2 h-auto w-[54px] -translate-x-24 select-none sm:bottom-36 sm:w-[72px] sm:-translate-x-[180px]"
          sizes="(min-width: 640px) 72px, 60px"
        />
        <Image
          src="/images/birdLarge03.png"
          alt=""
          width={129}
          height={55}
          className="absolute bottom-16 left-1/2 h-auto w-[76px] translate-x-16 select-none sm:bottom-24 sm:w-[108px] sm:translate-x-[110px]"
          sizes="(min-width: 640px) 108px, 86px"
        />
        <Image
          src="/images/birdLarge04.png"
          alt=""
          width={129}
          height={102}
          className="absolute bottom-10 right-6 h-auto w-[70px] select-none sm:bottom-16 sm:right-40 sm:w-[102px]"
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
