"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Mail, Phone, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech/B.E. - Electronics and Communication Engineering",
    college: "Muthayammal Engineering College, Rasipuram",
    period: "2023 - Present",
    score: "CGPA: 7.2%",
  },
  {
    degree: "Class XII (Higher Secondary)",
    college: "Tamil Nadu State Board",
    period: "2021 - 2023",
    score: "65.5%",
  },
  {
    degree: "Class X (Secondary)",
    college: "Tamil Nadu State Board",
    period: "2021",
    score: "100%",
  },
];

const technicalSkills = [
  { category: "Hardware Design", skills: ["PCB Design", "Power Electronics", "Microcontroller Interfacing"] },
  { category: "Programming", skills: ["C", "C++", "Python", "MATLAB Simulink"] },
  { category: "Embedded Systems", skills: ["STM32", "Arduino", "UART/I2C/SPI", "Linux"] },
  { category: "Domains", skills: ["Automotive Electronics", "Industrial Automation"] },
];

const certifications = [
  "Introduction To Automotive Embedded Systems",
  "Networking 101",
  "Introduction To Networking",
];

const languages = ["English (Both)", "Tamil (Both)"];

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-white via-violet-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h1>
          <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <a
            href="/ptf/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition-colors shadow-lg hover:shadow-violet-500/25"
          >
            <Download size={20} />
            Download PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-zinc-800 rounded-xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700"
        >
          <div className="text-center mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Sujith G</h2>
            <p className="text-xl text-violet-600 font-medium mb-4">Electronics Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin size={16} /> Salem, India
              </span>
              <span className="flex items-center gap-1">
                <Mail size={16} /> sujith23006@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={16} /> +91-9025223136
              </span>
            </div>
          </div>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-violet-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-violet-600" />
              Summary
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Electronics and Communication Engineering student with hands-on experience in embedded systems and automotive electronics. Passionate about developing innovative ECU solutions and industrial automation, I aim to leverage my skills in firmware development and microcontroller interfacing to create impactful engineering advancements.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-violet-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-violet-600" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-violet-300 dark:border-violet-700 pl-4">
                  <h4 className="font-semibold text-zinc-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{edu.college}</p>
                  <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {edu.period}
                    </span>
                    <span>{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-violet-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-violet-600" />
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skillCategory) => (
                <div key={skillCategory.category} className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">{skillCategory.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-violet-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-violet-600" />
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                  <span className="w-2 h-2 bg-violet-600 rounded-full" />
                  {cert}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-violet-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-violet-600" />
              Internship
            </h3>
            <div className="border-l-2 border-violet-300 dark:border-violet-700 pl-4">
              <h4 className="font-semibold text-zinc-900 dark:text-white">Steel Authority of India (SAIL)</h4>
              <p className="text-zinc-600 dark:text-zinc-400">July 2025</p>
              <p className="text-zinc-600 dark:text-zinc-300 mt-2">Learnt about industrial automation systems and processes.</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-violet-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-violet-600" />
              Languages
            </h3>
            <div className="flex gap-4">
              {languages.map((lang) => (
                <span key={lang} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full">
                  {lang}
                </span>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}