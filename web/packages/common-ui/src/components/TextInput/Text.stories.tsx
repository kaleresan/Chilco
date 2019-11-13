import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextInput } from './TextInput';

storiesOf('TextInput', module)
  .add('default', () => <TextInput />)
  .add('with title', () => <TextInput placeholder="Hallo" />);
