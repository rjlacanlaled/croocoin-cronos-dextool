import { Telegram } from '@mui/icons-material';
import { ButtonGroup, Input, InputAdornment, OutlinedInput, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledTextInput } from '../../components/styles/input';

const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '2rem',
                gap: '2rem',
            }}
        >
            <Typography variant='h3' component='h1' textAlign='center' fontWeight={700} color="white">
                Cronos Charts
            </Typography>

            <TextField
                id='token-id'
                label='Seach Token'
                helperText='Paste address or seach name'
            />
        </Box>
    );
};

export default Home;
