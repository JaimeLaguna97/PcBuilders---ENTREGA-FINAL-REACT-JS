import { useState } from 'react';
import './CheckoutForm.css';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
    if (name === 'email') setEmail(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name, phone, email });
  };

  return (
    <form className='Form' onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required />

      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" name="phone" value={phone} onChange={handleInputChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />

    
      <button type="submit">Place Order</button>
    <div className="center">
        <Link to="/" className="button">
            Back to Products
        </Link>
    </div>
    </form>
  );
};

export default CheckoutForm;