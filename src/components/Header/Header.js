import { Button, Paper, Typography } from '@mui/material';
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
                    backgroundColor: '#0C1426',
                    padding: '1rem 2rem 1rem 2rem'
                }}
            >
                <Logo>croocoin</Logo>
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
    return <Button variant="outlined">{children}</Button>
}

const Container = styled.div`
    position: sticky;
    top: 0;

    height: 200px;
`;

export default Header;
