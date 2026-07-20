"use client";

import { Fragment, useState } from "react";
import { faqData } from "@/lib/content";

/** Splits a URL out of a line of text and renders it as a link. */
function linkify(line: string) {
  const segments = line.split(/(https?:\/\/\S+)/g);
  return segments.map((seg, i) =>
    /^https?:\/\//.test(seg) ? (
      <a key={i} href={seg} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-blue)" }}>
        {seg}
      </a>
    ) : (
      <Fragment key={i}>{seg}</Fragment>
    )
  );
}

function FaqAnswer({ answer }: { answer: string | string[] }) {
  const paragraphs = Array.isArray(answer) ? answer : [answer];
  return (
    <>
      {paragraphs.map((paragraph, pi) => (
        <p key={pi} style={{ margin: pi === 0 ? 0 : "12px 0 0" }}>
          {paragraph.split("\n").map((line, li) => (
            <Fragment key={li}>
              {li > 0 && <br />}
              {linkify(line)}
            </Fragment>
          ))}
        </p>
      ))}
    </>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section section--black">
      <div
        className="split-grid"
        style={{ gridTemplateColumns: "minmax(240px,0.7fr) minmax(360px,1.3fr)", gap: 48, alignItems: "start" }}
      >
        <div>
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Common Questions
          </h2>
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
          {faqData.map((q, i) => {
            const open = openIndex === i;
            const toggle = () => setOpenIndex(open ? null : i);
            return (
              <div key={q.question} style={{ background: "var(--surface-card)", borderBottom: "1px solid var(--border-default)" }}>
                <div
                  onClick={toggle}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={open}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 22px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ font: "var(--text-body-md)", color: "var(--text-primary)", fontWeight: 600 }}>
                    {q.question}
                  </div>
                  <div style={{ font: "var(--text-label)", color: "var(--neon-1)", flexShrink: 0 }}>
                    {open ? "−" : "+"}
                  </div>
                </div>
                {open && (
                  <div style={{ padding: "0 22px 20px", font: "var(--text-body-md)", color: "var(--text-secondary)", maxWidth: 680 }}>
                    <FaqAnswer answer={q.answer} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
