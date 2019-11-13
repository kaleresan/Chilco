import React from 'react';
import { storiesOf } from '@storybook/react';

import { ProfilePicture } from './ProfilePicture';

storiesOf('ProfilePicture', module).add('default', () => (
  <ProfilePicture firstName="Christoph" lastName="Abs" />
));
