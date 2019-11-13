import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import VLogo from '../Icons/VLogo';
import MenuIcon from '../Icons/MenuIcon';
import HelpIcon from '../Icons/HelpIcon';
import SettingsWheelIcon from '../Icons/SettingsWheelIcon';

const StyledContainer: any = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition: width 200ms;
  width: ${({ isToggled }: any) => (isToggled ? '324px' : '77px')};
`;
const StyledSidebar: any = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  padding: 24px 0 12px 0;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ isToggled }: any) => (isToggled ? '62px' : '60px')};
  border-right: ${({ isToggled }: any) => (isToggled ? '2px' : '0px')} solid
    rgb(213, 25, 102);
`;
const StyledContent: any = styled.div`
  z-index: 0;
  height: 100%;
  width: 250px;
  margin-right: 16px;
  padding: 0 0 0 60px;
  transition: transform 200ms;
  background-color: ${({ theme }) => theme.colors.primary};
  transform: translateX(
    ${({ isToggled }: any) => (isToggled ? '0px' : '-250px')}
  );
`;
const StyledTop = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledBottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledButton = styled.button`
  padding: 0;
  z-index: 2;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 16px 0 0;
  background-color: transparent;
`;
const StyledVLogo = styled(VLogo)`
  margin-bottom: 32px;
`;
const StyledMenuButton: any = styled.button`
  top: 72px;
  left: 0px;
  z-index: 2;
  width: 28px;
  height: 28px;
  display: flex;
  outline: none;
  position: absolute;
  padding-bottom: 1px;
  border-radius: 16px;
  align-content: center;
  justify-content: center;
  transition: transform 200ms;
  transform: translateX(
    ${({ isToggled }: any) => (isToggled ? '296px' : '48px')}
  );
  border: 1px solid rgb(146, 146, 146);
`;

interface MenuPropsType {
  activeMainMenu: number;
  onMenuClick: (activeMenu: number) => void;
}
interface SubMenuPropsType {
  showSubMenu: boolean;
  activeMainMenu: number;
  closeSubMenu: () => void;
}
interface PropsType {
  activeMainMenu?: number;
  isSubMenuOpen?: boolean;
  menu?: (props: MenuPropsType) => ReactNode | null;
  subMenu?: (props: SubMenuPropsType) => ReactNode | null;
}
export function Sidebar({
  menu = () => null,
  activeMainMenu = 0,
  subMenu = () => null,
  isSubMenuOpen = false
}: PropsType) {
  const [showSubMenu, setShowSubMenu] = useState(isSubMenuOpen);
  const [activeMainMenuState, setActiveMainMenu] = useState(activeMainMenu);

  return (
    <StyledContainer isToggled={showSubMenu}>
      <StyledSidebar isToggled={showSubMenu}>
        <StyledTop>
          <StyledVLogo />
          {menu({
            onMenuClick: (activeMenu: number) => {
              if (showSubMenu && activeMainMenuState === activeMenu) {
                setShowSubMenu(false);
                return;
              }

              setShowSubMenu(true);
              setActiveMainMenu(activeMenu);
            },
            activeMainMenu: activeMainMenuState
          })}
        </StyledTop>
        <StyledBottom>
          <StyledButton>
            <HelpIcon />
          </StyledButton>
          <StyledButton>
            <SettingsWheelIcon />
          </StyledButton>
        </StyledBottom>
      </StyledSidebar>
      <StyledContent isToggled={showSubMenu}>
        {subMenu({
          showSubMenu,
          activeMainMenu: activeMainMenuState,
          closeSubMenu: () => setShowSubMenu(false)
        })}
      </StyledContent>
      <StyledMenuButton
        isToggled={showSubMenu}
        onClick={() => setShowSubMenu(!showSubMenu)}
      >
        <MenuIcon color="rgb(146, 146, 146)" />
      </StyledMenuButton>
    </StyledContainer>
  );
}
