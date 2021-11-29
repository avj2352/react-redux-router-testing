import React, { FunctionComponent } from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/provider';
// custom
import { store } from '../state/store';
import theme from '../../theme/theme-config';

const history = createMemoryHistory();

const ReduxProvider: FunctionComponent =  ({children}): JSX.Element => {
    return <Provider store={store}>
        <ChakraProvider theme={theme}>
        <Router history={history}>
            {children}
        </Router>
        </ChakraProvider>
    </Provider>;
};

const reduxRender = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options?: []) => {
    if (options) {return render(ui, {wrapper: ReduxProvider}, ...options); }
    else return render(ui, {wrapper: ReduxProvider});
};

export * from "@testing-library/react";

export { reduxRender as render }; 
