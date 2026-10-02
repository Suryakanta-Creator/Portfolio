const groups = [
  { name: "Languages", items: "Java / TypeScript / JavaScript / SQL" },
  { name: "Interfaces", items: "React / Next.js / HTML / CSS / Tailwind" },
  { name: "Data & tools", items: "Supabase / Git / GitHub / REST APIs" },
  {
    name: "Exploring",
    items: "AI integrations / Motion / Accessible interfaces",
  },
];
export function Skills() {
  return (
    <section id="skills" className="skills-editorial">
      <span className="eyebrow">04 / MY TOOLBOX</span>
      <h2>
        The tools change.
        <br />
        The <em>curiosity</em> stays.
      </h2>
      <div>
        {groups.map((g, i) => (
          <article key={g.name}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{g.name}</h3>
            <p>{g.items}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
