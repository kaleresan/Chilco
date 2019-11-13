import React from 'react';
import { storiesOf } from '@storybook/react';

import { ActionMenu } from './ActionMenu';
import ActionMenuItem from './ActionMenuItem';

storiesOf('ActionMenu ', module)
  .add('default', () => <ActionMenu />)
  .add('with items', () => (
    <ActionMenu>
      {close => (
        <>
          <ActionMenuItem>Info</ActionMenuItem>
          <ActionMenuItem>
            Info 1uig3r827z2791099r3093u0981ß29840821094870912709hriubi
          </ActionMenuItem>
          <ActionMenuItem>Welcome</ActionMenuItem>
        </>
      )}
    </ActionMenu>
  ));
