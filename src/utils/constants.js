import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

export const PUBLIC_APIS_URL = 'https://api.publicapis.org/entries';

export const AUTH_FILTER_OPTIONS = {
    NULL: 'null',
    API_KEY: 'apiKey'
}

export const HTTPS_FILTER_OPTIONS = {
    TRUE: 'true',
    FALSE: 'false'
}

export const CORS_FILTER_OPTIONS = {
    YES: 'yes',
    NO: 'no',
    UNKNOWN: 'unknown'
}

export const API_TABLE_COLUMNS = [
    {
        Header: 'Name',
        accessor: 'API'
    },
    {
        Header: 'Description',
        accessor: 'Description'
    },
    {
        Header: 'Category',
        accessor: 'Category'
    },
    {
        Header: 'Link',
        accessor: 'Link',
        Cell: (e) => (
            // rendering components for a column in react-table need to be declared in the column definition
            <Button className="btn" style={{'backgroundColor': '#FDBD2F'}} href={e.value}><FontAwesomeIcon icon={faEye} /></Button>
        )
    }
];