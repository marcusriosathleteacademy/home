export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  disabled = false,
  name,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  name?: string;
}) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`field__control${error ? " field__control--error" : ""}`}
      />
      {error && <span className="field__error">{error}</span>}
    </label>
  );
}
