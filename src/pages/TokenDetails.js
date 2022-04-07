import { Container, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../components/styles/containers.styled';
import TokenSummary from '../components/TokenSummary';
import EmptyTokenDetails from './EmptyTokenDetails';
import PopulatedTokenDetails from './PopulatedTokenDetails';

const TokenDetails = () => {
    const { address } = useParams();

    return (
        <PageContainer>
            <Paper>{address.length ? <PopulatedTokenDetails token={address} /> : <EmptyTokenDetails />}</Paper>
        </PageContainer>
    );
};

export default TokenDetails;
