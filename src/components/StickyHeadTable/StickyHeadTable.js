import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';

const columns = [
    { id: 'contract', label: 'Contract', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 70 },
    {
        id: 'symbol',
        label: 'Symbol',
        minWidth: 100,
    },
    {
        id: 'balance',
        label: 'Balance',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'actions',
        label: '',
        minWidth: 100,
    },
];

function createData(address, name, symbol, balance, actions) {
    const contract = `0x...${address.slice(address.length - 4)}`;
    return { contract, name, symbol, balance, actions };
}

const rows = [
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Wrapped BNB', 'WBNB', 1324171354, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'MTK', 1403500365, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'BUSD', 60483973, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'US', 327167434, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'CA', 37602103, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'AU', 25475400, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'DE', 83019200, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'IE', 4857000, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'MX', 126577691, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'JP', 126317000, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'FR', 67022000, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'GB', 67545757, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'RU', 146793744, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'NG', 200962417, 'Delete'),
    createData('0xd6c25c4e7a64424b31795d021e824b13df1e81ae', 'Token Name', 'BR', 210147125, 'Delete'),
];

const StyledTablePagination = styled(TablePagination)`

`;

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'transparent' }} square>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label='sticky table' sx={{tableLayout: 'fixed', maxWidth: '600px'}}>
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ backgroundColor: '#072237' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <StyledTablePagination
                key='1'
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
