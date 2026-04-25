import { motion } from "framer-motion";

function Skills() {

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Git", "MongoDB"]
    },
    {
      title: "AI / ML",
      skills: ["Python", "OpenCV", "Machine Learning", "TensorFlow"]
    }
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 md:py-24"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-400"
        >
          Skills
        </motion.h2>

        <div className="w-16 sm:w-20 h-[2px] bg-emerald-500 dark:bg-emerald-400 mt-3 sm:mt-4 mb-8 sm:mb-10" />

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mb-10 md:mb-14"
        >
          I work across frontend development, backend tools, and AI systems,
          focusing on building interactive and intelligent applications.
        </motion.p>

        {/* SKILL GROUPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

          {skillGroups.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group border border-gray-200 dark:border-zinc-800 
              rounded-2xl p-6 sm:p-8 
              bg-white/60 dark:bg-zinc-900/40 
              backdrop-blur-md relative overflow-hidden
              transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20"
            >

              <h3 className="text-emerald-500 dark:text-emerald-400 mb-6 font-bold tracking-wide text-lg sm:text-xl flex items-center gap-3">
                <span className="w-8 h-[2px] bg-emerald-500/50 group-hover:w-12 transition-all duration-300" />
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">

                {group.skills.map((skill, i) => (

                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 text-xs sm:text-sm font-medium rounded-full 
                    border border-gray-200 dark:border-zinc-700/50
                    bg-gray-100/80 dark:bg-zinc-800/60 text-gray-700 dark:text-gray-300
                    transition-colors duration-300 cursor-pointer
                    hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;