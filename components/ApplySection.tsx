"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Toast from "@/components/ui/Toast";
import { supabase } from "@/lib/supabase";
import { sportOptions, gradeOptions } from "@/lib/content";

type Fields = {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  sport: string;
  grade: string;
  message: string;
};

const emptyFields: Fields = {
  parentName: "",
  studentName: "",
  email: "",
  phone: "",
  sport: "",
  grade: "",
  message: "",
};

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.parentName.trim()) errors.parentName = "Required";
  if (!fields.studentName.trim()) errors.studentName = "Required";
  if (!/^\S+@\S+\.\S+$/.test(fields.email)) errors.email = "Enter a valid email";
  if (fields.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number";
  if (!fields.sport) errors.sport = "Required";
  if (!fields.grade) errors.grade = "Required";
  if (!fields.message.trim()) errors.message = "Required";
  return errors;
}

export default function ApplySection() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [reclassed, setReclassed] = useState<"yes" | "no">("no");
  const [reclassInfoOpen, setReclassInfoOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const setField =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const foundErrors = validate(fields);
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    const { error } = await supabase.from("applications").insert({
      parent_name: fields.parentName,
      student_name: fields.studentName,
      email: fields.email,
      phone: fields.phone,
      sport: fields.sport,
      grade: fields.grade,
      reclassed,
      message: fields.message,
    });
    setSubmitting(false);
    if (error) {
      setSubmitError(true);
      return;
    }
    setSubmitted(true);
    setErrors({});
  };

  const reclassOptions: { v: "yes" | "no"; label: string }[] = [
    { v: "yes", label: "Yes" },
    { v: "no", label: "No" },
  ];

  return (
    <section id="apply" className="section section--raised">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Apply
        </div>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 8, transformOrigin: "center" }}>
          Deadline to Join: <span style={{ color: "var(--accent-blue)" }}>August 17</span>
        </h2>
        <p style={{ font: "var(--text-body-md)", color: "var(--text-secondary)", textAlign: "center", marginBottom: 32 }}>
          Apply now to reserve your athlete&apos;s place in the program.
        </p>

        {submitted ? (
          <Toast tone="success" message="Application received. We'll follow up by email within 2 business days." />
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {submitError && (
              <Toast tone="danger" message="Something went wrong submitting your application. Please try again." />
            )}
            <div className="form-row">
              <Input label="Parent name *" placeholder="Full name" value={fields.parentName} onChange={setField("parentName")} error={errors.parentName} />
              <Input label="Student name *" placeholder="Full name" value={fields.studentName} onChange={setField("studentName")} error={errors.studentName} />
            </div>
            <div className="form-row">
              <Input label="Email *" type="email" placeholder="you@example.com" value={fields.email} onChange={setField("email")} error={errors.email} />
              <Input label="Phone *" type="tel" placeholder="(916) 555-0100" value={fields.phone} onChange={setField("phone")} error={errors.phone} />
            </div>
            <div className="form-row">
              <Select label="Sport *" value={fields.sport} onChange={setField("sport")} options={sportOptions} error={errors.sport} />
              <Select label="Grade *" value={fields.grade} onChange={setField("grade")} options={gradeOptions} error={errors.grade} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, position: "relative" }}>
                <span
                  style={{
                    font: "var(--text-label)",
                    letterSpacing: "var(--tracking-wide)",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                  }}
                >
                  Reclassed? *
                </span>
                <span
                  onClick={() => setReclassInfoOpen((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setReclassInfoOpen((v) => !v);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="What does reclassed mean?"
                  aria-expanded={reclassInfoOpen}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "1px solid var(--text-muted)",
                    color: "var(--text-muted)",
                    font: "var(--text-caption)",
                    fontSize: 11,
                    cursor: "pointer",
                  }}
                >
                  i
                </span>
                {reclassInfoOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: 24,
                      left: 0,
                      zIndex: 60,
                      width: 260,
                      background: "var(--black-0)",
                      color: "var(--white-0)",
                      font: "var(--text-caption)",
                      padding: "10px 12px",
                      borderRadius: "var(--radius-sm)",
                      boxShadow: "var(--shadow-md)",
                      border: "1px solid var(--border-default)",
                    }}
                  >
                    Reclassing means repeating a grade level to gain athletic eligibility, extra
                    development time, or a stronger recruiting class.
                  </div>
                )}
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                {reclassOptions.map((o) => {
                  const selected = reclassed === o.v;
                  return (
                    <label
                      key={o.v}
                      style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", font: "var(--text-body-sm)", color: "var(--text-primary)" }}
                    >
                      <span
                        onClick={() => setReclassed(o.v)}
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          border: `1px solid ${selected ? "var(--brand-signal)" : "var(--border-default)"}`,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {selected && <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--brand-signal)" }} />}
                      </span>
                      {o.label}
                    </label>
                  );
                })}
              </div>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  font: "var(--text-label)",
                  letterSpacing: "var(--tracking-wide)",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                Why do you want to join? *
              </span>
              <textarea
                value={fields.message}
                onChange={setField("message")}
                placeholder="Tell us about your athlete's goals"
                className={`field__control${errors.message ? " field__control--error" : ""}`}
              />
              {errors.message && <span className="field__error">{errors.message}</span>}
            </label>
            <Button variant="primary" size="lg" type="submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit application"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
