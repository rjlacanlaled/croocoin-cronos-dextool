import { ThemeContext } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const theme = createTheme({
    palette: {
        text: {
            primary: 'hsl(0, 0%, 100%)',
            secondary: 'hsl(0, 0%, 80%)',
        },
    },
    components: {
        MuiTextField: {
            root: {
              backgroundColor: 'red'
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
                <Home />
            </div>
        </ThemeProvider>
    );
}

export default App;
