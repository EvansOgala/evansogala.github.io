import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Projects</h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {projects.map((p, i) => (
          <div key={i} style={{ padding: "20px", border: "1px solid #333", borderRadius: "12px" }}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <small>{p.stack.join(" • ")}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
