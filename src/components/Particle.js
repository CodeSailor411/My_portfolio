import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function getReducedMotionPreference() {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  return Boolean(window.matchMedia(REDUCED_MOTION_QUERY)?.matches);
}

function Particle() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getReducedMotionPreference
  );

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    if (!mediaQuery) return undefined;
    const handleChange = (event) => setPrefersReducedMotion(event.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <Particles
      id="tsparticles"
      aria-hidden="true"
      params={{
        fpsLimit: 60,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
        responsive: [
          {
            maxWidth: 767,
            options: {
              particles: {
                number: {
                  value: 80,
                },
              },
            },
          },
        ],
      }}
    />
  );
}

export default Particle;
