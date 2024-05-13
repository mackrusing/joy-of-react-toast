// lib
import React from "react";
// components
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastProvider from "../ToastProvider";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
