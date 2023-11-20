import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types'

const paginationStyle = {
    color: '#172B4D',
    borderTop: '2px solid #dfe1e6',

    '&.MuiTablePagination-root .MuiTablePagination-selectLabel': {
        fontSize: '1.6rem',
        fontFamily: 'var(--font-family)',
    },
    '&.MuiTablePagination-root .MuiTablePagination-select': {
        fontSize: '1.6rem',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'var(--font-family)',
    },
    '&.MuiTablePagination-root .MuiTablePagination-selectIcon': {
        fontSize: '2.4rem',
        display: 'flex',
        alignItems: 'center',
    },
    '&.MuiTablePagination-root .MuiTablePagination-displayedRows': {
        fontSize: '1.6rem',
        fontFamily: 'var(--font-family)',
    },
};

function Pagination({ data, numPage, onChangeNumPage, rowsPerPage, onChangeRowsPerPage }) {

    const handleChangePage = (event, newPage) => {
        onChangeNumPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        onChangeRowsPerPage(parseInt(event.target.value, 10));
        onChangeNumPage(0);
    };

    return (
        <TablePagination
            showFirstButton
            showLastButton
            sx={paginationStyle}
            rowsPerPageOptions={[3, 5, 10, 15, 20]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={numPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}

Pagination.propTypes = {
    data: PropTypes.array.isRequired,
    numPage: PropTypes.number,
    onChangeNumPage: PropTypes.func,
    rowsPerPage: PropTypes.number,
    onChangeRowsPerPage: PropTypes.func,
}

export default Pagination;
