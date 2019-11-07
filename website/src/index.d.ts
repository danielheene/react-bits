type NavItem = {
  id: string;
  name: string;
  relativeUrl: string;
};

type NavTree = {
  [key: string]: NavItem[];
};

type Theme = {
  fonts: {
    sansSerif: string;
    monospace: string;
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    accent: string;
    accentLight: string;
    accentDark: string;
    success: string;
    successLight: string;
    successDark: string;
    warning: string;
    warningLight: string;
    warningDark: string;
    danger: string;
    dangerLight: string;
    dangerDark: string;
    white: string;
    black: string;
    graphite: string;
    mediumGray: string;
    lightGray: string;
  };
  layout: {
    areas: {
      header: string;
      content: string;
      footer: string;
      sidebar: string;
    };
  };
  breakpoint: {
    small: string;
    medium: string;
    large: string;
  };
};

type EmotionDefaults = {
  theme?: Theme;
};
