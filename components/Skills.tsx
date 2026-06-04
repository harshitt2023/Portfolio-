import { Reveal, SectionHeading } from "./Motion";

const groups = [
  { name: "AI / ML", color: "bg-violet", skills: ["Python", "Scikit-learn", "RLHF", "SFT", "Prompt Engineering", "LLM Evaluation", "Gemini AI", "NumPy", "Pandas"] },
  { name: "Web Dev", color: "bg-cyan", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Auth Systems"] },
  { name: "Data", color: "bg-[#4ec9b0]", skills: ["PostgreSQL", "MySQL", "SQL", "Neon DB"] },
  { name: "Tools & Deployment", color: "bg-[#f0a07a]", skills: ["Git", "GitHub", "VS Code", "Jupyter", "Vercel", "GitHub Pages"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-surface/40">
      <div className="page-shell">
        <SectionHeading number="04" label="Skills" title="What I Work With" subtitle="Tools I reach for without thinking" />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.06}>
              <article className="panel h-full rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-cyan">
                <h3 className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider"><span className={`h-2 w-2 rounded-full ${group.color}`} />{group.name}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
