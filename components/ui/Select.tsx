export type SelectOption = { value: string; label: string };

export default function Select({
  label,
  options,
  value,
  onChange,
  error,
  disabled = false,
  name,
}: {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  name?: string;
}) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <select
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`field__control${error ? " field__control--error" : ""}`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <span className="field__error">{error}</span>}
    </label>
  );
}
