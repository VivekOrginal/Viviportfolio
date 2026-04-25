"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { links } from "./config";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          className={cn(styles.header)}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
      {/* DESKTOP ONLY - pill nav */}
      <div className={cn(styles.bar, "hidden md:flex items-center gap-1")}>
        {links.map((link) => (
          <Link key={link.title} href={link.href}>
            <Button variant="ghost" className="text-sm px-3 py-1 h-auto text-white hover:text-white hover:bg-white/10">
              {link.title}
            </Button>
          </Link>
        ))}
      </div>

      {/* MOBILE ONLY - hamburger + full left sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center gap-[5px] p-3 rounded-full"
          style={{
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(16px)",
          }}
        >
          <span className={cn("block h-[2px] w-5 bg-white transition-all duration-300", open && "rotate-45 translate-y-[7px]")} />
          <span className={cn("block h-[2px] w-5 bg-white transition-all duration-300", open && "opacity-0 w-0")} />
          <span className={cn("block h-[2px] w-5 bg-white transition-all duration-300", open && "-rotate-45 -translate-y-[7px]")} />
        </button>

        <AnimatePresence>
          {open && (
            <>
              {/* backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[998] bg-black/60"
                onClick={() => setOpen(false)}
              />
              {/* left sidebar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="fixed top-0 left-0 h-full w-64 z-[999] flex flex-col pt-20 pb-10 px-8"
                style={{
                  background: "rgba(0,0,0,0.95)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-5 text-white/60 hover:text-white text-xl"
                >
                  ✕
                </button>
                <nav className="flex flex-col gap-2">
                  {links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg text-white/80 hover:text-white hover:pl-2 transition-all duration-200 py-3 border-b border-white/10 last:border-0 capitalize"
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
