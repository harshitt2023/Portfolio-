import { Reveal, SectionHeading } from "./Motion";

const certifications = [
  ["PY", "Data Visualization with Python", "Coursera"],
  ["IS", "Introduction to Python", "Infosys Springboard"],
  ["AI", "Artificial Intelligence", "Infosys Springboard"],
  ["ML", "Introduction to AI & ML", "Infosys Springboard"],
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="page-shell">
        <SectionHeading number="05" label="Certifications" title="Credentials" subtitle="Verified learning, documented." />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {certifications.map(([icon, name, org], index) => (
            <Reveal key={name} delay={index * 0.06}>
              <article className="panel flex items-center gap-4 rounded-xl p-5 transition duration-300 hover:translate-x-[3px] hover:border-violet/40 hover:shadow-violet">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-violet/50 bg-violet/[0.04] font-mono text-xs font-bold text-violet">{icon}</div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-primary sm:text-sm">{name}</h3>
                  <p className="mt-2 text-[11px] text-mid">{org}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
