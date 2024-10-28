import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'; // Import framer-motion
import { TextField, Button, Box, Typography, Container } from '@mui/material'; // Import MUI components
import { styled } from '@mui/system';
import '../styles/login.module.css';

const Login = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { email });
            setMessage(response.data.message);
            setIsOtpSent(true);
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An unexpected error occurred');
            console.log("error", error);
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

    // Animation variants for letters dropping down
    const letterVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2, duration: 0.6 }
        })
    };

    // Custom styled Box for animation
    const AnimatedBox = styled(Box)({
        display: 'flex',
        justifyContent: 'start',
        fontWeight: 'bold',
    });

    return (
        <Container maxWidth="sm" className='border border-5 rounded-4 pt-4 pb-5 mt-5 login bg-white' >
            {/* Animated DVK letters */}
            <AnimatedBox mb={3}>
                <motion.span
                    custom={0} // Step 1: D
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    style={{ fontSize: '48px', color: '#ffb74d', fontWeight: 'bold' }} // Custom styling
                >
                    D
                </motion.span>
                <motion.span
                    custom={1} // Step 2: V
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    style={{ fontSize: '48px', color: '#ffb74d', fontWeight: 'bold' }} // Custom styling
                >
                    V
                </motion.span>
                <motion.span
                    custom={2} // Step 3: K
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    style={{ fontSize: '48px', color: '#ffb74d', fontWeight: 'bold' }} // Custom styling
                >
                    K
                </motion.span>
            </AnimatedBox>

            {/* OTP login form */}
            {!isOtpSent ? (
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        type="email"
                        label="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={handleLogin}
                        fullWidth
                        sx={{ padding: '10px 0', borderRadius: '8px' }}
                    >
                        Send OTP
                    </Button>
                </Box>
            ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        type="text"
                        label="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                        fullWidth
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={handleVerifyOtp}
                        fullWidth
                        sx={{ padding: '10px 0', borderRadius: '8px' }}
                    >
                        Verify OTP
                    </Button>
                </Box>
            )}

            {message && <Typography mt={2} color="#3e3e3e">{message}</Typography>}
        </Container>
    );
};

export default Login;
