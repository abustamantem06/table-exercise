import axios from 'axios';
import { PUBLIC_APIS_URL } from './constants';

export const fetchPublicApisData = async (authFilter, httpsFilter, corsFilter, nameFilter, descriptionFilter, categoryFilter) => {
    // url is built based on parameters
    const url = buildURL(authFilter, httpsFilter, corsFilter);
    try {
        const response = await (await axios.get(url));

        // there is a chance of not getting results depending on search params
        // in that case 'entries' would be null, value is set to empty array in our end to avoid issues
        const apisData = response.data.entries || [];

        // filters by using url params are limited to Auth, HTTPS & CORS 
        // additional filters are ran in our end for name, description and category before sending back data
        return filterApisData(apisData, nameFilter, descriptionFilter, categoryFilter);
    } catch (error) {
        console.error(error);
    }
}

export const filterApisData = (apisData, nameFilter, descriptionFilter, categoryFilter) => {
    // filter data when name, description & category filters is not empty
    return apisData
        .filter(api => !nameFilter || api.API.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter(api => !descriptionFilter || api.Description.toLowerCase().includes(descriptionFilter.toLowerCase()))
        .filter(api => !categoryFilter || api.Category.toLowerCase().includes(categoryFilter.toLowerCase()))
}

export const buildURL = (authFilter, httpsFilter, corsFilter) => {
    const url = new URL(PUBLIC_APIS_URL);

    // if filters are not empty we added them as url parameters
    if (authFilter) {
        url.searchParams.append('Auth', authFilter);
    }

    if (httpsFilter) {
        url.searchParams.append('HTTPS', httpsFilter);
    }

    if (corsFilter) {
        url.searchParams.append('CORS', corsFilter);
    }
    return url.href;
}

