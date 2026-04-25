import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, X, Calendar, Code, ExternalLink, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { useState, useEffect } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open and prevent layout shift
  useEffect(() => {
    if (selectedProject) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      const nav = document.querySelector('nav');
      if (nav) nav.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      const nav = document.querySelector('nav');
      if (nav) nav.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      const nav = document.querySelector('nav');
      if (nav) nav.style.paddingRight = "";
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Sign Language Vision to Text",
      desc: "Real-time gesture recognition system using OpenCV and Deep Learning.",
      tech: ["Python", "OpenCV", "CNN"],
      github: "https://github.com/Vinayak-Suryavanshi/Sign-Language-Vision-to-Text",
      live: "",
      year: "2023-2024",
      overview: "A computer vision application that translates sign language gestures into text in real-time. This project aims to bridge the communication gap for the deaf and hard-of-hearing community by utilizing Convolutional Neural Networks (CNN) to accurately classify hand gestures captured via webcam.",
      features: [
        "Real-time hand tracking and gesture recognition",
        "Custom CNN trained on a massive sign language dataset",
        "High accuracy classification with minimal latency",
        "OpenCV integration for efficient frame processing"
      ],
      challenges: "One of the main challenges was dealing with varying lighting conditions and background noise, which often confused the hand-tracking algorithm. This was solved by applying extensive data augmentation during training (varying brightness, contrast) and implementing dynamic background subtraction techniques using OpenCV before feeding frames to the model."
    },
    {
      title: "Railway Reservation System",
      desc: "Web based ticket booking system built with PHP.",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vinayak-Suryavanshi/Railway-Reservation-System",
      live: "",
      year: "2023",
      overview: "A comprehensive web-based platform designed to simulate a real-world railway ticketing system. It allows users to search for trains, check seat availability, book tickets, and manage their reservations securely. Built entirely from scratch using raw PHP and MySQL.",
      features: [
        "User authentication and secure session management",
        "Real-time seat availability checking",
        "Admin dashboard for managing trains and routes",
        "Responsive front-end design for mobile and desktop"
      ],
      challenges: "Handling concurrent bookings for the same seat was a critical issue. If two users tried to book the last seat simultaneously, it could result in overbooking. I solved this by implementing database transaction locks (ACID properties) in MySQL during the checkout process to ensure seat allocations were strictly sequential and atomic."
    },
    {
      title: "Falling Ball Game",
      desc: "Interactive browser game made using JavaScript.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
      github: "https://github.com/Vinayak-Suryavanshi/falling-ball-game",
      live: "https://vinayak-suryavanshi.github.io/falling-ball-game/",
      year: "2024",
      overview: "An engaging, fast-paced arcade game built purely with Vanilla JavaScript and HTML5 Canvas. The player controls a ball that must navigate through continuously moving gaps in platforms without hitting the top of the screen. Features increasing difficulty and a high-score system.",
      features: [
        "Smooth 60FPS rendering using requestAnimationFrame",
        "Custom physics engine for gravity and collision detection",
        "Dynamic difficulty scaling over time",
        "Local storage integration for saving high scores"
      ],
      challenges: "Ensuring smooth animations across different monitor refresh rates was initially tricky; the game ran too fast on 144Hz monitors. I resolved this by implementing delta-time (calculating the time difference between frames) to normalize movement speeds, ensuring consistent gameplay physics regardless of the user's hardware."
    },
    {
      title: "Blood Bank System",
      desc: "Full-stack blood bank management system.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      github: "https://github.com/Vinayak-Suryavanshi/Blood-Bank-System",
      live: "https://blood-bank-system-nu.vercel.app/",
      year: "2024-2025",
      overview: "A life-saving full-stack application that connects blood donors with hospitals and individuals in need. It features a robust dashboard for managing blood inventory, registering donors, and processing urgent blood requests geographically.",
      features: [
        "Donor registration and eligibility tracking",
        "Live dashboard for blood group inventory management",
        "Geographic filtering for nearby donors",
        "Secure RESTful API backend architecture"
      ],
      challenges: "Managing state across a complex React dashboard with multiple components became chaotic, leading to unnecessary re-renders and sluggish performance. I solved this by restructuring the state management using React Context API for global state (like user sessions) and optimizing local component states, significantly improving UI responsiveness."
    },
    {
      title: "Gesture Volume Control",
      desc: "Control system volume using hand gestures.",
      tech: ["Python", "MediaPipe", "Machine Learning"],
      github: "https://github.com/Vinayak-Suryavanshi/Gesture-Volume-Control",
      live: "",
      year: "2024",
      overview: "A touchless interface tool that allows users to adjust their computer's master volume simply by moving their hands in front of the webcam. It utilizes Google's MediaPipe framework for robust hand landmark detection and calculates the distance between the thumb and index finger to map to system volume levels.",
      features: [
        "Lightning-fast hand landmark detection using MediaPipe",
        "Direct integration with Windows/macOS audio core",
        "Visual on-screen volume bar feedback",
        "Low CPU overhead for continuous background running"
      ],
      challenges: "The system sometimes registered false positives if the user scratched their face or brought their hands together casually. I addressed this by requiring a specific 'activation' gesture (like holding the hand open for 1 second) before the volume control state is engaged, greatly improving the user experience and preventing accidental volume spikes."
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
            <motion.div
              key={index}
              onClick={() => setSelectedProject({ ...project, index })}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer border border-gray-200 dark:border-zinc-800 
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
                <div className="text-xs font-mono text-emerald-500 dark:text-emerald-400 mb-4 tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  // {String(index + 1).padStart(2, '0')} — PROJECT
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2">
                  {project.desc}
                </p>

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

              <div className="mt-4 pt-5 border-t border-gray-200/50 dark:border-zinc-800/50 flex justify-between items-center relative z-10">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors flex items-center gap-2">
                  View Details <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 dark:bg-black/90 cursor-pointer"
            />

            {/* MODAL CONTENT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-10 custom-scrollbar"
            >
              
              {/* TOP BAR / CLOSE BUTTON */}
              <div className="sticky top-0 right-0 w-full flex justify-end p-4 bg-gradient-to-b from-white dark:from-zinc-950 to-transparent z-20 pointer-events-none">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="pointer-events-auto p-2 bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-full text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* MODAL BODY */}
              <div className="p-6 sm:p-8 md:p-10 pt-0 -mt-8">
                
                {/* HEADER */}
                <div className="mb-8">
                  <div className="text-emerald-500 dark:text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                    PROJECT {String(selectedProject.index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedProject.year}
                  </div>
                </div>

                {/* TECH STACK BANNER */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-900/10 mb-10 gap-4">
                  <div>
                    <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          {t}{i < selectedProject.tech.length - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* ACTION BUTTONS */}
                  <div className="flex gap-3">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-500 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-colors"
                      >
                        <Code className="w-4 h-4" /> Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                      >
                        <ExternalLink className="w-4 h-4" /> Live App
                      </a>
                    )}
                  </div>
                </div>

                {/* OVERVIEW */}
                <div className="mb-10">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
                    <FileText className="w-5 h-5 text-emerald-500" /> Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* KEY FEATURES */}
                <div className="mb-10">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CHALLENGES */}
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
                    <ShieldAlert className="w-5 h-5 text-emerald-500" /> Challenges & Solutions
                  </h3>
                  <div className="p-5 md:p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Projects;