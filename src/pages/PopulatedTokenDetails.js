import TokenSummary from '../components/TokenSummary';

const { Container } = require('@mui/material');

const PopulatedTokenDetails = ({ token }) => {
    return (
        <Container>
            <TokenSummary token={token} />
        </Container>
    );
};

export default PopulatedTokenDetails;
