import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-container" aria-labelledby="contact-heading">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto"
    >
      <h2 id="contact-heading" className="section-title text-center">
        Get in <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Interested in collaborating or have a question? Feel free to reach out!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/Esther-Wavinya"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="GitHub profile"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/estherwavinya"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:estherwavinya@gmail.com"
          className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Send email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
