"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-white via-violet-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-violet-500 shadow-xl">
              <Image
                src="/ptf/profile.png"
                alt="Sujith G"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">⚡</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Sujith G</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 mb-6"
        >
          Electronics & Embedded Systems Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-8"
        >
          Passionate about developing innovative ECU solutions and industrial automation.
          Building impactful engineering advancements through firmware development and embedded systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-violet-500 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
}