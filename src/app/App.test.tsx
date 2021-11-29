import {render, screen} from '../common/helpers/TestUtil';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';

describe("<App/>", () => {
    it('renders App component with Redux & ReactRouter Provider', () => {
        render(
            <ChakraProvider><App/></ChakraProvider>
        );
        // expect(<App/>).toBeTruthy(); // If your app consists of multiple components use this
        const text = screen.getByText(/Chakra, Redux, React Testing Library/);
        expect(text).toBeInTheDocument();
    });
});
