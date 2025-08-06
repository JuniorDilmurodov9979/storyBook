import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

type InputProps = {
  type?: "text" | "password" | "number";
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
  label?: string;
};

export const Input = ({
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  clearable = false,
  label,
}: InputProps) => {
  const [inputType, setInputType] = useState(type);
  const [inputValue, setInputValue] = useState(value);

  const togglePasswordVisibility = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {label && <label>{label}</label>}
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <input
          type={inputType}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          style={{
            paddingRight: type === "password" || clearable ? 30 : 8,
            padding: "8px 10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        />
        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: clearable ? 30 : 8,
              cursor: "pointer",
            }}
          >
            {inputType === "password" ? (
              <Eye size={18} />
            ) : (
              <EyeOff size={18} />
            )}
          </span>
        )}
        {clearable && inputValue && (
          <span
            onClick={handleClear}
            style={{
              position: "absolute",
              right: 8,
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </span>
        )}
      </div>
    </div>
  );
};
