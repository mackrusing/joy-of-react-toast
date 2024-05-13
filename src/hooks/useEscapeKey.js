// lib
import React from "react";

export default function useEscapeKey(functionToCall) {
  // add event listener on mount
  React.useEffect(() => {
    // check for the escape key on keydown events
    function handleEscape(event) {
      if (event.key === "Escape") {
        // run user-provided function
        functionToCall();
      }
    }

    // add event listener
    window.addEventListener("keydown", handleEscape);

    // remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
}
