import * as React from 'react';

export function EmailTemplate({ date, time, name, city, email, phone, projectMessage }) {
  return (
    <div>
      <h1>New project request</h1>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>

      <p><strong>Project message:</strong></p>
      
      <p>{projectMessage}</p>
    </div>
  );
}