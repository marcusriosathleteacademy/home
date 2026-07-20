export default function Card({
  children,
  glow = false,
  padding = 20,
  style,
}: {
  children: React.ReactNode;
  glow?: boolean;
  padding?: number | string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`card${glow ? " card--glow" : ""}`} style={{ padding, ...style }}>
      {children}
    </div>
  );
}
