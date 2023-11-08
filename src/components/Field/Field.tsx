type FieldProps = {
  name: "name" | "email" | "message";
  label: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (event: { target: HTMLInputElement | HTMLTextAreaElement }) => void;
  onBlur: () => boolean;
  error: string | null;
};

const Field = ({
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
}: FieldProps) => {
  return (
    <div className={"field-" + name}>
      <label htmlFor={name}>{label}</label>
      {type !== "textarea" ? (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? "error" : ""}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? "error" : ""}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Field;
