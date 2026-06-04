import { Reveal, SectionHeading } from "./Motion";

export default function Education() {
  return (
    <section id="education" className="section bg-surface/40">
      <div className="page-shell">
        <SectionHeading number="06" label="Education" title="Background" subtitle="Where the foundation was built." />
        <Reveal className="mt-14">
          <article className="panel flex flex-col justify-between gap-7 rounded-xl border-l-[3px] border-l-violet p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h3 className="font-mono text-base font-bold tracking-[-0.04em] text-primary sm:text-lg">B.Tech CSE — AI & ML Specialization</h3>
              <p className="mt-3 text-sm text-mid">Noida Institute of Engineering & Technology, Greater Noida</p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="font-mono text-xs font-bold text-violet">2022 – 2026</p>
              <p className="mt-2 text-xs text-mid">CGPA: 7.15 / 10.0</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
