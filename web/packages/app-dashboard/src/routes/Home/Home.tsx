import React from 'react';

import PageContainer, {
  MY_CONTACTS,
  CONTACT_MENU
} from '../../components/PageContainer';

export function Home() {
  return (
    <PageContainer activeSubMenu={MY_CONTACTS} activeMainMenu={CONTACT_MENU}>
    </PageContainer>
  );
}
export default Home;
