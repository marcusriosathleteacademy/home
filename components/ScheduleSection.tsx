import Badge from "@/components/ui/Badge";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { scheduleBlocks } from "@/lib/content";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="section section--raised">
      <div
        className="split-grid"
        style={{ gridTemplateColumns: "minmax(240px,0.7fr) minmax(360px,1.3fr)", gap: 48, alignItems: "start" }}
      >
        <div>
          <div className="eyebrow">The Day</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Daily Schedule
          </h2>
          <div style={{ font: "var(--text-caption)", color: "var(--text-muted)", marginBottom: 12 }}>
            Monday–Thursday, 8:00 AM – 2:00 PM.
          </div>
          <p style={{ font: "var(--text-body-md)", color: "var(--text-secondary)", marginBottom: 20 }}>
            Students may attend 1–4 days per week, depending on their goals and family schedule.
            Homeschool and charter school students may participate on approved school days in
            accordance with their school&apos;s funding guidelines.
          </p>
          <PhotoSlot
            src="/facilities-wide.jpg"
            alt="Wide shot of the training facility"
            placeholder="Drop a photo: wide shot of the facility"
            height="clamp(160px, 25vw, 220px)"
            sizes="(max-width: 860px) 100vw, 30vw"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}
        >
          {scheduleBlocks.map((b) => (
            <div
              key={b.t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "18px 20px",
                background: "var(--black-0)",
                borderBottom: "1px solid var(--border-default)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ width: "clamp(120px, 40vw, 190px)", font: "var(--text-stat-sm)", color: "var(--text-primary)" }}>{b.t}</div>
              <div style={{ flex: 1, font: "var(--text-body-md)", color: "var(--text-primary)" }}>{b.name}</div>
              <span className="schedule-duration">
                <Badge tone={b.tone}>{b.dur}</Badge>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
