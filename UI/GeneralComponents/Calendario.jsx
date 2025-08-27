"use client";
import ArrowRight from "../Icons/ArrowRight";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./Calendario.scss";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import Schedule from "../Icons/Schedule";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
const TimePicker = dynamic(() => import("react-time-picker"), { ssr: false });

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:30 AM");
  const [submittedData, setSubmittedData] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date, time };
    setSubmittedData(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <div className="text-top">
        <p>
          {" "}
          After submitting your appointment, we will contact you to confirm it
          or future dates based on our schedule.{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <Calendar
          onChange={handleDateChange}
          value={date}
          minDate={new Date()}
          locale="en-US"
        />
        <div className="timeContainer">
          <TimePicker
            onChange={handleTimeChange}
            value={time}
            disableClock={true}
            format="h:mm a"
            clearIcon={null}
            clockIcon={true}
          />
        </div>
        <button type="submit" className="button">
          Confirm Appointment <ArrowRight size="sm" />
        </button>
      </form>
      {submittedData && (
        <div className="selected">
          Appointment confirmed for: {submittedData.date.toDateString()} at{" "}
          {submittedData.time}
        </div>
      )}
    </div>
  );
};

export default Calendario;
