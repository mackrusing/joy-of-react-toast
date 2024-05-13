// lib
import React from "react";
// hooks
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // arr of displayed toasts
  const [toasts, setToasts] = React.useState([]);

  // remove all toasts on escape
  useEscapeKey(() => {
    setToasts([]);
  });

  // new toast
  function addToast(message, variant) {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant,
        message,
      },
    ]);
  }

  // remove toast
  function removeToast(id) {
    setToasts(toasts.filter((x) => x.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
