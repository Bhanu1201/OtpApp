// themes.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2', // Customize primary color
        },
        secondary: {
            main: '#ff4081', // Customize secondary color
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
});

export const customTheme = createTheme({
    palette: {
        mode: 'light', // or 'dark' if needed
        primary: {
            main: '#ff8f00',
        },
        secondary: {
            main: '#ff3d00',
        },
    },
    // Ensure breakpoints are included if you’re customizing them
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
