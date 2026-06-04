"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["LLM Engineer", "AI Builder", "Generative AI Dev", "Full-Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const done = text === role;
    const empty = text === "";
    const timeout = window.setTimeout(
      () => {
        if (done && !deleting) return setDeleting(true);
        if (empty && deleting) {
          setDeleting(false);
          setRoleIndex((value) => (value + 1) % roles.length);
          return;
        }
        setText(role.slice(0, text.length + (deleting ? -1 : 1)));
      },
      done && !deleting ? 1500 : deleting ? 40 : 75,
    );
    return () => window.clearTimeout(timeout);
  }, [deleting, roleIndex, text]);

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="top" className="grid-mesh relative min-h-screen overflow-hidden pt-[72px]">
      <div className="absolute right-[-10%] top-[10%] h-[680px] w-[680px] rounded-full bg-violet/[0.08] blur-[130px]" />
      <div className="page-shell relative grid min-h-[calc(100vh-72px)] items-center gap-16 py-16 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="relative z-10">
          <motion.div variants={item} className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.04] px-3 py-2 font-mono text-[9px] font-bold tracking-[0.14em] text-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>
          <motion.h1 variants={item} className="font-mono text-[clamp(2.8rem,8vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.085em]">
            Hi, I&apos;m<br />
            <span className="text-cyan">Harshit Singh</span>
          </motion.h1>
          <motion.div variants={item} className="mt-7 flex min-h-7 items-center gap-3 font-mono text-sm font-bold sm:text-base">
            <span className="text-mid">~/</span>
            <span className="text-violet">{text}</span>
            <span className="h-5 w-[2px] animate-pulse bg-violet" />
          </motion.div>
          <motion.p variants={item} className="mt-7 max-w-xl text-sm leading-7 text-mid sm:text-[15px]">
            Building intelligent, scalable software, from production web apps to LLM post-training pipelines. I ship things that actually work.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-cyan px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-base shadow-cyan transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,229,255,.32)]">
              View Projects <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="rounded-md border border-white/15 px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-primary transition hover:-translate-y-1 hover:border-violet hover:text-violet">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px] px-3 pb-5"
        >
          <div className="absolute inset-x-10 bottom-0 h-8 rounded-[50%] bg-black/80 blur-xl" />
          <div className="relative rounded-[26px] border border-white/15 bg-gradient-to-br from-[#25313b] via-[#101820] to-[#030609] p-[7px] shadow-[0_34px_65px_rgba(0,0,0,.62),inset_0_1px_1px_rgba(255,255,255,.2),0_0_40px_rgba(0,229,255,.08)]">
            <span className="absolute left-3 top-3 z-30 h-1.5 w-1.5 rounded-full border border-white/20 bg-[#030609] shadow-[inset_0_1px_1px_rgba(255,255,255,.18)]" />
            <span className="absolute right-3 top-3 z-30 h-1.5 w-1.5 rounded-full border border-white/20 bg-[#030609] shadow-[inset_0_1px_1px_rgba(255,255,255,.18)]" />
            <span className="absolute bottom-3 left-3 z-30 h-1.5 w-1.5 rounded-full border border-white/20 bg-[#030609] shadow-[inset_0_1px_1px_rgba(255,255,255,.18)]" />
            <span className="absolute bottom-3 right-3 z-30 h-1.5 w-1.5 rounded-full border border-white/20 bg-[#030609] shadow-[inset_0_1px_1px_rgba(255,255,255,.18)]" />

            <div className="relative rounded-[20px] border border-black/80 bg-[#05080c] p-3 shadow-[inset_0_0_25px_rgba(0,0,0,.9),inset_0_1px_0_rgba(255,255,255,.08)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[13px] border border-white/[0.07] bg-[#020407] shadow-[inset_0_0_40px_rgba(0,0,0,.8)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(0,229,255,.13),transparent_48%)]" />
                <div className="absolute inset-x-[8%] top-0 h-1/2 rounded-full bg-violet/[0.07] blur-[60px]" />
                <Image
                  src="/photo.png"
                  alt="Harshit Singh"
                  fill
                  priority
                  sizes="(max-width: 1024px) 420px, 36vw"
                  className="object-cover object-top brightness-[.96] contrast-[1.06] saturate-[.92]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/[0.025]" />
                <div className="pointer-events-none absolute -left-20 top-[-18%] h-[145%] w-20 rotate-[20deg] bg-white/[0.035] blur-md" />
                <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/[0.08] bg-gradient-to-t from-[#020407] via-[#020407]/95 to-[#020407]/55 px-5 pb-5 pt-9">
                  <p className="font-mono text-base font-bold tracking-[-0.05em] text-primary">Harshit Singh</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="font-mono text-[8px] font-bold uppercase tracking-[0.17em] text-cyan">LLM + Full-Stack Engineer</p>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green shadow-[0_0_8px_#00ff88]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-7 left-0 hidden items-center gap-3 lg:flex">
          <span className="h-12 w-px origin-top animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-b from-cyan to-transparent" />
          <span className="font-mono text-[8px] font-bold tracking-[0.22em] text-muted [writing-mode:vertical-rl]">SCROLL</span>
        </div>
      </div>
    </section>
  );
}
