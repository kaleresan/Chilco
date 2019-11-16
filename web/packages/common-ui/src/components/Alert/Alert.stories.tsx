import React from 'react';
import { storiesOf } from '@storybook/react';

import { Alert } from './Alert';

storiesOf('Alert', module).add('default', () => (
  <Alert
    headline={'Your are sure ? .......'}
    description={
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
  />
));
