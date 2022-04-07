import styled from '@emotion/styled';
import { Box, ButtonGroup, Paper } from '@mui/material';

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
                overflow: 'auto',
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
                overflow: 'auto',
            }}
        >
            {children}
        </Box>
    );
};

const StyledFitContentPaper = styled(Paper)`
    gap: 1rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    width: fit-content;
    background-color: rgb(16, 153, 250, 0.1);

    @media (max-width: 500px) {
        width: 100%;
        order: 1;
    }
`;

export const FitContentPaperContainer = ({ children }) => {
    return <StyledFitContentPaper>{children}</StyledFitContentPaper>;
};

export const EqualSpacePaperContainer = ({ children }) => {
    return (
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
            {children}
        </Paper>
    );
};

export const SmallButtonContainer = ({ children }) => {
    return (
        <ButtonGroup
            variant='outlined'
            aria-label='outlined button group'
            sx={{
                width: '100%',
                justifyContent: 'center',
                gap: '0.5rem',
            }}
        >
            {children}
        </ButtonGroup>
    );
};
