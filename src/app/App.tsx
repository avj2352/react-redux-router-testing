import {useColorMode} from '@chakra-ui/color-mode';
import { SimpleGrid } from '@chakra-ui/react';
import React, {FunctionComponent} from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../common/state/store';

const App : FunctionComponent = () => {
    const version = useSelector((state: IAppState) => state.version);
    const {toggleColorMode} = useColorMode();

    React.useEffect(() => {
        toggleColorMode()
    }, []);

    return (
        <React.Fragment>
            <SimpleGrid
                columns={4}
                w="full"
                p={5}
                borderRadius={5}
                minH={{
                base: '100vh',
                md: '80vh'
            }}>
                {version} Chakra, Redux, React Testing Library
            </SimpleGrid>
        </React.Fragment>
    );
};

export default App;
