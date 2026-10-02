import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/portfolio.config";
export function Contact() {
  return (
    <section id="contact" className="contact-editorial">
      <span className="eyebrow">06 / THE NEXT GOOD IDEA STARTS WITH A CONVERSATION</span>
      <h2>Let’s make<br /><em>something matter.</em></h2>
      <div className="contact-layout">
        <div className="contact-intro"><p>Have an idea, an opportunity, or just a hello?<br />I’d love to hear from you.</p><a href={`mailto:${socialLinks.email}`}>{socialLinks.email} <ArrowUpRight size={18} /></a><p className="contact-note">Prefer your own email app? Use the address above.</p></div>
        <form className="contact-form" action={`https://formsubmit.co/${socialLinks.email}`} method="POST">
          <input type="hidden" name="_subject" value="New message from Suryakanta’s portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="contact-honeypot" aria-hidden="true" />
          <label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="What should I call you?" /></label>
          <label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
          <label htmlFor="contact-message">Your message<textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={4} placeholder="Tell me a little about it…" /></label>
          <button type="submit">Send message <ArrowUpRight size={19} /></button>
          <p className="contact-note">Continue to secure verification to send your message.</p>
        </form>
      </div>
    </section>
  );
}
