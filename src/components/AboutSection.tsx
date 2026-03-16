import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-container" aria-labelledby="about-heading">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 id="about-heading" className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Esther Wavinya is a Software Engineer who is passionate about programming,
          technical writing and building developer communities. With a background in
          Geological & Earth Sciences from the University of Nairobi, she brings a unique
          analytical perspective to software development.
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
