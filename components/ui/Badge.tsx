export type BadgeTone = "neon" | "info" | "warning" | "danger" | "neutral";

export default function Badge({
  children,
  tone = "neon",
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
}) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
