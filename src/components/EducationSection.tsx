import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Arts in Leadership and Applied Ministries (Christian Education)",
    school: "KAG EAST University",
    period: "Sept 2025 – Present",
  },
  {
    degree: "Bachelor of Arts in Biblical Studies",
    school: "KAG EAST University",
    period: "Jan 2025 – Aug 2025",
  },
  {
    degree: "BSc. Geological & Earth Sciences",
    school: "University of Nairobi, Kenya",
    period: "Nov 2017 – Sept 2021",
    note: "Graduated with Second Class Honors Upper Division.",
  },
  {
    degree: "Kenya Certificate of Secondary Education (K.C.S.E.)",
    school: "St Teresa Mbooni Girls High School",
    period: "Jan 2013 – Dec 2016",
  },
];

const EducationSection = () => (
  <section id="education" className="section-container" aria-labelledby="education-heading">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 id="education-heading" className="section-title">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="space-y-8 max-w-3xl">
        {education.map((ed, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{ed.degree}</h3>
              <p className="text-muted-foreground text-sm">{ed.school}</p>
              <p className="text-primary text-sm font-medium mt-1">{ed.period}</p>
              {ed.note && <p className="text-muted-foreground text-sm mt-2">{ed.note}</p>}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
);

export default EducationSection;
