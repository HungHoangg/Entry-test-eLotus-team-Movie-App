import { createContext, useContext, useState, type ReactNode } from "react";
import "./ErrorMessage.scss";

interface Toast {
  id: number;
  title: string;
  message: string;
}

interface ToastContextProps {
  showError: (message: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showError = (message: string) => {

    const newToast = {
      id: Date.now(),
      title: "Error",
      message,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showError }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <strong className="toast-title">{toast.title}</strong>
            <p className="toast-message">{toast.message}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
