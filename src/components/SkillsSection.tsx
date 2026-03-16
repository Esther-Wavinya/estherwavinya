import { motion } from "framer-motion";

const skills = [
  "Office 365", "Google Workspace", "HTML5", "CSS3", "JavaScript",
  "TypeScript", "Angular", "Ruby on Rails", "Node.js", "MongoDB",
  "MySQL", "Git", "SEO", "Technical Writing",
];

const SkillsSection = () => (
  <section id="skills" className="bg-card" aria-labelledby="skills-heading">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="skills-heading" className="section-title">
          Skills & <span className="gradient-text">Tools</span>
        </h2>
        <div className="flex flex-wrap gap-3" role="list" aria-label="Technical skills">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              role="listitem"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
