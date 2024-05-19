import React, { useState } from 'react';
import './register.css';
const FormValidation = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [errorsExist, setErrorsExist] = useState();

  const validate = () => {
    const errors = {};
    if (!formData.email.includes('@')) {
      errors.email = 'Invalid email address';
      setErrorsExist(true)
    }
    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      setErrorsExist(true)
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      setErrorsExist(true)
    }
    if (formData.email.includes('@')&&formData.password.length >7 &&formData.password == formData.confirmPassword) {
        setErrorsExist(false)
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (errorsExist==false) {
      alert('Registration Successful\n'+"Email:"+formData.email+"\nPassword:"+formData.password);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="app-container">

    <form onSubmit={handleSubmit} >
      <h2>Register</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default FormValidation;
