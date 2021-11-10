import * as API from '../api';
import axios from 'axios';
import { PUBLIC_APIS_URL } from '../constants';

jest.mock('axios');

describe('#fetchPublicApisData', () => {
    it('should send request from API', async () => {
        const response = {
            data: {
                entries: [{ API: 'name test', Description: 'description test', Category: 'category test'}]
            }
        }

        axios.get.mockImplementationOnce(() => Promise.resolve(response));

        const responseData = await API.fetchPublicApisData('', '', '', '', '', '');

        expect(responseData).toHaveLength(1);
        expect(axios.get).toHaveBeenCalledWith(PUBLIC_APIS_URL);
    });
});

describe('#filterApisData', () => {
    let apisData = [];

    beforeAll(() => {
        apisData = [
            {API:'Names', Description:'List all names', Category:'Humans'},
            {API:'AnimalsAPI', Description:'All species', Category:'Animals'},
            {API:'Movies', Description:'Any genre', Category:'Entertainment'},
            {API:'Videogames', Description:'Videogame library', Category:'Entertainment'},
        ]
    });

    it('all data should be returned when no filter parameters are sent', () => {
        const actualFilteredResults = API.filterApisData(apisData, '', '', '');

        expect(actualFilteredResults).not.toBeNull();
        expect(actualFilteredResults).toEqual(apisData);
    });

    it('filters results by Name when parameter is sent', () => {
        const actualFilteredResults = API.filterApisData(apisData, 'Animals', '', '');

        expect(actualFilteredResults).toHaveLength(1);
        expect(actualFilteredResults[0].API).toBe('AnimalsAPI');
        expect(actualFilteredResults[0].Description).toBe('All species');
        expect(actualFilteredResults[0].Category).toBe('Animals');
    });
});

describe('#buildURL', () => {

    it('should return the PUBLIC_APIS_URL without alterations when parameters are empty', () => {
        const actualURL = API.buildURL('', '', '');
        expect(actualURL).toBe(PUBLIC_APIS_URL);
    });

    it('should change parameters when Auth filter is set', () => {
        const actualURL = API.buildURL('apiKey', '', '');
        expect(actualURL).toBe(`${PUBLIC_APIS_URL}?Auth=apiKey`);
    });

    it('should change parameters when HTTPS filter is set', () => {
        const actualURL = API.buildURL('', 'true', '');
        expect(actualURL).toBe(`${PUBLIC_APIS_URL}?HTTPS=true`);
    });

    it('should change parameters when CORS filter is set', () => {
        const actualURL = API.buildURL('', '', 'unknown');
        expect(actualURL).toBe(`${PUBLIC_APIS_URL}?CORS=unknown`);
    });

    it('should change parameters in URL when multiple filters are set', () => {
        const actualURL = API.buildURL('apiKey', 'true', 'unknown');
        expect(actualURL).toBe(`${PUBLIC_APIS_URL}?Auth=apiKey&HTTPS=true&CORS=unknown`);
    });
});