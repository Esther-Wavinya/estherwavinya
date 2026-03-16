import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    aria-label="Introduction"
  >
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>
    <div className="relative z-10 section-container text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
      >
        Hello, I'm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold font-display leading-tight mb-6"
      >
        Esther <span className="gradient-text">Wavinya</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8"
      >
        Geologist · Software Engineer · Technical Writer
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <a
          href="#experience"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          View Experience
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
