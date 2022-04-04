import { Reddit, Telegram, YouTube } from '@mui/icons-material';
import { Button, ButtonGroup, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

const Header = () => {
    return (
        <Box>
            <Paper
                elevation={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'rgb(16, 153, 250, 0.2)',
                    padding: '1rem 2rem 1rem 2rem',
                }}
            >
                <Logo>croocoin</Logo>
                <Paper
                    elevation={24}
                    sx={{
                        gap: '1rem',
                        padding: '0.5rem 1rem 0.5rem 1rem',
                        width: 'fit-content',
                        backgroundColor: 'rgb(16, 153, 250, 0.1)',
                    }}
                >
                    <Typography
                        variant='subtitle2'
                        component='h4'
                        sx={{ color: 'hsl(0, 0%, 100%)' }}
                        fontSize={11}
                        fontWeight={900}
                    >
                        JOIN CROOCOIN COMMUNITY
                    </Typography>

                    <ButtonGroup variant='outlined' aria-label='outlined button group' sx={{
                        width: '100%',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}>
                        <Telegram htmlColor='#31A8DD' />
                        <Reddit htmlColor='#FF4500'/>
                        <YouTube htmlColor="#FF0000" />
                    </ButtonGroup>
                </Paper>
                <CronosButton>Connect</CronosButton>
            </Paper>
        </Box>
    );
};

const Logo = ({ children }) => {
    return (
        <Typography variant='h2' component='h2' fontSize={24} fontWeight={400} color='white' letterSpacing={1}>
            {children}
        </Typography>
    );
};

const CronosButton = ({ children }) => {
    return <Button variant='outlined'>{children}</Button>;
};

const Container = styled.div`
    position: sticky;
    top: 0;

    height: 200px;
`;

export default Header;
