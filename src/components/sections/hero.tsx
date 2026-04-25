"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useRef } from "react";
import {
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

function ShimmerButton({ className, children, href, target }: { className?: string; children: React.ReactNode; href: string; target?: string }) {
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = rippleRef.current;
    if (!ripple) return;
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.classList.remove("animate-ripple");
    void ripple.offsetWidth;
    ripple.classList.add("animate-ripple");
  };

  return (
    <Link href={href} target={target}>
      <button
        onClick={handleClick}
        className={cn(
          "relative overflow-hidden bg-black text-white border border-black rounded-md transition-opacity hover:opacity-80",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        <span
          ref={rippleRef}
          className="absolute rounded-full bg-white/20 pointer-events-none scale-0"
          style={{ transform: "scale(0)" }}
        />
      </button>
    </Link>
  );
}

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <style>{`
        @keyframes ripple {
          to { transform: scale(1); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out forwards;
        }
      `}</style>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-start md:items-start",
            "pt-28 pl-6 sm:pt-0 sm:pl-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div>
                <BlurIn delay={0.7}>
                  <p className={cn("md:self-start mt-4 font-thin text-md text-black ml-3", "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap")}>
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1 className={cn("font-thin text-6xl text-black ml-1 text-left", "cursor-default font-display sm:text-7xl md:text-9xl")}>
                        {config.author.split(" ")[0]}
                        <br className="md:block hidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p className={cn("md:self-start md:mt-4 font-thin text-md text-black ml-3", "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap")}>
                    AI Enthusiast | VIVEK PS
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <div className="md:self-start flex gap-3">
                  <ShimmerButton href="#contact" className="px-5 py-2 text-sm font-medium">
                    Hire Me
                  </ShimmerButton>
                  <ShimmerButton href={config.social.github} target="_blank" className="p-2">
                    <SiGithub size={20} />
                  </ShimmerButton>
                  <ShimmerButton href={config.social.linkedin} target="_blank" className="p-2">
                    <SiLinkedin size={20} />
                  </ShimmerButton>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
