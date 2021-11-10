import renderer from 'react-test-renderer';
import ApisTableData from '../ApisTableData';
import { MOCK_RESPONSE } from './mockResponse';

describe('ApiTableData', () => {
    it('renders correctly without data', () => {
        const tree = renderer
            .create(<ApisTableData />)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when data has less then max elements per page', () => {
        const apisData = [{ API: 'name test', Description: 'description test', Category: 'category test'}];
        const tree = renderer
            .create(<ApisTableData apisData={apisData}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when data has more than max elements per page', () => {
        const tree = renderer
            .create(<ApisTableData apisData={MOCK_RESPONSE}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});