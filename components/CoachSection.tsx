import Badge from "@/components/ui/Badge";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { coachBio } from "@/lib/content";

const HANDLE = "@marcusriosofficial";

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
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 20 }}>
            {coachBio.map((paragraph, i) => {
              const parts = paragraph.split(HANDLE);
              return (
                <p key={i} style={{ font: "var(--text-body-md)", color: "var(--text-secondary)", margin: 0 }}>
                  {parts.length === 2 ? (
                    <>
                      {parts[0]}
                      <a
                        href="https://www.instagram.com/marcusriosofficial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent-blue)" }}
                      >
                        {HANDLE}
                      </a>
                      {parts[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
