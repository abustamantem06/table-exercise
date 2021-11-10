import ApisTableData from '../components/ApisTableData';
import ApisTableFilters from '../components/ApisTableFilters';

import { useEffect, useState } from 'react';
import { fetchPublicApisData } from '../utils/api';

const ApisPage = () => {
    const [apisData, setApisData] = useState([]);
    const [authFilter, setAuthFilter] = useState('');
    const [httpsFilter, setHttpsFilter] = useState('');
    const [corsFilter, setCorsFilter] = useState('');

    const [nameFilter, setNameFilter] = useState('');
    const [descriptionFilter, setDescriptionFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const updatesApiData = async () => {
        const apisData = await fetchPublicApisData(authFilter, httpsFilter, corsFilter, nameFilter, descriptionFilter, categoryFilter);
        setApisData(apisData);
    }

    useEffect(() => {
         updatesApiData();
    }, [])

    return (
        <>
            <ApisTableFilters
                onAuthFilter={setAuthFilter}
                onHttpsFilter={setHttpsFilter}
                onCorsFilter={setCorsFilter}
                onNameFilter={setNameFilter}
                onDescriptionFilter={setDescriptionFilter}
                onCategoryFilter={setCategoryFilter}
                onUpdateFilters={updatesApiData}
            />
            <ApisTableData apisData={apisData}/>
        </>
    );
}

export default ApisPage;