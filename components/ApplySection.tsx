"use client";

// Inquiries go through the Notion inquiry form (embedded below).
// Responses land in the "Contacts" database in Adriene's Space and are
// watched via the Notion API.

const FORM_EMBED_URL =
  "https://light-action-638.notion.site/ebd//71fe78854b6d4860af1a3ce1b49eb7a8";

export default function ApplySection() {
  return (
    <section id="apply" className="section section--raised">
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Apply
        </div>
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: 8, transformOrigin: "center" }}
        >
          Apply to Join the Academy
        </h2>
        <p
          style={{
            font: "var(--text-body-md)",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Apply now to reserve your athlete&apos;s place in the program.
        </p>
        <p
          style={{
            font: "var(--text-body-sm)",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginBottom: 32,
            marginTop: -16,
          }}
        >
          Open to all students in grades 6 to 12, regardless of experience or skill
          level. No tryouts and no evaluations.
        </p>
        <iframe
          src={FORM_EMBED_URL}
          width="100%"
          height={2150}
          loading="lazy"
          style={{ border: 0, borderRadius: "var(--radius-md)" }}
          title="Academy application form"
        >
          Loading…
        </iframe>
        <p
          style={{
            font: "var(--text-body-sm)",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          We&apos;ll follow up by email within 2 business days.
        </p>
      </div>
    </section>
  );
}
