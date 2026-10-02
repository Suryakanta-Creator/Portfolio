const chapters = [
  { number: "01", label: "CURRENTLY PURSUING", title: "B.Tech", detail: "DRIEMS University", body: "Learning engineering fundamentals and applying them through full-stack development and AI projects." },
  { number: "02", label: "HIGHER SECONDARY", title: "12th · Science", detail: "KBRC Higher Secondary School", body: "Building a foundation in science, mathematics, and analytical thinking." },
  { number: "03", label: "SECONDARY", title: "10th", detail: "OAV (Odisha Adarsha Vidyalaya), Tangi", body: "The beginning of my learning journey—curiosity, creativity, and problem solving." },
];
export function Journey() {
  return (
    <section id="journey" className="journey-editorial">
      <div className="journey-heading">
        <span className="eyebrow">02 / STILL IN PROGRESS</span>
        <h2>
          Always a<br />
          <em>student.</em>
        </h2>
      </div>
      <div className="journey-chapters">
        {chapters.map((c) => (
          <article key={c.number}>
            <span className="chapter-number">{c.number}</span>
            <div>
              <span className="eyebrow">
                {c.label} / {c.detail}
              </span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
