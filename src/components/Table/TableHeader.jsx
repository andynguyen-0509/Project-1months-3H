import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import PropTypes from 'prop-types';

import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';

const cx = classNames.bind(styles);

const headingStyle = {
    padding: '0',
    fontFamily: 'var(--font-family)',
    fontWeight: 400,
    color: '#6B778C',
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    height: '43px',
    borderBottom: '2px solid #dfe1e6',
};

function TableHeader({ data, order, orderBy, onChangeOrder, onChangeOrderBy }) {
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        onChangeOrder(isAsc ? 'des' : 'asc');
        onChangeOrderBy(property);
    };

    return (
        <TableHead className={cx('header')}>
            <TableRow>
                {data.map((heading, index) => (
                    <TableCell className={cx('heading')} key={index} sx={headingStyle}>
                        <TableSortLabel
                            active={orderBy === heading.field}
                            direction={orderBy === heading.field ? order : 'asc'}
                            onClick={(event) => handleRequestSort(event, heading.field)}
                            sx={{
                                '&.MuiTableSortLabel-root .MuiTableSortLabel-icon': {
                                    width: '14px',
                                    height: '14px',
                                },
                            }}
                        >
                            {heading.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

TableHeader.propTypes = {
    data: PropTypes.array.isRequired,
    order: PropTypes.string,
    orderBy: PropTypes.string,
    onChangeOrder: PropTypes.func,
    onChangeOrderBy: PropTypes.func,
};

export default TableHeader;
