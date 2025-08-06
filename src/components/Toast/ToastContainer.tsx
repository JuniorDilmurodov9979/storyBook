import { useState } from "react";
import { Toast } from "./Toast";
import { v4 as uuidv4 } from "uuid";

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<
    { id: string; type: any; message: string; duration: number }[]
  >([]);

  const showToast = (message: string, type = "info", duration = 3000) => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { id, type, message, duration }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <button onClick={() => showToast("Info toast!", "info")}>Info</button>
      <button onClick={() => showToast("Success toast!", "success")}>
        Success
      </button>
      <button onClick={() => showToast("Warning toast!", "warning")}>
        Warning
      </button>
      <button onClick={() => showToast("Error toast!", "error")}>Error</button>

      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={removeToast}
          />
        ))}
      </div>
    </div>
  );
};
