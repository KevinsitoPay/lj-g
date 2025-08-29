"use client";
import React, { useState } from "react";
import ChevronRight from "../Icons/ChevronRight";
import ChevronDown from "../Icons/ChevronDown";
import "./Faq.scss";

function Dropdown({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (event, index) => {
    event.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dropdown">
      {items.map((item, index) => (
        <details
          key={index}
          className={`dropdown-item ${openIndex === index ? "open" : ""}`}
          open={openIndex === index}
        >
          <summary
            className="dropdown-summary"
            onClick={(event) => toggleOpen(event, index)}
          >
            {item.question}
            <span className="dropdown-icon">
              {openIndex === index ? (
                <ChevronDown size="m" />
              ) : (
                <ChevronRight size="m" />
              )}
            </span>
          </summary>
          <p className="dropdown-content">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default Dropdown;
