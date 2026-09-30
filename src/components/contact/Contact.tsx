"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/data/portfolio.config";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!portfolioConfig.contact.email) {
      setStatus("Direct email is not configured yet. Please use the GitHub link for now.");
      return;
    }

    const body = [
      `Name: ${formData.name}`,
      `Reply-to: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    const href = `mailto:${portfolioConfig.contact.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email app…");
    window.location.href = href;
  };

  const iconFor = (platform: string) =>
    platform.toLowerCase().includes("github") ? (
      <Github className="h-4 w-4" />
    ) : (
      <Linkedin className="h-4 w-4" />
    );

  return (
    <section id="contact" className="relative overflow-hidden py-24" aria-label="Contact and connect">
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-600/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal-850 px-3 py-1 font-mono text-xs text-cyan-400">
            <span>/ 07 /</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-warmWhite sm:text-4xl">
            {portfolioConfig.contact.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-mutedWhite sm:text-base">
            {portfolioConfig.contact.subheading}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-charcoal-900/80 p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <Mail className="h-4 w-4" />
                DIRECT CONTACT
              </div>

              <p className="mt-4 text-sm text-warmWhite">
                {portfolioConfig.contact.email || portfolioConfig.contact.emailPlaceholder}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-mutedWhite">
                <MapPin className="h-4 w-4 text-cyan-400" />
                {portfolioConfig.contact.location}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-charcoal-900/60 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-warmWhite">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Honest contact status
              </div>
              <p className="mt-2 text-xs leading-relaxed text-mutedWhite">
                {portfolioConfig.contact.statusNotice}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {portfolioConfig.contact.socials.map((social) =>
                social.isConfigured && social.url ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-white/10 bg-charcoal-900/70 p-4 transition hover:border-cyan-400/35"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400">{iconFor(social.platform)}</span>
                      <ArrowUpRight className="h-4 w-4 text-mutedWhite group-hover:text-cyan-400" />
                    </div>
                    <p className="mt-3 text-sm font-bold text-warmWhite">{social.platform}</p>
                    <p className="mt-1 font-mono text-[10px] text-mutedWhite">{social.label}</p>
                  </a>
                ) : null
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="rounded-2xl border border-white/10 bg-charcoal-900/85 p-6 shadow-2xl shadow-black/30 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="font-mono text-xs text-mutedWhite">
                  Your name
                  <input
                    required
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal-950 px-4 py-3 text-sm text-warmWhite outline-none transition focus:border-cyan-400/50"
                    placeholder="Your name"
                  />
                </label>

                <label className="font-mono text-xs text-mutedWhite">
                  Your email
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal-950 px-4 py-3 text-sm text-warmWhite outline-none transition focus:border-cyan-400/50"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-4 block font-mono text-xs text-mutedWhite">
                Subject
                <input
                  required
                  value={formData.subject}
                  onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal-950 px-4 py-3 text-sm text-warmWhite outline-none transition focus:border-cyan-400/50"
                  placeholder="Internship / collaboration / project"
                />
              </label>

              <label className="mt-4 block font-mono text-xs text-mutedWhite">
                Message
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-charcoal-950 px-4 py-3 text-sm text-warmWhite outline-none transition focus:border-cyan-400/50"
                  placeholder="Tell me what you would like to build or discuss…"
                />
              </label>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-aqua-400 px-5 py-3.5 text-sm font-semibold text-charcoal-950 transition hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Open message
              </button>

              {status && (
                <div className="mt-4 rounded-xl border border-cyan-500/25 bg-cyan-500/10 p-3.5 font-mono text-xs text-cyan-200">
                  <p>{status}</p>
                  {!portfolioConfig.contact.email && (
                    <a
                      href={`https://github.com/${portfolioConfig.personal.githubUsername}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-warmWhite hover:text-cyan-300 underline underline-offset-2"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Contact via GitHub (@{portfolioConfig.personal.githubUsername})
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
