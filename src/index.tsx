import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
// custom
import App from './app/App';
import theme from './theme/theme-config';
import {store} from './common/state/store';
import './assets/styles/style.css';

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </Provider>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();