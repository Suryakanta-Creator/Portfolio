"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/data/portfolio.config";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Info,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.contact.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "twitter / x":
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact and Connect">
      {/* Background ambient lighting */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-850 border border-white/10 text-xs font-mono text-cyan-400">
            <span>/ 05 /</span>
            <span>CONNECT &amp; INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-warmWhite tracking-tight">
            {portfolioConfig.contact.heading}
          </h2>
          <p className="text-mutedWhite text-sm sm:text-base max-w-xl">
            {portfolioConfig.contact.subheading}
          </p>
        </div>

        {/* 2-Column Grid: Contact Info & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Config Notice */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-2xl bg-charcoal-900/90 border border-white/10 space-y-4 shadow-xl shadow-black/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT INBOX</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-800 text-mutedWhite border border-white/5">
                  {portfolioConfig.contact.isEmailVerified ? "Verified" : "Config Pending"}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-charcoal-950 border border-white/10 flex items-center justify-between gap-2 font-mono text-xs text-warmWhite">
                <span className="truncate">{portfolioConfig.contact.emailPlaceholder}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-cyan-400 hover:text-white transition-all flex items-center gap-1 shrink-0"
                  aria-label="Copy Email to Clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-sans font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-sans">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Tag */}
              <div className="flex items-center gap-2 text-xs font-mono text-mutedWhite pt-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{portfolioConfig.contact.location}</span>
              </div>
            </div>

            {/* Config Notice Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-charcoal-900/60 border border-cyan-500/20 text-xs font-mono text-mutedWhite space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Info className="w-4 h-4 text-cyan-400" />
                <span>Configuration Note</span>
              </div>
              <p className="leading-relaxed text-mutedWhite">
                {portfolioConfig.contact.statusNotice}
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-mutedWhite block">
                Social Profiles &amp; Networks:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {portfolioConfig.contact.socials.map((social) => (
                  <div
                    key={social.platform}
                    className="p-3.5 rounded-xl bg-charcoal-900/80 border border-white/10 flex flex-col justify-between space-y-2 group hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-1.5 rounded-lg bg-charcoal-800 text-cyan-400">
                        {getSocialIcon(social.platform)}
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-charcoal-800 text-mutedWhite">
                        {social.isConfigured ? "Live" : "Setup"}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-warmWhite block">
                        {social.platform}
                      </span>
                      <span className="text-[10px] text-mutedWhite">
                        {social.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900/90 border border-white/10 shadow-2xl shadow-black/40 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                  <MessageSquare className="w-4 h-4" />
                  <span>SEND DIRECT MESSAGE</span>
                </div>
                <span className="text-[11px] font-mono text-mutedWhite">Response in ~24h</span>
              </div>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-warmWhite">Message Sent Successfully!</h3>
                  <p className="text-sm text-neutral-300 max-w-sm">
                    Thank you for reaching out. I will review your inquiry and get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-charcoal-800 text-xs font-mono text-cyan-400 hover:text-cyan-300 border border-white/10 hover:border-white/20 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-mutedWhite block">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-xs text-warmWhite placeholder:text-mutedWhite/50 focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:border-transparent transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-mutedWhite block">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-xs text-warmWhite placeholder:text-mutedWhite/50 focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:border-transparent transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-mutedWhite block">
                      Subject / Topic *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Collaboration inquiry / Project feedback"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-xs text-warmWhite placeholder:text-mutedWhite/50 focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:border-transparent transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-mutedWhite block">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Surya, I'd love to chat about your AgriTech prototype or discuss a new project..."
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-xs text-warmWhite placeholder:text-mutedWhite/50 focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:border-transparent transition-all font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-aqua-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-aqua-400"
                  >
                    {isSending ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiries &amp; Connect</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
