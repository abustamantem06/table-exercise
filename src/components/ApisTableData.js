import { Table, Row, Col, Button } from 'react-bootstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import { API_TABLE_COLUMNS } from '../utils/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './ApisTableData.css';

const ApisTableData = ({apisData}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable({
            data: apisData || [],
            columns: API_TABLE_COLUMNS,
            initialState: {
                sortBy: [{
                    id: 'API',
                    asc: true
                }],
                pageSize: 50
            },
        },
        useSortBy,
        usePagination
    );

    return (
        <div className="p-2">
            <Row>
                <Col>
                    <Table striped bordered hover {...getTableProps()}>
                        {/* table head */}
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted
                                                ? column.isSortedDesc
                                                    ? <FontAwesomeIcon className="ms-1" icon={faCaretDown} />
                                                    : <FontAwesomeIcon className="ms-1"icon={faCaretUp} />
                                                : ''}
                                            </span>
                                        </th>
                                    ))}
                            </tr>
                            ))}
                        </thead>
                        {/* table body */}
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, idx) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Pagination buttons and navigation */}
            <Row>
                <Col>
                    <Button className="btn btn-lg yellow-bg pagination-btn text-white" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </Button>
                </Col>
                <Col className="text-center">
                    Page
                    {/* set min and max values to avoid issues in page navigation*/}
                    <input
                        type="number"
                        value={pageIndex + 1}
                        min="1"
                        max={pageOptions.length}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                    />
                    of {pageOptions.length}
                </Col>
                <Col>
                    <Button className="btn btn-lg yellow-bg pagination-btn text-white" onClick={() => nextPage()} disabled={!canNextPage}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default ApisTableData;