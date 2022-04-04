import { Telegram } from '@mui/icons-material';
import { ButtonGroup, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '1rem',
                gap: '1rem'
            }}
        >
            <Typography variant='h3' component='h1' textAlign='center' fontWeight={900}>
                Cronos Charts
            </Typography>
        </Box>
    );
};

export default Home;
