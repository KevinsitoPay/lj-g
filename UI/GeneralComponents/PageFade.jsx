"use client";
import { useEffect, useState } from "react";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000); // hide splash after 2s
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="page-wrapper">
      {loading && (
        <div className={`splash-screen ${loading ? "visible" : "hidden"}`}>
          <img
            src="/images/loading.gif"
            alt="Loading..."
            className="splash-logo"
          />
        </div>
      )}

      <div className={`page-content ${loading ? "hidden" : "visible"}`}>
        {children}
      </div>
    </div>
  );
}
