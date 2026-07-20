export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  children,
  onClick,
  style,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn--${variant} btn--${size}`}
      style={style}
    >
      {children}
    </button>
  );
}
