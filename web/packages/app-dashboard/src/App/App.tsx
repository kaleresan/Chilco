import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { baseTheme, AppContainer } from '@chilco/common-ui';

import createStore from './store';
import { Modals } from './../modals';
import { AppRouter } from './AppRouter';
import { Alerts } from '../components/Alerts';
import { local, messages } from '../locales/locales';
import { PersistGate } from 'redux-persist/integration/react';
import AuthenticationWrapper from '../components/AuthenticationWrapper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bb86fc'
    },
    secondary: {
      light: '#66fff9',
      main: '#03dac6',
      contrastText: '#000000'
    },
    background: {
      default: '#f5f5f5'
    }
  }
});

export const { persistor, store } = createStore();
export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider locale={local} messages={messages[local]}>
          <StyledThemeProvider theme={baseTheme}>
            <ThemeProvider theme={theme}>
              <AuthenticationWrapper>
                <AppContainer>
                  <AppRouter />
                  <Modals />
                  <Alerts />
                </AppContainer>
              </AuthenticationWrapper>
            </ThemeProvider>
          </StyledThemeProvider>
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
