import Image from "next/image";

/**
 * Renders a real photo when `src` is supplied, otherwise a labeled
 * placeholder — mirrors the design file's <image-slot> empty state for
 * the photos that weren't uploaded in the handoff bundle.
 *
 * Real photos go through next/image (fill layout) so the browser gets a
 * resized, modern-format (AVIF/WebP) file matching its viewport instead of
 * the full multi-MB camera original on every device.
 */
export default function PhotoSlot({
  src,
  alt,
  placeholder,
  height,
  className,
  fit = "cover",
  sizes = "(max-width: 860px) 100vw, 50vw",
  priority = false,
  style,
}: {
  src?: string;
  alt?: string;
  placeholder: string;
  /** Fixed box height. Omit when a CSS class controls sizing via aspect-ratio instead. */
  height?: number | string;
  /** Applied to the wrapper box — use for aspect-ratio-driven sizing (see .facility-photo). */
  className?: string;
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}) {
  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    ...(height !== undefined ? { height } : {}),
    borderRadius: 4,
    overflow: "hidden",
    position: "relative",
    ...style,
  };

  if (src) {
    return (
      <div className={className} style={wrapperStyle}>
        <Image
          src={src}
          alt={alt ?? placeholder}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: fit, objectPosition: "center" }}
        />
      </div>
    );
  }

  return (
    <div
      className={["photo-placeholder", className].filter(Boolean).join(" ")}
      style={{ ...wrapperStyle, border: "1px solid var(--border-default)" }}
    >
      {placeholder}
    </div>
  );
}
