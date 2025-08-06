import { useEffect } from "react";
import { X, CheckCircle, Info, AlertTriangle, AlertCircle } from "lucide-react";

type ToastType = "success" | "error" | "info" | "warning";

type ToastProps = {
  id: string;
  type?: ToastType;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
  showCloseButton?: boolean;
};

const iconMap = {
  success: <CheckCircle color="green" size={20} />,
  error: <AlertCircle color="red" size={20} />,
  info: <Info color="blue" size={20} />,
  warning: <AlertTriangle color="orange" size={20} />,
};

export const Toast = ({
  id,
  type = "info",
  message,
  duration = 3000,
  onClose,
  showCloseButton = true,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#fff",
        padding: "10px 14px",
        borderRadius: 6,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: 10,
        minWidth: 250,
        borderLeft: `4px solid ${toastBorderColor(type)}`,
        animation: "slideIn 0.3s ease-out",
        position: "relative",
      }}
    >
      {iconMap[type]}
      <span style={{ flex: 1 }}>{message}</span>
      {showCloseButton && (
        <X
          size={16}
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            onClose(id);
          }}
        />
      )}
    </div>
  );
};

const toastBorderColor = (type: ToastType) => {
  switch (type) {
    case "success":
      return "green";
    case "error":
      return "red";
    case "info":
      return "blue";
    case "warning":
      return "orange";
  }
};
