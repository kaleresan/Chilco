import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { IntlShape, injectIntl } from 'react-intl';

import {
  Sidebar,
  EmailIcon,
  ContactIcon,
  SubMenuItem,
  MainMenuItem,
  CalendarIcon,
  SubMenuTitle,
  ContactsIcon,
  InvertedHelpIcon
} from '@chilco/common-ui';

const StyledContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.white};
`;
const StyledContent = styled.div`
  flex: 1;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
  flex-direction: column;
`;

const StyledEmailIcon = styled(EmailIcon)`
  width: 25px;
  height: 25px;
`;
const StyledContactIcon = styled(ContactIcon)`
  width: 25px;
  height: 25px;
`;
const StyledCalendarIcon = styled(CalendarIcon)`
  width: 25px;
  height: 25px;
`;
const StyledContactsIcon = styled(ContactsIcon)`
  width: 25px;
  height: 25px;
`;
const StyledHelpIcon = styled(InvertedHelpIcon)`
  width: 25px;
  height: 25px;
`;

export const CONTACT_MENU = 1;
export const CALENDAR_MENU = 2;
export const SEQUENCE_MENU = 3;

export const MY_CONTACTS = 1;
export const ALL_CONTACTS = 2;
export const OPEN_CONTACTS = 3;

export const FAIRS_CALENDAR = 1;

interface PropsType {
  children: any;
  intl: IntlShape;
  activeSubMenu?: number;
  activeMainMenu?: number;
  isSubMenuOpen?: boolean;
  open: (path: string) => void;
  customSubMenu?: (() => ReactNode) | null;
}
export function PageContainer({
  intl,
  open,
  children,
  customSubMenu,
  activeSubMenu,
  isSubMenuOpen,
  activeMainMenu
}: PropsType) {
  const msg = (id: string) => intl.formatMessage({ id });
  return (
    <StyledContainer>
      <Sidebar
        isSubMenuOpen={isSubMenuOpen}
        activeMainMenu={activeMainMenu}
        menu={({ activeMainMenu, onMenuClick }) => (
          <>
            <MainMenuItem
              onClick={() => onMenuClick(CONTACT_MENU)}
              isActive={activeMainMenu === CONTACT_MENU}
            >
              <StyledContactIcon />
            </MainMenuItem>
            <MainMenuItem
              onClick={() => onMenuClick(CALENDAR_MENU)}
              isActive={activeMainMenu === CALENDAR_MENU}
            >
              <StyledCalendarIcon />
            </MainMenuItem>
            <MainMenuItem
              onClick={() => onMenuClick(SEQUENCE_MENU)}
              isActive={activeMainMenu === SEQUENCE_MENU}
            >
              <StyledEmailIcon />
            </MainMenuItem>
          </>
        )}
        subMenu={({ activeMainMenu: mainMenu, closeSubMenu }) => {
          if (mainMenu === activeMainMenu && customSubMenu) {
            return customSubMenu();
          }

          switch (mainMenu) {
            case CONTACT_MENU:
              return (
                <>
                  <SubMenuTitle>
                    {msg('SideBar.Contacts.Headline')}
                  </SubMenuTitle>
                  <SubMenuItem
                    onClick={() => {
                      open('/');
                      closeSubMenu();
                    }}
                    icon={<StyledContactIcon />}
                    title={msg('SideBar.Contacts.MyContactTitle')}
                    isActive={
                      activeSubMenu === MY_CONTACTS &&
                      activeMainMenu === CONTACT_MENU
                    }
                  />
                  <SubMenuItem
                    icon={<StyledContactsIcon />}
                    isActive={
                      activeSubMenu === ALL_CONTACTS &&
                      activeMainMenu === CONTACT_MENU
                    }
                    title={msg('SideBar.Contacts.AllContactTitle')}
                  />
                  <SubMenuItem
                    icon={<StyledContactIcon />}
                    isActive={
                      activeSubMenu === OPEN_CONTACTS &&
                      activeMainMenu === CONTACT_MENU
                    }
                    title={msg('SideBar.Contacts.OpenContactsTitle')}
                  />
                  <SubMenuItem
                    icon={<StyledHelpIcon />}
                    title={msg('SideBar.SupportTitle')}
                  />
                </>
              );
            case CALENDAR_MENU:
              return (
                <>
                  <SubMenuTitle>
                    {msg('SideBar.Calendar.Headline')}
                  </SubMenuTitle>
                  <SubMenuItem
                    icon={<StyledCalendarIcon />}
                    onClick={() => open('/fairs')}
                    title={msg('SideBar.Calendar.Events')}
                    isActive={
                      activeSubMenu === FAIRS_CALENDAR &&
                      activeMainMenu === CALENDAR_MENU
                    }
                  />
                  <SubMenuItem
                    icon={<StyledHelpIcon />}
                    title={msg('SideBar.SupportTitle')}
                  />
                </>
              );
            case SEQUENCE_MENU:
              return (
                <>
                  <SubMenuTitle>
                    {msg('SideBar.Sequence.Headline')}
                  </SubMenuTitle>
                  <SubMenuItem
                    icon={<StyledHelpIcon />}
                    title={msg('SideBar.SupportTitle')}
                  />
                </>
              );
            default:
              return null;
          }
        }}
      />
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
}
export default injectIntl(
  connect(
    null,
    (dispatch: any) => ({
      open: (path: string) => dispatch(push(path))
    })
  )(PageContainer)
);
