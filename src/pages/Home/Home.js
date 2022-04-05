import { Telegram } from '@mui/icons-material';
import { ButtonGroup, Input, InputAdornment, OutlinedInput, Paper, TextField, Typography, alpha } from '@mui/material';
import { Box, styled } from '@mui/system';
import { StyledTextField } from '../../components/styles/inputs.styled';
import { MainContentContainer, PageContainer } from '../../components/styles/containers.styled';
import { MainTitleText } from '../../components/styles/texts.styled';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar';
import StickyHeadTable from '../../components/StickyHeadTable/StickyHeadTable';


const Home = () => {
    return (
        <PageContainer>
            <MainContentContainer>
                <MainTitleText>Chronos Chart</MainTitleText>
                <StyledTextField id='token-id' label='Seach Token' helperText='Search token or paste contract' />
                <Box>
                    <SearchAppBar />
                    <StickyHeadTable />
                </Box>
            </MainContentContainer>
        </PageContainer>
    );
};

export default Home;
