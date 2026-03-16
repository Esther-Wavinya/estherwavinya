import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Administrator, Registrar Academics",
    company: "KAG EAST University",
    period: "February 2026 – Present",
    tags: ["Administration", "Academic Records", "Registrar", "Higher Education"],
    bullets: [
      "KAG EAST University is an educational institution in Kenya offering higher education programs.",
      "Overseeing academic records management, student registration, and compliance with institutional policies.",
      "Coordinating with faculty and departments to ensure smooth academic operations and reporting.",
    ],
  },
  {
    title: "Administrative Assistant, School of Bible and Theology",
    company: "KAG EAST University",
    period: "April 2025 – January 2026",
    tags: ["Administration", "Academic Affairs", "Office Management", "Higher Education"],
    bullets: [
      "Managed administrative tasks for the School of Bible and Theology including student records and correspondence.",
      "Coordinated office operations, scheduling, and supported faculty across the department.",
      "Facilitated communication between students, faculty, and university administration.",
    ],
  },
  {
    title: "Technical Writer",
    company: "UgTechMag",
    period: "April 2022 – February 2023",
    tags: ["Technical Writing", "WordPress", "SEO", "Google Analytics"],
    bullets: [
      "UgTechMag is a technology consumer website in Uganda providing reliable information about tech products and services.",
      "Wrote how-to guide articles for Kenyan market consumption. Ensured Search Engine Optimization for articles.",
      "Received an average of 200 reads daily, increasing the magazine's subscribers and revenue by 10%.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Sibasi Ltd",
    period: "August 2021 – February 2022",
    tags: ["HTML5", "CSS", "JavaScript", "Angular", "SQL", "Power BI", "Azure"],
    bullets: [
      "Sibasi is a Gold Microsoft partner company that provides ICT services and solutions.",
      "Developed fullstack web, mobile, and desktop applications using JavaScript, Angular, Flutter, and Azure.",
      "Cleaned & analysed data using SQL. Visualized data using PowerBI, increasing clients by 30%.",
    ],
  },
  {
    title: "Geologist Attachee",
    company: "Ministry of Petroleum and Mining",
    period: "April 2019 – August 2019",
    tags: ["GIS", "Hydrogeology", "Mining Exploration"],
    bullets: [
      "Initial sample preparation: coding, drying, crushing and weighing.",
      "Petrographic specimen preparation for microscopic analysis.",
      "Qualitative analysis of solid samples using XRF.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="bg-card" aria-labelledby="experience-heading">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="experience-heading" className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-12 max-w-3xl">
          {experiences.map((exp, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" aria-hidden="true" />
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm font-medium">{exp.company}</p>
              <p className="text-primary text-sm mb-3">{exp.period}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm" role="list">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
