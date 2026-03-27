import Link from "next/link";
import { Mail, Phone } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg gradient-text">Sujith G</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Electronics & Embedded Systems Engineer
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="mailto:sujith23006@gmail.com"
              className="text-zinc-600 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919025223136"
              className="text-zinc-600 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors"
            >
              <Phone size={20} />
            </a>
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
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Sujith G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}