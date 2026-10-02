"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Send } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", company: "" });
  const { reduceMotion } = usePortfolioMotion();

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sending) return;

    if (formData.company.trim()) {
      setStatus("Thanks — your message was received.");
      return;
    }

    setSending(true);
    setStatus("Sending your message…");

    try {
      const response = await fetch("https://formsubmit.co/ajax/myworldsurya912@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio message: ${formData.subject}`,
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Unable to send message");

      setStatus("Message sent. If this is the first submission, check your inbox once to activate form forwarding.");
      setFormData({ name: "", email: "", subject: "", message: "", company: "" });
    } catch {
      setStatus("The direct form could not send right now. You can still email me at myworldsurya912@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden pb-20 pt-24" aria-label="Contact and connect">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 70 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-3 min-h-[86vh] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6435df] via-[#5523d0] to-[#2f146f] sm:mx-6 sm:rounded-[4rem] lg:mx-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_54%,rgba(99,240,255,0.23),transparent_24%),radial-gradient(circle_at_16%_22%,rgba(255,255,255,0.10),transparent_20%)]" />
        <div className="absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-white/15" />
        <div className="absolute -right-5 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-cyan-200/20" />

        <div className="relative flex min-h-[86vh] flex-col items-center justify-center px-6 py-20 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">/ 07 / final transmission</p>
          <h2 className="mt-6 max-w-6xl text-[15vw] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white sm:text-[11vw] lg:text-[8vw]">
            Ready to
            <span className="block text-cyan-200">build something?</span>
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
            Internships, collaborations, hackathons, product ideas, or a conversation about software and AI.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={"https://github.com/" + portfolioConfig.personal.githubUsername}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#35117d] transition hover:scale-[1.03]"
            >
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/[0.12]"
            >
              <Mail className="h-4 w-4" /> Send a message
            </a>
          </div>
        </div>
      </motion.div>

      <div id="contact-form" className="mx-auto max-w-5xl px-5 pb-10 pt-24 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] theme-accent">direct channel</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.045em] theme-text">Say hello.</h3>
            <a
              href="mailto:myworldsurya912@gmail.com"
              className="mt-4 inline-block text-sm leading-6 theme-muted transition hover:text-[var(--accent)]"
            >
              myworldsurya912@gmail.com
            </a>
            <p className="mt-3 text-xs leading-6 theme-muted">{portfolioConfig.contact.statusNotice}</p>
          </div>

          <form onSubmit={submit} className="grid gap-4 lg:col-span-8 sm:grid-cols-2">
            <input
              required
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              placeholder="Your name"
              className="rounded-2xl border theme-border theme-panel px-4 py-4 text-sm theme-text outline-none transition placeholder:text-[var(--muted)] focus:border-violet-400/40"
            />
            <input
              required
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              placeholder="Your email"
              className="rounded-2xl border theme-border theme-panel px-4 py-4 text-sm theme-text outline-none transition placeholder:text-[var(--muted)] focus:border-violet-400/40"
            />
            <input
              required
              value={formData.subject}
              onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
              placeholder="Subject"
              className="rounded-2xl border theme-border theme-panel px-4 py-4 text-sm theme-text outline-none transition placeholder:text-[var(--muted)] focus:border-violet-400/40 sm:col-span-2"
            />
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              placeholder="Tell me what you would like to build or discuss…"
              className="resize-none rounded-2xl border theme-border theme-panel px-4 py-4 text-sm theme-text outline-none transition placeholder:text-[var(--muted)] focus:border-violet-400/40 sm:col-span-2"
            />

            <input
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              value={formData.company}
              onChange={(event) => setFormData({ ...formData, company: event.target.value })}
              className="absolute -left-[9999px] h-px w-px opacity-0"
              name="company"
            />

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-full theme-accent-bg px-5 py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
            >
              <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send message"}
            </button>

            {status && (
              <div className="rounded-xl border theme-border theme-panel p-4 text-xs theme-muted sm:col-span-2">
                <p>{status}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
