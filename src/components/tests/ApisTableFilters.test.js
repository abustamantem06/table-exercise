import renderer from 'react-test-renderer';
import ApisTableFilters from '../ApisTableFilters';

describe('ApiTableFilters', () => {
    it('renders correctly', () => {
        const tree = renderer
        .create(<ApisTableFilters />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});