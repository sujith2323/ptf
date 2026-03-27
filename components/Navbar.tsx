"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-0.5 6-2.5 6-6a4.8 4.8 0 0 0-1-3.5c0-1-0.5-3-1.5-3.5 0 0-1.5 0-3 1-1-0.5-2-0.5-3-0.5s-2 0-3 0.5c-1.5-1-3-1-3-1-1 0.5-1.5 2.5-1.5 3.5a4.8 4.8 0 0 0-1 3.5c0 3.5 3 5.5 6 6a4.8 4.8 0 0 0-1 3.5v4" />
    <path d="M9 22c-0.5 0-1 0.5-1 1v1h8v-1c0-0.5-0.5-1-1-1" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl gradient-text">
            Sujith G
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-violet-600 dark:text-zinc-300 dark:hover:text-violet-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://github.com/sujith2323"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/sujith2306/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors"
              >
                <LinkedinIcon />
              </a>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {mounted ? (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : <Moon size={20} />}
              </button>
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-zinc-600 hover:text-violet-600 dark:text-zinc-300 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/sujith2323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 transition-colors"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujith2306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-violet-600 dark:text-zinc-400 transition-colors"
                >
                  <LinkedinIcon />
                </a>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {mounted ? (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : <Moon size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}