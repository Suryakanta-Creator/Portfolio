"use client";

import { motion } from "framer-motion";
import { usePortfolioMotion } from "@/context/MotionContext";

const chapters = [
  { number: "01", label: "CURRENTLY PURSUING", title: "B.Tech", detail: "DRIEMS University", body: "Learning engineering fundamentals and applying them through full-stack development and AI projects." },
  { number: "02", label: "HIGHER SECONDARY", title: "12th · Science", detail: "KBRC Higher Secondary School", body: "Building a foundation in science, mathematics, and analytical thinking." },
  { number: "03", label: "SECONDARY", title: "10th", detail: "OAV (Odisha Adarsha Vidyalaya), Tangi", body: "The beginning of my learning journey—curiosity, creativity, and problem solving." },
];

export function Journey() {
  const { reduceMotion } = usePortfolioMotion();
  return (
    <section id="journey" className="journey-editorial">
      <div className="journey-heading">
        <span className="eyebrow">02 / STILL IN PROGRESS</span>
        <h2>Always a<br /><em>student.</em></h2>
      </div>
      <div className="journey-chapters">
        {chapters.map((c, index) => (
          <motion.article
            key={c.number}
            initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -55 : 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <motion.span
              className="chapter-number"
              initial={reduceMotion ? false : { scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >{c.number}</motion.span>
            <div>
              <span className="eyebrow">{c.label} / {c.detail}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
