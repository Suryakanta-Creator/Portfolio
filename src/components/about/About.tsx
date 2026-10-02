import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
export function About() {
  return (
    <section id="about" className="about-editorial">
      <div className="about-portrait"><Image src="/portrait.png" alt="Portrait of Suryakanta Bala" fill sizes="(max-width: 700px) 88vw, 40vw" /><span className="eyebrow">01 / THE PERSON BEHIND THE PIXELS</span></div>
      <div className="about-copy">
        <span className="eyebrow">HELLO, I’M SURYA</span>
        <h2>
          Curiosity is
          <br />
          my <em>starting point.</em>
        </h2>
        <p>
          I’m Suryakanta Bala, a B.Tech student at DRIEMS University in Odisha.
          I learn by building—bringing together web development, thoughtful
          interfaces, and practical AI.
        </p>
        <p>
          From helping farmers understand crop health to making study materials
          easier to explore, I’m interested in software that makes everyday
          tasks a little easier.
        </p>
        <a href="#journey">
          A little about my journey <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
