import { configure, addDecorator } from '@storybook/react';

import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import baseTheme from "../src/styles/baseTheme";

const themes = [baseTheme];

addDecorator(withThemesProvider(themes));

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
