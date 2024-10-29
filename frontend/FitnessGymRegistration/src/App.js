import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [btc, setBtc] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentData = {
      name,
      phone_number: phoneNumber,
      email,
      btc,
      best_time: bestTime,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/students', studentData);
      console.log(response.data);
      alert('Registration Successful!');
      window.location.reload();
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('There was an error adding the student. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <p>Best Time to Call:</p>
        <label>
          <input
            type="radio"
            value="Morning"
            checked={bestTime === 'Morning'}
            onChange={(e) => setBestTime(e.target.value)}
            required
          />
          Morning
        </label>
        <label>
          <input
            type="radio"
            value="Afternoon"
            checked={bestTime === 'Afternoon'}
            onChange={(e) => setBestTime(e.target.value)}
            required
          />
          Afternoon
        </label>
      </div>
      <div>
        <label>
          BTC:
          <input
            type="text"
            value={btc}
            onChange={(e) => setBtc(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
