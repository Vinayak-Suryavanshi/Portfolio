import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

function Projects() {

  const projects = [
    {
      title: "Sign Language Vision to Text",
      desc: "Real-time gesture recognition system using OpenCV and Deep Learning.",
      tech: ["Python", "OpenCV", "CNN"],
      link: "https://github.com/YOUR_GITHUB_LINK",
      watermark: "VISION"
    },
    {
      title: "Railway Reservation System",
      desc: "Web based ticket booking system built with PHP.",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/YOUR_GITHUB_LINK",
      watermark: "RAILWAY"
    },
    {
      title: "Falling Ball Game",
      desc: "Interactive browser game made using JavaScript.",
      tech: ["JavaScript"],
      link: "https://viper-miku.github.io/falling-ball-game/",
      watermark: "GAME"
    },
    {
      title: "Blood Bank System",
      desc: "Full-stack blood bank management system.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://blood-bank-system-nu.vercel.app/",
      watermark: "BLOOD"
    },
    {
      title: "Gesture Volume Control",
      desc: "Control system volume using hand gestures.",
      tech: ["Python", "Machine Learning"],
      link: "https://github.com/YOUR_GITHUB_LINK",
      watermark: "GESTURE"
    }
  ];

  return (
    <section id="projects" className="w-full py-20 md:py-32 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 🔥 SEPARATOR */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent mb-16" />

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-16 tracking-tight"
        >
          Featured Works.
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

          {projects.map((project, index) => (

            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group border border-gray-200/50 dark:border-slate-800/60 
              rounded-3xl p-8 sm:p-10
              bg-white/40 dark:bg-slate-900/40 
              backdrop-blur-xl relative overflow-hidden
              transition-all duration-500 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 
              hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
            >
              
              {/* WATERMARK BACKGROUND */}
              <div className="absolute -bottom-6 -right-4 text-7xl sm:text-8xl md:text-9xl font-black text-gray-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-emerald-500/[0.05] transition-all duration-500 tracking-tighter">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                {/* CATEGORY TAG */}
                <div className="text-xs font-mono text-emerald-500 dark:text-emerald-400 mb-6 tracking-widest uppercase">
                  // {String(index + 1).padStart(2, '0')} — PROJECT
                </div>

                {/* TITLE */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                  {project.desc}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-[10px] sm:text-xs font-mono border border-gray-200/80 dark:border-slate-700/50 rounded-full bg-gray-50/50 dark:bg-slate-800/40 text-gray-600 dark:text-slate-300 group-hover:border-emerald-500/20 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="pt-6 border-t border-gray-200/50 dark:border-slate-800/50 flex justify-between items-center relative z-10">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  View Details <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <Github className="w-5 h-5 text-gray-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300" />
              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;