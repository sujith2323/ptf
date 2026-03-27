"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  period: string;
}

const projects: Project[] = [
  {
    title: "Standalone ECU using STM32 MCU",
    description:
      "Designed and developed a custom Standalone Engine Control Unit (ECU) using the STM32F401 microcontroller to control fuel injection and ignition timing. Implemented real-time engine parameter processing including RPM measurement, injector pulse width calculation, and ignition control. Integrated sensor inputs such as TPS, MAP, and temperature sensors with configurable tuning support via serial communication. Developed low-level drivers for injector and ignition outputs with automotive-safe interfacing circuitry.",
    tech: ["STM32", "C", "Embedded C", "UART", "Sensor Interfacing", "PCB Design"],
    period: "Feb 2026 - Mar 2026",
  },
  {
    title: "IoT-Based Flame and Smoke Detector",
    description:
      "Developed an IoT-enabled flame and smoke detection system capable of monitoring fire hazards in real time and sending alerts remotely. The system integrates flame and MQ-series smoke sensors with a microcontroller and transmits alerts through a wireless module to notify users via mobile or cloud platform. A buzzer alarm provides immediate local warning while IoT connectivity ensures remote monitoring and rapid response.",
    tech: ["IoT", "Arduino", "MQ Sensors", "Wireless Communication", "Cloud Platform"],
    period: "Aug 2025",
  },
  {
    title: "RFID-Based Door Lock",
    description:
      "Designed and implemented a low-cost RFID-based smart door locking system using an Arduino Nano for secure access control. The system uses an MFRC522 RFID reader to authenticate authorized cards and controls an electromagnetic lock/servo relay to grant or deny access. Visual and audio indicators (LED/buzzer) provide real-time user feedback. The project demonstrates embedded system design, serial communication (SPI), and basic security logic implementation.",
    tech: ["Arduino Nano", "RFID (MFRC522)", "SPI", "Embedded Systems", "Security Logic"],
    period: "Oct 2022 - Nov 2022",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 card-hover border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-violet-600 font-medium">{project.period}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-400 rounded-full font-semibold hover:bg-violet-50 dark:hover:bg-violet-950 transition-colors"
          >
            View All Projects
            <ExternalLink size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}