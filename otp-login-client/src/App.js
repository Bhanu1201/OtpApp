import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { email });
            setMessage(response.data.message);
            setIsOtpSent(true); // Set to true after OTP is sent
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An unexpected error occurred');
            console.log("error", error)
        }
    };

    const handleVerifyOtp = async () => {
        console.log('Sending OTP:', otp); // Log OTP before sending
    
        try {
            const response = await axios.post('http://localhost:3001/verify-otp', { otp });
            console.log('Response:', response.data); // Log server response
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error:', error); // Log any error details
            setMessage(error.response ? error.response.data.message : 'An unexpected error occurred');
        }
    };
    

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Login</h2>
            {!isOtpSent ? (
                <>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button onClick={handleLogin}>Send OTP</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default App;
