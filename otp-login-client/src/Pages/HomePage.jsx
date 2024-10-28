import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';

const HomePage = ({ onThemeChange }) => {
    return (
        <Container className='home'>
            <Box textAlign="center" my={4}>
                <Typography variant="h3">Welcome to My Themed Home Page</Typography>
                <Typography variant="h6" gutterBottom>
                    Switch between different themes using the buttons below
                </Typography>
                <Box my={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onThemeChange('light')}
                        sx={{ mx: 1 }}
                    >
                        Light Theme
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => onThemeChange('dark')}
                        sx={{ mx: 1 }}
                    >
                        Dark Theme
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => onThemeChange('custom')}
                        sx={{ mx: 1 }}
                    >
                        Custom Theme
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default HomePage;
