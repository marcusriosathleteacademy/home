import Card from "@/components/ui/Card";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { programStats } from "@/lib/content";

export default function ProgramSection() {
  return (
    <section id="program" className="section section--raised">
      <div
        className="split-grid"
        style={{
          gridTemplateColumns: "minmax(240px,0.8fr) minmax(320px,1.2fr)",
          gap: 40,
          marginBottom: 40,
        }}
      >
        <PhotoSlot
          src="/program-overview.jpg"
          alt="Student-athletes training with dumbbells"
          placeholder="Drop a photo: program overview"
          height="clamp(200px, 30vw, 280px)"
        />
        <div>
          <div className="eyebrow">About</div>
          <h2 className="section-title">Program</h2>
          <p style={{ font: "var(--text-body-md)", color: "var(--text-secondary)", fontSize: 15, fontWeight: 300 }}>
            Marcus Rios Athlete Academy&apos;s Homeschool &amp; Reclass Program was built for
            serious student-athletes who are homeschooled or reclassed, and need more than a
            normal school day can give them. It combines focused training, academic support, and
            real off-the-field development to make it to the next level.{" "}
            <em>All sports. Grades 6–12. Sacramento, CA.</em>
          </p>
        </div>
      </div>
      <div className="stat-grid">
        {programStats.map((s) => (
          <Card key={s.label} padding={20}>
            <div style={{ font: "var(--text-stat-lg)", color: s.color, marginBottom: 8 }}>{s.value}</div>
            <div
              style={{
                font: "var(--text-label)",
                letterSpacing: "var(--tracking-wide)",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: 6,
              }}
            >
              {s.label}
            </div>
            <div style={{ font: "var(--text-caption)", color: "var(--text-muted)" }}>{s.desc}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
