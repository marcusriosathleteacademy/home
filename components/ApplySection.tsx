"use client";

// Inquiries now go through a Google Form (embedded below) instead of the
// previous Supabase-backed custom form. Responses are collected in the
// linked Google account and watched via the Forms API.

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdl1S6XjbU7ZIiaWre4MkcubMGQQKBHrYN2-1md-iLWLiJWaA/viewform?embedded=true";

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
        <iframe
          src={FORM_EMBED_URL}
          width="100%"
          height={1600}
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
