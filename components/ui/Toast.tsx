export default function Toast({
  tone = "success",
  message,
}: {
  tone?: "success" | "danger";
  message: string;
}) {
  return (
    <div className={`toast toast--${tone}`}>
      <span className="toast__dot" />
      <span style={{ flex: 1 }}>{message}</span>
    </div>
  );
}
