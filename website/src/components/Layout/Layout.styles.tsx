import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

export const theme: Theme = {
  fonts: {
    sansSerif:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  colors: {
    primary: '#42b883',
    primaryLight: lighten(0.01, '#42b883'),
    primaryDark: darken(0.1, '#42b883'),

    secondary: '#347474',
    secondaryLight: lighten(0.25, '#347474'),
    secondaryDark: darken(0.25, '#347474'),

    accent: '#ff7e67',
    accentLight: lighten(0.25, '#ff7e67'),
    accentDark: darken(0.25, '#ff7e67'),

    success: '#4bb25f',
    successLight: lighten(0.25, '#4bb25f'),
    successDark: darken(0.25, '#4bb25f'),

    warning: '#c8a227',
    warningLight: lighten(0.25, '#c8a227'),
    warningDark: darken(0.25, '#c8a227'),

    danger: '#f44336',
    dangerLight: lighten(0.25, '#f44336'),
    dangerDark: darken(0.25, '#f44336'),

    white: '#f7fff7',

    black: lighten(0.2, '#000'),
    graphite: lighten(0.35, '#000'),
    mediumGray: lighten(0.85, '#000'),
    lightGray: lighten(0.9, '#000'),
  },
  layout: {
    areas: {
      header: 'header',
      content: 'content',
      footer: 'footer',
      sidebar: 'sidebar',
    },
  },
  breakpoint: {
    small: '520px',
    medium: '769px',
    large: '1025px',
  },
};

export const MainContainer = styled.main<EmotionDefaults>`
  grid-area: ${props => props.theme.layout.areas.content};
`;

export const SidebarContainer = styled.section<EmotionDefaults>`
  display: flex;
  flex-direction: column;
  grid-area: ${props => props.theme.layout.areas.sidebar};

  & > * {
    flex-grow: 1;
  }
`;

export const LayoutContainer = styled.div<
  EmotionDefaults & { displayNavigation: boolean }
>`
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content 1fr min-content;
  grid-template-columns: ${props =>
    props.displayNavigation ? '100%' : '280px 1fr'};
  grid-template-areas: ${props =>
    props.displayNavigation
      ? '"header" "content" "footer"'
      : '"header header" "sidebar content" "sidebar footer"'};
`;
