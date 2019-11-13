import React from 'react';
import { storiesOf } from '@storybook/react';

import { PrimaryButton } from './PrimaryButton';

storiesOf('Button', module).add('with text', () => <PrimaryButton />);
