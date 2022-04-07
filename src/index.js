import React from 'react';
import ReactDOMClient, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
    palette: {
        text: {
            primary: 'hsl(0, 0%, 100%)',
            secondary: 'hsl(0, 0%, 80%)',
        },
    },
    components: {
        MuiTablePagination: {
            styleOverrides: {
                menuItem: {
                    color: '#051421',
                    fontSize: '0.8rem',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(9, 46, 77)',
                },
            },
        },
    },
});

root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
