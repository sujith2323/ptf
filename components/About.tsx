"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Hardware Design", items: ["PCB Design", "Power Electronics", "Microcontroller"] },
  { category: "Embedded Systems", items: ["STM32", "Arduino", "UART/I2C/SPI"] },
  { category: "Programming", items: ["C", "C++", "Python", "MATLAB Simulink"] },
  { category: "Domains", items: ["Automotive Electronics", "Industrial Automation"] },
];

const certifications = [
  "Introduction To Automotive Embedded Systems",
  "Networking 101",
  "Introduction To Networking",
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
              Electronics & Communication Engineering Student
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
              I am an Electronics and Communication Engineering student with hands-on experience
              in embedded systems and automotive electronics. Passionate about developing
              innovative ECU solutions and industrial automation, I aim to leverage my skills
              in firmware development and microcontroller interfacing to create impactful
              engineering advancements.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-violet-600 font-semibold">Education:</span>
                <span className="text-zinc-600 dark:text-zinc-300">
                  B.Tech ECE, Muthayammal Engineering College (7.2%)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-600 font-semibold">Location:</span>
                <span className="text-zinc-600 dark:text-zinc-300">Salem, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-600 font-semibold">Internship:</span>
                <span className="text-zinc-600 dark:text-zinc-300">SAIL - Industrial Automation (July 2025)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-white">
              Certifications
            </h3>
            <ul className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <span className="w-2 h-2 bg-violet-600 rounded-full" />
                  {cert}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-white">
              Tech Stack
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <p className="text-sm text-violet-600 font-semibold mb-2">{skill.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}