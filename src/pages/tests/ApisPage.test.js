import renderer from 'react-test-renderer';
import ApisPage from '../ApisPage';

describe('#ApisPage', () => {
    it('renders correctly', () => {
        const tree = renderer
        .create(<ApisPage />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});