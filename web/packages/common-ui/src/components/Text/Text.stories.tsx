import React from 'react';
import { storiesOf } from '@storybook/react';

import { Subline, Headline, Text } from './Text';

storiesOf('Text', module)
  .add('Headline', () => <Headline>This is a Awesome Headline!</Headline>)
  .add('Subline', () => <Subline>This is a Awesome Headline!</Subline>)
  .add('Default Text', () => (
    <Text>
      Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
      mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi
      a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri
      Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
      Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da
      gibt’s koa Sünd, etza!
    </Text>
  ));
