import { Reveal } from "./Motion";

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full border border-white/15 font-mono text-xs font-bold text-mid transition hover:-translate-y-1 hover:border-cyan hover:text-cyan"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 text-center">
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.08] blur-[100px]" />
      <Reveal className="page-shell relative">
        <p className="eyebrow">/ LET&apos;S TALK</p>
        <h2 className="mt-6 font-mono text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.08em]">
          Let&apos;s Build Something<br /><span className="text-cyan">Great Together.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-mid">Open to full-time roles, freelance projects, and interesting collaborations.</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:harshits0421@gmail.com" className="rounded-md bg-cyan px-5 py-3.5 font-mono text-[10px] font-bold text-base shadow-cyan transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,229,255,.32)]">harshits0421@gmail.com</a>
          <SocialIcon label="GitHub" href="https://github.com/harshitt2023/">GH</SocialIcon>
          <SocialIcon label="LinkedIn" href="https://www.linkedin.com/in/harshit2821/">in</SocialIcon>
        </div>
      </Reveal>
    </section>
  );
}
