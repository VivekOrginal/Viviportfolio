"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children }: LenisProps) {
  const lenis = useLenis(() => {});

  useEffect(() => {
    const stop = () => lenis?.stop();
    const start = () => lenis?.start();
    window.addEventListener("lenis:stop", stop);
    window.addEventListener("lenis:start", start);
    return () => {
      window.removeEventListener("lenis:stop", stop);
      window.removeEventListener("lenis:start", start);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        prevent: (node) => node.hasAttribute("data-lenis-prevent"),
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
