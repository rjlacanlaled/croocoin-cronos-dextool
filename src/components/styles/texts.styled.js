import { Typography } from '@mui/material';


export const MainTitleText = ({ children }) => {
    return (
        <Typography variant='h3' component='h1' textAlign='center' fontWeight={700} color='white'>
            {children}
        </Typography>
    );
};

export const MiniTitleText = ({ children }) => {
    return (
        <Typography
            variant='subtitle2'
            component='h4'
            sx={{ color: 'hsl(0, 0%, 100%)' }}
            fontSize={11}
            fontWeight={900}
            textAlign='center'
        >
            {children}
        </Typography>
    );
};
