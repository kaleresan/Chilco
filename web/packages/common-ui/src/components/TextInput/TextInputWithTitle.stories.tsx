import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextInputWithTitle } from './TextInputWithTitle';

storiesOf('TextInputWithTitle', module)
  .add('default', () => <TextInputWithTitle title="" />)
  .add('with title', () => <TextInputWithTitle title="Hallo" />)
  .add('with title and placeholder', () => (
    <TextInputWithTitle title="Hallo" placeholder="Hallo" />
  ));
