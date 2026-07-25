import { Reveal, SectionHeading } from "./Motion";

const projects = [
  {
    initials: "RQ",
    name: "RecallIQ",
    description: "AI-powered study tool that converts PDFs into auto-generated summaries, flashcards, and quizzes — with topic-tagged weak-area detection powered by Groq/Llama.",
    stack: ["FastAPI", "Groq AI", "SQLite", "JavaScript"],
    accent: "lime",
    href: "https://recalliq-dzuu.onrender.com/",
  },
  {
    initials: "MN",
    name: "MediNow",
    description: "Full-stack telemedicine platform with appointment booking, doctor management, and secure real-time video consultations via Vonage API.",
    stack: ["Next.js", "PostgreSQL", "Vonage API", "Tailwind"],
    accent: "violet",
    href: "https://medinow-harshit.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page-shell">
        <SectionHeading number="03" label="Projects" title="Things I've Built" subtitle="Production-grade. Not tutorial projects." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.1}>
              <article className="group panel overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan/35 hover:shadow-cyan">
                <div className="fine-grid relative grid aspect-[16/9] place-items-center overflow-hidden bg-[#060b12]">
                  {/* Replace with <Image src="/projects/project-name.png" ... /> when the screenshot is ready. */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,111,255,.12),transparent_50%)]" />
                  <div className="relative text-center">
                    <div className={`mx-auto grid h-14 w-14 place-items-center rounded-xl border bg-base/60 font-mono text-sm font-bold ${project.accent === "cyan" ? "border-cyan/60 text-cyan" : "border-violet/60 text-violet"}`}>{project.initials}</div>
                    <p className="mt-4 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-muted">Project Screenshot</p>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <h3 className="font-mono text-xl font-bold tracking-[-0.05em]">{project.name}</h3>
                    <span className="flex items-center gap-1.5 rounded-full border border-green/20 bg-green/[0.04] px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-wider text-green"><span className="h-1.5 w-1.5 rounded-full bg-green" /> Live</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-mid">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <a href={project.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-md border border-violet/50 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-violet transition hover:bg-violet hover:text-base">Live Demo <span className="ml-2">→</span></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
