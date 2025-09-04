"use client";
import { useEffect, useState } from "react";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // small timeout so gif is visible a bit, optional
      setTimeout(() => setLoading(false), 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img
          src="/images/loading.gif"
          alt="Loading..."
          className="splash-logo"
        />
      </div>
    );
  }

  return <>{children}</>;
}
