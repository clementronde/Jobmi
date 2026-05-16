"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const boxes = [
  { label: "Courage", x: "15%", y: "24%", angle: -26, className: "bg-[#5b00d7]" },
  { label: "Diversité", x: "29%", y: "16%", angle: 8, className: "bg-[#4d00be]" },
  { label: "Investissement", x: "33%", y: "38%", angle: -6, className: "bg-[#3f00a8]" },
  { label: "ChangerDeCarrière", x: "50%", y: "12%", angle: 0, className: "bg-[#5a00c8]" },
  { label: "Opportunités", x: "58%", y: "32%", angle: -2, className: "bg-[#4b00b7]" },
  { label: "Reconversion", x: "78%", y: "24%", angle: 16, className: "bg-[#5700d2]" },
  { label: "NouvelleAventure", x: "63%", y: "50%", angle: 8, className: "bg-[#4700b3]" },
];

const HomeSection6 = () => {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || hasEntered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { rootMargin: "0px 0px 45% 0px", threshold: 0 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <div
      ref={sectionRef}
      className="relative mt-[250px] rounded-t-2xl bg-[#0A1F44] py-20 text-center text-white"
    >
      <div className="absolute inset-x-0 -top-[195px] h-[280px] overflow-hidden [contain:layout_paint] sm:-top-[285px] sm:h-[380px]">
        {hasEntered && (
          <Gravity
            gravity={{ x: 0, y: 1 }}
            className="left-1/2 h-full w-full max-w-[980px] -translate-x-1/2 overflow-hidden [contain:layout_paint]"
            resetOnResize
          >
            {boxes.map((box) => (
              <MatterBody
                key={box.label}
                matterBodyOptions={{ friction: 0.45, restitution: 0.28, density: 0.001 }}
                x={box.x}
                y={box.y}
                angle={box.angle}
              >
                <div
                  className={`${box.className} select-none whitespace-nowrap rounded-md px-4 py-2 text-[clamp(0.9rem,3vw,1.9rem)] font-extrabold leading-none text-white shadow-xl shadow-black/25 sm:px-7 sm:py-4`}
                >
                  {box.label}
                </div>
              </MatterBody>
            ))}
          </Gravity>
        )}
      </div>
      <div className="mt-32 flex flex-col justify-center">
        <h2 className="text-4xl font-bold ">
          Prêt à <span className='underline-tilted decoration-[#a29bfe]'>tester</span> avant de choisir ?
        </h2>
        <div className='flex justify-center items-center'>
          <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/test"
              className="group mt-[40px] flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-black shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#a29bfe] hover:text-[#0A1F44] hover:shadow-[0_14px_30px_rgba(162,155,254,0.35)] active:translate-y-0"
            >
              Faire le test gratuit
              <Image src="/media/cta-blog-arrow.svg" alt="" width={28} height={28} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
      </div>
    </div>
  );
};

export default HomeSection6;
