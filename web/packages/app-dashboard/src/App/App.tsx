import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import { baseTheme, AppContainer } from '@chilco/common-ui';

import createStore from './store';
import { Modals } from './../modals';
import { AppRouter } from './AppRouter';
import { Alerts } from '../components/Alerts';
import { local, messages } from '../locales/locales';
import { PersistGate } from 'redux-persist/integration/react';
import AuthenticationWrapper from '../components/AuthenticationWrapper';

export const { persistor, store } = createStore();
export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider locale={local} messages={messages[local]}>
          <ThemeProvider theme={baseTheme}>
            <AuthenticationWrapper>
              <AppContainer>
                <AppRouter />
                <Modals />
                <Alerts />
              </AppContainer>
            </AuthenticationWrapper>
          </ThemeProvider>
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
