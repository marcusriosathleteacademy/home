import PhotoSlot from "@/components/ui/PhotoSlot";

export default function SplitSection({
  id,
  background,
  eyebrow,
  title,
  body,
  photoPlaceholder,
  photoSrc,
  photoAlt,
  photoHeight = "clamp(220px, 32vw, 360px)",
  reverse = false,
  columns,
}: {
  id: string;
  background?: "raised" | "black";
  eyebrow: string;
  title: string;
  body: string;
  photoPlaceholder: string;
  photoSrc?: string;
  photoAlt?: string;
  photoHeight?: number | string;
  reverse?: boolean;
  columns: string;
}) {
  const textBlock = (
    <div>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p style={{ font: "var(--text-body-md)", color: "var(--text-secondary)", maxWidth: 520 }}>{body}</p>
    </div>
  );

  const photoBlock = (
    <PhotoSlot src={photoSrc} alt={photoAlt} placeholder={photoPlaceholder} height={photoHeight} />
  );

  return (
    <section
      id={id}
      className={`section${background ? ` section--${background}` : ""}`}
    >
      <div className="split-grid" style={{ gridTemplateColumns: columns, gap: 40 }}>
        {reverse ? (
          <>
            {photoBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {photoBlock}
          </>
        )}
      </div>
    </section>
  );
}
