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
      items: ["React JS", "Next JS", "Node JS", "Express JS", "Tailwind CSS", "Firebase", "MongoDB", "Bootstrap"]
    },
    {
      title: "Tools",
      icon: <Terminal className="w-5 h-5 text-emerald-500" />,
      items: ["Git/GitHub", "VS Code", "Postman", "Figma", "Vercel", "Netlify", "Drizzle ORM", "AWS"]
    }
  ];

  return (
    <section id="skills" className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-16"
        >
          Technologies & tools.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CATEGORIES */}
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/40 dark:bg-[#13131f] border border-gray-200 dark:border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-2">
                {category.items.map((item, i) => (
                  <div key={i} className="px-4 py-2 bg-gray-50/50 dark:bg-[#1a1a2e]/50 border border-gray-200/50 dark:border-gray-800/50 rounded-lg text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-white dark:hover:bg-[#1a1a2e] hover:border-emerald-500/30 transition-all duration-300">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* RADAR CHART CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/40 dark:bg-[#13131f] border border-gray-200 dark:border-gray-800 rounded-xl p-6 relative overflow-hidden flex flex-col hover:border-emerald-500/50 transition-colors"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide mb-6">Skill Radar</h3>
            <div className="flex-1 w-full h-full flex items-center justify-center relative min-h-[250px]">
              <svg width="220" height="220" viewBox="0 0 200 200" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                {/* Background webs */}
                <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <polygon points="100,80 117,90 117,110 100,120 83,110 83,90" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                
                {/* Axes */}
                <line x1="100" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <line x1="100" y1="100" x2="170" y2="60" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <line x1="100" y1="100" x2="170" y2="140" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <line x1="100" y1="100" x2="100" y2="180" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <line x1="100" y1="100" x2="30" y2="140" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />
                <line x1="100" y1="100" x2="30" y2="60" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-[#27272a]" />

                {/* Data Polygon */}
                <polygon points="100,30 160,65 140,125 100,165 50,135 60,70" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
              </svg>
              {/* Labels */}
              <span className="absolute top-0 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">Frontend</span>
              <span className="absolute top-[28%] right-0 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">Backend</span>
              <span className="absolute bottom-[25%] right-0 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">Security</span>
              <span className="absolute bottom-2 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">IoT</span>
              <span className="absolute bottom-[25%] left-2 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">ML/AI</span>
              <span className="absolute top-[28%] left-2 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">Cloud</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Skills;