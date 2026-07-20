import PhotoSlot from "@/components/ui/PhotoSlot";
import { facilities } from "@/lib/content";

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="section">
      <div className="eyebrow">Facilities</div>
      <h2 className="section-title" style={{ marginBottom: 12 }}>
        Where the Work Gets Done
      </h2>
      <p style={{ font: "var(--text-body-md)", color: "var(--text-secondary)", maxWidth: 640, marginBottom: 32 }}>
        Turf, iron, and quiet study space — everything an athlete needs in one building.
      </p>
      <div className="facility-grid">
        {facilities.map((fac) => (
          <div key={fac.id}>
            <PhotoSlot
              src={fac.src}
              alt={fac.label}
              placeholder={fac.placeholder}
              className="facility-photo"
              sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
              style={{ marginBottom: 10 }}
            />
            <div
              style={{
                font: "var(--text-label)",
                letterSpacing: "var(--tracking-wide)",
                textTransform: "uppercase",
                color: "var(--text-primary)",
              }}
            >
              {fac.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
