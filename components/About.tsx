import { Reveal, SectionHeading } from "./Motion";

const stats = [
  ["2+", "Internships"],
  ["2+", "Projects"],
  ["4+", "Certifications"],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page-shell">
        <SectionHeading number="01" label="About Me" title="Who I Am" subtitle="The short version, the kind that fits in a cover letter" />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-[15px] leading-[1.9] text-mid">
              <span className="font-medium text-primary">Software engineer</span> with hands-on experience in full-stack development and AI/ML systems. I&apos;ve shipped production-grade web applications and contributed to <span className="font-medium text-primary">LLM post-training workflows</span> at AI startups.
              <br /><br />
              I thrive at the intersection of intelligent systems and clean, scalable engineering, building products that are fast, smart, and a joy to use. Currently focused on <span className="font-medium text-primary">Generative AI, RLHF, and modern web development.</span>
            </p>
            <div className="mt-9 grid grid-cols-3 gap-3">
              {stats.map(([number, label]) => (
                <div key={label} className="panel rounded-xl p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
                  <p className="font-mono text-xl font-bold text-cyan">{number}</p>
                  <p className="mt-2 text-[10px] text-mid sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-cyan/10 bg-[#080f16] shadow-cyan">
              <div className="flex items-center gap-2 border-b border-white/5 bg-card px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-auto font-mono text-[9px] text-mid">harshit.config.ts</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[11px] leading-8 text-mid sm:p-8">
                <code><span className="text-muted">// engineer profile</span>{"\n"}<span className="text-violet">const</span> <span className="text-cyan">me</span> = {"{"}{"\n"}  name: <span className="text-[#a8d7a0]">&quot;Harshit Singh&quot;</span>,{"\n"}  role: <span className="text-[#a8d7a0]">&quot;LLM + Full-Stack&quot;</span>,{"\n"}  location: <span className="text-[#a8d7a0]">&quot;India&quot;</span>,{"\n"}  stack: [<span className="text-[#a8d7a0]">&quot;Next.js&quot;</span>, <span className="text-[#a8d7a0]">&quot;Python&quot;</span>],{"\n"}  ai: [<span className="text-[#a8d7a0]">&quot;RLHF&quot;</span>, <span className="text-[#a8d7a0]">&quot;SFT&quot;</span>, <span className="text-[#a8d7a0]">&quot;GenAI&quot;</span>],{"\n"}  openTo: [<span className="text-[#a8d7a0]">&quot;full-time&quot;</span>, <span className="text-[#a8d7a0]">&quot;freelance&quot;</span>],{"\n"}  available: <span className="text-violet">true</span>{"\n"}{"}"}{"\n"}<span className="text-muted">// ↑ hire this person</span></code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
