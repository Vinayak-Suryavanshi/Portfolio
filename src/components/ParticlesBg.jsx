import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0"
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        fpsLimit: 144,
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#10b981", "#06b6d4", "#8b5cf6", "#f43f5e", "#eab308"],
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.2,
            random: true,
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            polygon: {
              sides: 5
            }
          },
          size: {
            value: { min: 2, max: 8 },
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBg;