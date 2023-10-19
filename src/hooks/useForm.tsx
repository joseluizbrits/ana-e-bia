import React from "react";

type TypesProps = {
  email: {
    regex: RegExp;
    message: string;
  };
};

const types: TypesProps = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
};

function useForm(type: "" | "email" | false) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string) {
    if (type === false) return true;

    if (value.length === 0) {
      setError("Preencha um valor");

      return false;
    } else if (type !== "" && types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);

      return false;
    } else {
      setError(null);

      return true;
    }
  }

  function onChange(event: { target: HTMLInputElement | HTMLTextAreaElement }) {
    if (error) validate(event.target.value.trim());
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
