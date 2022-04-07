import { Container, Divider, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Label = ({ children }) => {
    return (
        <Typography fontSize={14} fontWeight={400}>
            {children}
        </Typography>
    );
};

const TokenSummary = () => {
    return (
        <Stack
            spacing={2}
            paddingX={2}
            paddingY={1}
            divider={<Divider orientation='horizontal' flexItem sx={{ borderWidth: '1px', maxWidth: '100%' }} />}>

            <Box>
                <Label>Total Supply: 999,999,110</Label>
                <Label>Marketcap: $2,847,346</Label>
            </Box>
            <Stack spacing={1}>
                <Box>
                    <Label>Pc v2 | MTK/BUSD LP Holdings:</Label>
                    <Label>8,604.21 BUSD ($8604)|Chart|Holders</Label>
                </Box>

                <Box>
                    <Label>Pc v2 | MTK/BNB LP Holdings:</Label>
                    <Label>8,604.21 BNB ($8604)|Chart|Holders</Label>
                </Box>

                <Box>
                    <Label>Pc v2 | MTK/USDT LP Holdings:</Label>
                    <Label>8,604.21 USDT ($8604)|Chart|Holders</Label>
                </Box>
            </Stack>
            <Label>MTK Transactions</Label>
            <Label>MTK Contract</Label>
            <Label>MTK Holders</Label>
            <Box>
                <Label>Ads here:</Label>
                <Box sx={{ height: '120px', width: '100%', backgroundColor: 'green' }}></Box>
            </Box>
        </Stack>
    );
};

export default TokenSummary;
