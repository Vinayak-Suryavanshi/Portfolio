import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

function Projects() {

  const projects = [
    {
      title: "Sign Language Vision to Text",
      desc: "Real-time gesture recognition system using OpenCV and Deep Learning.",
      tech: ["Python", "OpenCV", "CNN"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    },
    {
      title: "Railway Reservation System",
      desc: "Web based ticket booking system built with PHP.",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    },
    {
      title: "Falling Ball Game",
      desc: "Interactive browser game made using JavaScript.",
      tech: ["JavaScript"],
      link: "https://viper-miku.github.io/falling-ball-game/"
    },
    {
      title: "Blood Bank System",
      desc: "Full-stack blood bank management system.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://blood-bank-system-nu.vercel.app/"
    },
    {
      title: "Gesture Volume Control",
      desc: "Control system volume using hand gestures.",
      tech: ["Python", "Machine Learning"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    }
  ];

  return (
    <section id="projects" className="w-full py-16 md:py-24 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 🔥 SEPARATOR */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent mb-10" />

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-400 mb-10 md:mb-12"
        >
          Projects
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {projects.map((project, index) => (

            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group border border-gray-200 dark:border-zinc-800 
              rounded-2xl p-6 sm:p-8 
              bg-white/60 dark:bg-zinc-900/40 
              backdrop-blur-md relative overflow-hidden
              transition-all duration-300 
              hover:border-emerald-400 dark:hover:border-emerald-400
              hover:shadow-xl hover:shadow-emerald-500/20 flex flex-col justify-between"
            >

              {/* WATERMARK BACKGROUND */}
              <div className="absolute -bottom-4 -right-2 text-7xl sm:text-8xl font-black text-gray-900/[0.04] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-emerald-500/[0.08] transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                {/* CATEGORY LABEL */}
                <div className="text-xs font-mono text-emerald-500 dark:text-emerald-400 mb-4 tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  // {String(index + 1).padStart(2, '0')} — PROJECT
                </div>

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono rounded-full 
                      border border-gray-200 dark:border-zinc-700/50
                      bg-gray-100/80 dark:bg-zinc-800/60 text-gray-600 dark:text-gray-300
                      transition duration-300 group-hover:border-emerald-500/30 group-hover:text-emerald-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-4 pt-5 border-t border-gray-200/50 dark:border-zinc-800/50 flex justify-between items-center relative z-10">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors flex items-center gap-2">
                  View Project <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <Github className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-emerald-500 group-hover:scale-110" />
              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;