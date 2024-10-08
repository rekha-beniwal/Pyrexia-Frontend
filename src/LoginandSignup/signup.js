import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { BASE_URL } from '../BaseUrl';
import { Link } from 'react-router-dom'
function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/register`, { name, email, password })
    .then(response => {
        console.log(response);
        alert(response.data.message)
        navigate('/login')
        // Handle successful response
    })
    .catch(err => {
        console.error(err);
        alert( err.response?.data?.error || 'An error occurred');
    });

   
    }
    return (
        <div className="login-page mt-24 ">
            <h1 className='text-6xl lg:8xl font-sant-serif poppins my-12 md:my-16 lg:my-20 font-semibold animate-bounce' style={{ textAlign: "center" }}>Sign Up</h1>
            <div className="form">
                <form className='login-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Signup</button>
                    <p className='message'>Registered? <Link to="/login">Login</Link></p>
                </form>

            </div>
        </div>
    );
}

export default Signup;
