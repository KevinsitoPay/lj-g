"use client";
import { useEffect, useState } from "react";

export default function PageFade({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add class after component mounts to trigger transition
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`page-fade ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}
