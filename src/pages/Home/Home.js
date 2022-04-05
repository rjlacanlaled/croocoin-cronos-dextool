import { Telegram } from '@mui/icons-material';
import { ButtonGroup, Input, InputAdornment, OutlinedInput, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledTextField } from '../../components/styles/inputs';
import { MainContentContainer, PageContainer } from '../../components/styles/containers';
import { MainTitleText } from '../../components/styles/texts';

const Home = () => {
    return (
        <PageContainer>
            <MainContentContainer>
                <MainTitleText>Chronos Chart</MainTitleText>
                <StyledTextField id='token-id' label='Seach Token' helperText='Paste address or seach name' fullWidth />
            </MainContentContainer>
        </PageContainer>
    );
};

export default Home;
