import React from 'react';
import { storiesOf } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ContactIcon } from '../Icons';
import MainMenuItem from './MainMenuItem';
import SubMenuItem from './SubMenuItem';
import { SubMenuTitle } from './SubMenuTitle';

storiesOf('Sidebar', module)
  .add('Default', () => <Sidebar />)
  .add('with main menu', () => (
    <Sidebar
      menu={() => (
        <MainMenuItem isActive>
          <ContactIcon />
        </MainMenuItem>
      )}
    />
  ))
  .add('with main and sub menu', () => (
    <Sidebar
      isSubMenuOpen
      menu={() => (
        <MainMenuItem isActive>
          <ContactIcon />
        </MainMenuItem>
      )}
      subMenu={() => (
        <>
          <SubMenuTitle>Contacts</SubMenuTitle>
          <SubMenuItem icon={<ContactIcon />} title={'My Contacts'} />
        </>
      )}
    />
  ));
