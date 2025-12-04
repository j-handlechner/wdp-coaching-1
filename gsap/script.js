// register scrolltrigger
gsap.registerPlugin(ScrollTrigger, SplitText);

/* -----------------------------
   1. Line Reveal Mask
------------------------------ */
(() => {
  const split = new SplitText(".effect-line", { type: "lines", mask: "lines" });

  gsap.from(split.lines, {
    yPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".effect-line",
      start: "top 80%",
    },
  });
})();

/* -----------------------------
   2. Word Rise (Slide Up Words)
------------------------------ */
(() => {
  const split = new SplitText(".effect-words", {
    type: "words",
    mask: "words",
  });

  gsap.from(split.words, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.07,
    scrollTrigger: {
      trigger: ".effect-words",
      start: "top 85%",
    },
  });
})();

/* -----------------------------
   3. Character Fade + Ma
------------------------------ */
(() => {
  const split = new SplitText(".effect-chars", { type: "chars" });

  gsap.from(split.chars, {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.02,
    scrollTrigger: {
      trigger: ".effect-chars",
      start: "top 85%",
    },
  });
})();

/* -----------------------------
   4. Scrub-based Distortion
------------------------------ */
(() => {
  const split = new SplitText(".effect-scrub", {
    type: "chars",
    mask: "chars",
  });

  gsap.fromTo(
    split.chars,
    {
      y: 40,
      rotate: 15,
      opacity: 0.2,
    },
    {
      y: 0,
      rotate: 0,
      opacity: 1,
      stagger: 0.01,
      ease: "none",
      scrollTrigger: {
        trigger: ".effect-scrub",
        start: "top 90%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
})();

/* -----------------------------
   5. Clip Mask Line Wipe
------------------------------ */
(() => {
  const split = new SplitText(".effect-clip", { type: "lines" });

  gsap.set(split.lines, { clipPath: "inset(0 100% 0 0)" });

  gsap.to(split.lines, {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".effect-clip",
      start: "top 80%",
    },
  });
})();
