"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./Calendario.scss";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import ArrowIcon from "../Icons/ArrowIcon";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
const TimePicker = dynamic(() => import("react-time-picker"), { ssr: false });

const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isPhoneNumberValid = (phone) => /^\+?[0-9]{7,15}$/.test(phone);
const isNameValid = (name) => /^[a-zA-Z\s]+$/.test(name.trim());
const isProjectMessageValid = (message) => /^[a-zA-Z0-9\s]+$/.test(message.trim());

const Calendario = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    date: new Date(),
    time: "10:30 AM",
    name: "",
    city: "",
    email: "",
    phone: "",
    projectMessage: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleDateChange = (newDate) => {
    setFormData((prevData) => ({ ...prevData, date: newDate }));
  };

  const handleTimeChange = (newTime) => {
    setFormData((prevData) => ({ ...prevData, time: newTime }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!isNameValid(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!isEmailValid(formData.email)) newErrors.email = "Invalid email address";
    if (!isPhoneNumberValid(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.projectMessage.trim()) {
      newErrors.projectMessage = "Project description is required";
    } else if (!isProjectMessageValid(formData.projectMessage)) {
      newErrors.projectMessage = "Project description can contain only letters, numbers, and spaces";
    }
    return newErrors;
  };

  const handleSubmitStep1 = (event) => {
    event.preventDefault();
    setCurrentStep(2);
  };

  const handleSubmitStep2 = async (event) => {
    event.preventDefault();
    const formErrors = validateStep2();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setLoading(true);

      try {
        // Convertir la hora al formato de 12 horas
        const [hour, minute] = formData.time.split(':');
        const date = new Date();
        date.setHours(hour, minute);
        const timeIn12HourFormat = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        // Preparar datos para enviar
        const emailData = {
          date: formData.date.toLocaleDateString(),
          time: timeIn12HourFormat,
          name: formData.name,
          city: formData.city,
          email: formData.email,
          phone: formData.phone,
          projectMessage: formData.projectMessage
        };

        // Enviar email usando Resend
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if (response.ok) {
          console.log("Email sent successfully!");
          setCurrentStep(3);
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setErrors({ submit: 'Error sending appointment. Please try again.' });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      {currentStep === 1 && (
        <div className="step1">
          <div className="text-top">
            <p>
              After submitting your appointment, we will contact you to confirm it
              or future dates based on our schedule.
            </p>
          </div>
          <form onSubmit={handleSubmitStep1}>
            <Calendar
              onChange={handleDateChange}
              value={formData.date}
              minDate={new Date()}
              locale="en-US"
            />
            <div className="timeContainer">
              <TimePicker
                onChange={handleTimeChange}
                value={formData.time}
                disableClock={true}
                format="h:mm a"
                clearIcon={null}
                clockIcon={true}
              />
            </div>
            <button type="submit" className="button">
              Confirm Appointment <ArrowIcon alt size="sm" />
            </button>
          </form>
        </div>
      )}

      {currentStep === 2 && (
        <div className="step2">
          <h5>One last step! Share your details with us.</h5>
          <form onSubmit={handleSubmitStep2} className="form">
            {loading && <p className="loading-message">Processing...</p>}
            {errors.submit && <p className="error">{errors.submit}</p>}
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input-container">
              <input
                type="text"
                name="city"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="input-container">
              <textarea
                name="projectMessage"
                placeholder="Tell us about your project"
                value={formData.projectMessage}
                onChange={handleChange}
                rows="4"
                required
              />
              {errors.projectMessage && <span className="error">{errors.projectMessage}</span>}
            </div>
            <button type="submit" className="button" disabled={loading}>
              Submit <ArrowIcon alt size="sm" />
            </button>
          </form>
        </div>
      )}

      {currentStep === 3 && (
        <div className="step3-confirmation-message">
          <h4>Thank You for Your Preference!</h4>
          <img src="/images/ai-deal.webp" alt="Confirmation" />
          <p>Your information has been submitted successfully. We will be in contact with you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Calendario;








