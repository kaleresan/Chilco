import React from 'react';
import { storiesOf } from '@storybook/react';

import { DateInputWithTitle } from './DateInputWithTitle';

storiesOf('DateInputWithTitle', module)
  .add('default', () => <DateInputWithTitle title="" />)
  .add('with title', () => <DateInputWithTitle title="Hallo" />)
  .add('with title and placeholder', () => (
    <DateInputWithTitle title="Hallo" placeholder="Hallo" />
  ));
