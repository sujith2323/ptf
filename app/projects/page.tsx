"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  period: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Standalone ECU using STM32 MCU",
    description:
      "Designed and developed a custom Standalone Engine Control Unit (ECU) using the STM32F401 microcontroller to control fuel injection and ignition timing. Implemented real-time engine parameter processing including RPM measurement, injector pulse width calculation, and ignition control. Integrated sensor inputs such as TPS, MAP, and temperature sensors with configurable tuning support via serial communication. Developed low-level drivers for injector and ignition outputs with automotive-safe interfacing circuitry.",
    tech: ["STM32", "C", "Embedded C", "UART", "Sensor Interfacing", "PCB Design", "Automotive Electronics"],
    period: "Feb 2026 - Mar 2026",
    category: "Automotive",
  },
  {
    title: "IoT-Based Flame and Smoke Detector",
    description:
      "Developed an IoT-enabled flame and smoke detection system capable of monitoring fire hazards in real time and sending alerts remotely. The system integrates flame and MQ-series smoke sensors with a microcontroller and transmits alerts through a wireless module to notify users via mobile or cloud platform. A buzzer alarm provides immediate local warning while IoT connectivity ensures remote monitoring and rapid response.",
    tech: ["IoT", "Arduino", "MQ Sensors", "Wireless Communication", "Cloud Platform", "MQTT", "Real-time Monitoring"],
    period: "Aug 2025",
    category: "IoT",
  },
  {
    title: "RFID-Based Door Lock",
    description:
      "Designed and implemented a low-cost RFID-based smart door locking system using an Arduino Nano for secure access control. The system uses an MFRC522 RFID reader to authenticate authorized cards and controls an electromagnetic lock/servo relay to grant or deny access. Visual and audio indicators (LED/buzzer) provide real-time user feedback. The project demonstrates embedded system design, serial communication (SPI), and basic security logic implementation.",
    tech: ["Arduino Nano", "RFID (MFRC522)", "SPI Communication", "Embedded Systems", "Security Logic", "Servo Control"],
    period: "Oct 2022 - Nov 2022",
    category: "Security",
  },
];

const categories = ["All", "Automotive", "IoT", "Security"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-white via-violet-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A collection of embedded systems and electronics projects showcasing my skills in firmware development, PCB design, and hardware interfacing.
          </p>
          <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 sm:p-8 card-hover border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="px-3 py-1 text-sm font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-bold mt-3 text-zinc-900 dark:text-white">
                    {project.title}
                  </h2>
                </div>
                <span className="text-sm text-violet-600 font-medium whitespace-nowrap">
                  {project.period}
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}