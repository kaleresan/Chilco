import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import * as icons from '.';

storiesOf('icons', module).add('default', () => {
  const iconArray = Object.keys(icons);

  return (
    <ul>
      {iconArray.map(iconName => {
        console.log(iconName);
        const Icon = icons[iconName];
        const StyledIcon = styled(Icon)`
          height: 40px;
        `;
        return (
          <li>
            <StyledIcon color="black" key={iconName} />
          </li>
        );
      })}
    </ul>
  );
});
