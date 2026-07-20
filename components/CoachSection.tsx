import Badge from "@/components/ui/Badge";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { coachFacts } from "@/lib/content";

export default function CoachSection() {
  return (
    <section id="coach" className="section">
      <div className="eyebrow">Coach</div>
      <h2 className="section-title" style={{ marginBottom: 32 }}>
        Elite Athlete Coaching by <span style={{ color: "var(--neon-1)" }}>Marcus Rios</span>
      </h2>
      <div
        className="split-grid"
        style={{ gridTemplateColumns: "minmax(280px,0.8fr) minmax(360px,1.2fr)", gap: 40 }}
      >
        <PhotoSlot
          src="/coach-headshot.png"
          alt="Coach Marcus Rios"
          placeholder="Drop a photo: Coach Marcus Rios"
          height="clamp(260px, 38vw, 380px)"
          fit="contain"
        />
        <div>
          <Badge tone="neon">Head Coach &amp; Founder</Badge>
          <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {coachFacts.map((f) => (
              <li
                key={f.text}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  font: "var(--text-body-md)",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--neon-1)",
                    marginTop: 9,
                    flexShrink: 0,
                  }}
                />
                <span>
                  {f.text}
                  {f.links && (
                    <>
                      {" — "}
                      {f.links.map((l, i) => (
                        <span key={l.href}>
                          {i > 0 && " | "}
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent-blue)" }}
                          >
                            {l.label}
                          </a>
                        </span>
                      ))}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
