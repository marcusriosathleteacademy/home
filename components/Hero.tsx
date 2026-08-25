import Image from "next/image";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Hero() {
  return (
    <section
      className="split-grid hero-section"
      style={{
        padding: "clamp(40px, 8vw, 72px) var(--page-gutter) 64px",
        gridTemplateColumns: "minmax(360px,1.1fr) minmax(320px,0.9fr)",
        gap: 48,
      }}
    >
      <div>
        <h1 className="visually-hidden">
          Marcus Rios Athlete Academy — Homeschool &amp; Reclass Program for Student-Athletes, Sacramento CA
        </h1>
        <Image
          src="/logo-cropped.png"
          alt="Marcus Rios Athlete Academy logo"
          width={480}
          height={147}
          priority
          style={{ width: "100%", maxWidth: 480, height: "auto", display: "block", marginBottom: 20 }}
        />
        <div
          style={{
            font: "var(--text-label)",
            fontSize: "1.15rem",
            letterSpacing: "var(--tracking-widest)",
            textTransform: "uppercase",
            color: "var(--accent-blue)",
            marginBottom: 20,
            lineHeight: 1.5,
          }}
        >
          Homeschool &amp; Reclass Program 2026–27 Year
        </div>
        <p
          style={{
            font: "var(--text-body-lg)",
            fontWeight: 200,
            color: "var(--text-secondary)",
            maxWidth: 520,
            marginBottom: 32,
          }}
        >
          A 6-hour daily program for 6th–12th grade student-athletes in Sacramento, built around
          training, academic support, and the off-the-field skills that get you recruited.
        </p>
        <a href="#apply" className="site-header__cta" style={{ padding: "16px 28px" }}>
          Apply Now
        </a>
      </div>
      <PhotoSlot
        src="/hero-team.jpg"
        alt="Marcus Rios Athlete Academy team at the training facility"
        placeholder="Drop a photo: athlete training on turf"
        height="clamp(260px, 40vw, 440px)"
        sizes="(max-width: 860px) 100vw, 45vw"
        priority
      />
    </section>
  );
}
