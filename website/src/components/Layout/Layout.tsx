import React, { FC } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import {
  theme,
  LayoutContainer,
  MainContainer,
  SidebarContainer,
} from './Layout.styles';
import { CSSPreflight } from './Layout.prefilight';

interface LayoutProps {
  navItems?: NavTree;
}

export const Layout: FC<LayoutProps> = ({ children, navItems }) => (
  <ThemeProvider theme={theme}>
    <CSSPreflight />
    <LayoutContainer displayNavigation={!navItems}>
      <Header />
      {navItems && (
        <SidebarContainer>
          <Navigation className="layout__sidebar" items={navItems} />
        </SidebarContainer>
      )}
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  </ThemeProvider>
);

export default Layout;
