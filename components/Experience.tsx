import { Reveal, SectionHeading } from "./Motion";

const roles = [
  {
    company: "Ethara.AI",
    date: "Feb – May 2026",
    role: "LLM Post-Training Intern",
    description: "Worked on RLHF, SFT, and prompt evaluation workflows to improve LLM quality. Reviewed datasets, validated model outputs, and contributed to fine-tuning pipelines for production AI systems.",
    tags: ["RLHF", "SFT", "Prompt Engineering", "LLM Evaluation", "Data Annotation"],
    color: "cyan",
  },
  {
    company: "ScholarRank AI",
    date: "May – Aug 2025",
    role: "AIML Intern",
    description: "Built end-to-end ML workflows with Python and Scikit-learn for an AI-powered educational ranking platform. Performed EDA, feature engineering, and model optimization on real-world datasets.",
    tags: ["Python", "Scikit-learn", "Feature Engineering", "EDA", "ML Pipelines"],
    color: "violet",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-surface/40">
      <div className="page-shell">
        <SectionHeading number="02" label="Experience" title="Where I've Worked" subtitle="Two AI startups. Real pipelines. Real impact." />
        <div className="relative mt-14 space-y-6 pl-8 before:absolute before:bottom-0 before:left-[7px] before:top-0 before:w-px before:bg-gradient-to-b before:from-cyan before:via-violet before:to-transparent md:pl-12">
          {roles.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.1}>
              <article className={`group panel relative rounded-xl border-l-2 p-6 transition duration-300 hover:translate-x-[5px] hover:border-violet/70 md:p-8 ${job.color === "cyan" ? "border-l-cyan" : "border-l-violet"}`}>
                <span className={`absolute left-[-43px] top-9 h-3.5 w-3.5 rounded-full border-2 border-base shadow-[0_0_16px_currentColor] md:left-[-55px] ${job.color === "cyan" ? "bg-cyan text-cyan" : "bg-violet text-violet"}`} />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-base font-bold text-primary">{job.company}</h3>
                    <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-wider text-violet">{job.role}</p>
                  </div>
                  <span className="rounded-full border border-cyan/20 px-3 py-1.5 font-mono text-[9px] font-bold text-cyan">{job.date}</span>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-mid">{job.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{job.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
