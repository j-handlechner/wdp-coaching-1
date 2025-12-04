gsap.registerPlugin(ScrollTrigger);

// ======== handle lenis stuff

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// ======== horizontal scroll with gsap + scrolltrigger
const process = document.querySelector(".process");
if (process) {
  let sections = process.querySelectorAll(".process__item");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1), // this assumes all the sections to be the same width. if you want different widths, instead calculate the width of the whole container and subtract the width of the last section
    ease: "none",
    scrollTrigger: {
      trigger: process,
      markers: false,
      scrub: 1,
      pin: true,
      end: () => "+=" + document.querySelector(".process").offsetWidth,
    },
  });
}
