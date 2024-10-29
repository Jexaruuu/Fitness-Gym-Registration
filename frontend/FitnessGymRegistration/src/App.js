import React, { useState } from 'react';
import axios from 'axios';

const InputField = ({ label, type, value, onChange, required }) => (
  <div>
    <label>
      {label}:
      <input type={type} value={value} onChange={onChange} required={required} />
    </label>
  </div>
);

const RadioGroup = ({ label, options, selectedValue, onChange }) => (
  <div>
    <p>{label}</p>
    {options.map((option) => (
      <label key={option}>
        <input
          type="radio"
          value={option}
          checked={selectedValue === option}
          onChange={onChange}
          required
        />
        {option}
      </label>
    ))}
  </div>
);

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    bestTime: '',
    btc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/register', formData);
      console.log(response.data);
      alert('Registration Successful!');
      window.location.reload();
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
      alert('An error occurred during the registration process. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        name="name"
      />
      <InputField
        label="Phone Number"
        type="tel"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        name="phoneNumber"
      />
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        name="email"
      />
      <RadioGroup
        label="Best Time to Call"
        options={['Morning', 'Afternoon']}
        selectedValue={formData.bestTime}
        onChange={handleChange}
        name="bestTime"
      />
      <InputField
        label="BTC"
        type="text"
        value={formData.btc}
        onChange={handleChange}
        required
        name="btc"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
