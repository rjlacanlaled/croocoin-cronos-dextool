import { Box } from '@mui/material';

export const PageContainer = ({ children }) => {
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
            {children}
        </Box>
    );
};

export const MainContentContainer = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            {children}
        </Box>
    );
};
