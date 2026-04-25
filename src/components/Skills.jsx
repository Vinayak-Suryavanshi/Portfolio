import { motion } from "framer-motion";
import { Code2, Globe, Terminal } from "lucide-react";

function Skills() {

  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      items: ["JavaScript", "TypeScript", "Python", "C/C++", "SQL", "HTML/CSS/Sass"]
    },
    {
      title: "Frameworks",
      icon: <Globe className="w-5 h-5 text-emerald-500" />,
      items: ["React JS", "Next JS", "Node JS", "Tailwind CSS", "Firebase", "MongoDB", "AI / ML"]
    },
    {
      title: "Tools",
      icon: <Terminal className="w-5 h-5 text-emerald-500" />,
      items: ["Git/GitHub", "VS Code", "Postman", "Figma", "Vercel", "Render", "AWS"]
    }
  ];

  return (
    <section id="skills" className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 🔥 SEPARATOR */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent mb-10" />

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-400 mb-10 md:mb-12"
        >
          Technologies & Tools
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CATEGORIES */}
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-400 dark:hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-2">
                {category.items.map((item, i) => (
                  <div key={i} className="px-4 py-2 bg-gray-100/80 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700/50 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* JAPANESE THEME CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center hover:border-emerald-400 dark:hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 group min-h-[250px]"
          >
            {/* Background glowing orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-500" />
            <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500" />

            {/* Kanji Watermark */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-gray-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none group-hover:scale-110 group-hover:text-emerald-500/[0.05] transition-all duration-700">
              創
            </div>

            <div className="flex w-full h-full items-center justify-center gap-6 z-10">
              
              {/* Vertical Text (Tategaki) */}
              <div 
                className="text-4xl md:text-5xl font-black tracking-[0.2em] text-gray-900 dark:text-white select-none"
                style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              >
                <span className="text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">未来</span>
                <span className="opacity-80">創造</span>
              </div>
              
              {/* Divider & Info */}
              <div className="flex flex-col border-l-2 border-emerald-500/20 pl-5 py-2">
                <span className="text-[10px] font-mono text-emerald-500 tracking-[0.2em] uppercase mb-1">Philosophy</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">Future<br/>Creation</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[120px]">
                  Architecting tomorrow's digital experiences.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Skills;