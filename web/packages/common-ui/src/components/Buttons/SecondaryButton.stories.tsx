import React from 'react';
import { storiesOf } from '@storybook/react';

import { SecondaryButton } from './SecondaryButton';

storiesOf('SecondaryButton', module).add('with text', () => (
  <SecondaryButton>Text</SecondaryButton>
));
